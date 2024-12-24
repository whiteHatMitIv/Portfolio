import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from "../styles/Layout";
import Title from './Title'
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <SkillsStyles>
        <MainLayout>
            <Title title={'Compétences'} span={'Compétences'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'78%'}
                        text={'78%'}
                    />
                    <ProgressBar
                        title={'PYTHON'}
                        width={'92%'}
                        text={'92%'}
                    />
                    <ProgressBar
                        title={'JAVA'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'DART'}
                        width={'83%'}
                        text={'83%'}
                    />
                    <ProgressBar
                        title={'C/C++'}
                        width={'62%'}
                        text={'62%'}
                    />
                </div>
            </InnerLayout>
        </MainLayout>
    </SkillsStyles>
  )
}

const SkillsStyles = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 2rem;
    }
`;

export default Skills