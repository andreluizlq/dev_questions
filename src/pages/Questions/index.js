import React, { useEffect, useState } from 'react'

import Header from '../../components/Header/index'
import API from '../../services/api.js'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useHistory } from 'react-router-dom'


import { QuestionsBlock, Image, AlternativesBlock, QuestionsContent, Questions, AlternativeButton, Loading, Button } from './styles.js'


const PagesQuestions = () => {
    const history = useHistory();

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [listQuestions, setListQuestions] = useState([]);

    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const count = await localStorage.getItem("count");
                const response = await API.get(`?amount=${count}`);

                let dataFormatted = []

                if (response.status === 200) {
                    response.data.results.map((item) => {
                        return (
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
            } catch (error) {
                console.log(error);
            }
        }

        fetchQuestions()
    }, [])

    function goToNextQuestion() {
        if (currentAnswer) {
            const isCorrect = currentAnswer === listQuestions[currentQuestion].correct_answer;
            const answer = { ...listQuestions[currentQuestion], isCorrect, selectedAnswer: currentAnswer }

            if (currentQuestion + 1 === listQuestions.length) {
                const reports = localStorage.getItem('reports');
                const final = JSON.stringify([...answers, answer]);

                if (reports) {
                    localStorage.setItem('reports', `${reports}###${final}`)
                } else {
                    localStorage.setItem('reports', final);
                }

                return history.push('/')
            }

            setAnswers([...answers, answer])
            setCurrentQuestion(currentQuestion + 1);

            setCurrentAnswer(null);
            setSelectedAnswer(null);
        } else {
            alert("select a question")
        }
    }

    return (
        <>
            <Header onClick={() => console.log(answers)} />
            <QuestionsBlock>
                <QuestionsContent>
                    {listQuestions.length ?
                        <AlternativesBlock>
                            <LinearProgress
                                value={currentQuestion ? Math.ceil(100 / listQuestions.length) : currentQuestion}
                                id={"linear"}
                                variant="determinate"
                            />
                            <Questions>{listQuestions[currentQuestion].question}</Questions>

                            <div>
                                {listQuestions[currentQuestion].answers.map((answer, index) => {
                                    return (
                                        <AlternativeButton
                                            key={index}
                                            active={selectedAnswer === index}
                                            onClick={() => {
                                                setCurrentAnswer(answer);
                                                setSelectedAnswer(index);
                                            }}
                                        >
                                            {answer}
                                        </AlternativeButton>
                                    )
                                })}
                            </div>

                            <Button onClick={goToNextQuestion}>Next</Button>

                        </AlternativesBlock>
                        :
                        <Loading>Loading...</Loading>
                    }
                </QuestionsContent>
            </QuestionsBlock>

            <Image src="/vectorDown.svg" alt='Vector Down' />
        </>
    );
}

export default PagesQuestions;