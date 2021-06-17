import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


import Header from '../../components/Header/index'
import Count from '../../components/Count/index'
import { useCount } from '../../context/Count.js';

import { TextContent, HomeContent, HomeBlock, ImagesBlock, TextBlock, Image, ImageBackground, ButtonStart } from './styles.js'

const PagesHome = () => {
    const { count } = useCount();

    const history = useHistory();

    function handleClick() {
        localStorage.setItem("count", (count))
        history.push('/verification');
    }

    return (
        <>
            <HomeBlock>
                <Header />
                <button onClick={() => {
                    const reports = localStorage.getItem('reports').split('###').map((answers) => JSON.parse(answers))

                    console.log(reports)
                }}>Relatórios anteriores</button>
                {/* <Link id="report" to ="/previousReports">Relatórios anteriores</Link> */}
                <HomeContent>
                    <ImagesBlock>
                        <Image src='/group.svg' alt='group' />
                        <ImageBackground src='/groupBackground.svg' alt='group Background' />
                    </ImagesBlock>
                    <TextBlock>
                        <h2>How many questions do you want to answer?</h2>
                        <TextContent>
                            <Count />
                            <ButtonStart onClick={handleClick}>Start</ButtonStart>
                        </TextContent>
                    </TextBlock>
                </HomeContent>
            </HomeBlock>
        </>
    );
}

export default PagesHome;