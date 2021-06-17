import React, { useEffect, useState } from 'react'

import Header from '../../components/Header/index'
import API from '../../services/api.js'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useHistory } from 'react-router-dom'


import { QuestionsBlock, Image, AlternativesBlock, QuestionsContent, Questions, AlternativeButton, Loading, Button } from './styles.js'


const PagesQuestions = () => {

    const [listQuestions, setListQuestions] = useState();
    const [index, setIndex] = useState(0);
    const [inProgress, setInProgress] = useState(1);
    const [currentAnswer, setCurrentAnswer] = useState();
    const [userResponse, setUserResponse] = useState([]);
    const history = useHistory();

    async function questions(){
        const count = await localStorage.getItem("count");
        const response = await API.get(`?amount=${count}`);
        let dataFormatted = [] 
        if( response.status === 200 ){
            response.data.results.map((item)=>{
                return(
                    dataFormatted.push({
                        incorrect_answers: [item.incorrect_answers],
                        question: item.question,
                        answers: [item.correct_answer, ...item.incorrect_answers].sort(),
                        correct_answer: item.correct_answer
                    })
                )
            })
        }
        setListQuestions(dataFormatted)
    }

    function nextQuestions(){   
        if(currentAnswer){
            let responseFormatted = {
                question: listQuestions[index].question,
                answers: listQuestions[index].answers,
                correct_answer: listQuestions[index].correct_answer,
                incorrect_answers: listQuestions[index].incorrect_answers,
                current_answer: currentAnswer
            }
            
            setUserResponse ([responseFormatted, ...userResponse])
            setCurrentAnswer()

            if(index < listQuestions.length-1){
                setIndex(index + 1)
                setInProgress(inProgress + 1)
                console.log(userResponse)
            }else{
                saveLocalStorage(userResponse)
                history.push('/');
            }

        }else{ alert("select a question") }
    }

    function saveLocalStorage (){
        if(userResponse.length === listQuestions.length){
            console.log("entrou")
            localStorage.setItem("userResponse", JSON.stringify(userResponse))
        }
    }

    function active(event){
        let button = event.target
        setCurrentAnswer(event.target.outerText)
        const allButtons = (button.parentNode.children);
        for(let i=0; i<allButtons.length; i++){
            allButtons[i].removeAttribute("id")
        }
        button.setAttribute("id", "active")
    }

    function getProgress(){
        return (inProgress / listQuestions.length * 100).toFixed(2);
    }

    useEffect(() => {
        questions()
    },[])

    return (
        <>
            <Header/>
            <QuestionsBlock>
                <QuestionsContent>
                    { listQuestions ?     
                        <AlternativesBlock>
                            <LinearProgress id={"linear"} variant="determinate" value={getProgress()}/>
                            <Questions>{listQuestions[index].question}</Questions>
                            <div>   
                                {listQuestions[index].answers.map ((answer) => {
                                    return(
                                        <AlternativeButton id={"option"} onClick={active} key={answer}>{answer}</AlternativeButton>
                                    )
                                })}
                            </div>
                            <Button onClick={nextQuestions}>Next</Button>
                        </AlternativesBlock>
                    : 
                        <Loading>Loading...</Loading>
                    }
                </QuestionsContent>
            </QuestionsBlock>
            <Image src="/vectorDown.svg" alt='Vector Down'/> 
        </>
    );
}
    
export default PagesQuestions;