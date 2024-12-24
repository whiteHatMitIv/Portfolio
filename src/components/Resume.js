import React from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefIcon = <BusinessCenterIcon/>
    const schoolIcon = <SchoolIcon/>

    return (
        <MainLayout>
            <ResumeStyles>
                <Title title={'Resume'} span={'Resume'}/>
                <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={briefIcon} title={'Parcours Professionnel'} />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={'jan 2024 - mar 2024'}
                            title={'Stagiaire en Informatique'}
                            sub_title={'FIGEC SA'}
                            text={' maintenance du parc informatique, résolution de problèmes réseaux, suivi de la base de données et création d’un formulaire sécurisé de collecte de données.'}
                        />
                    </div>
                </InnerLayout>
                <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={schoolIcon} title={'Parcours Académique'} />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={"Oct 2024 - Aujourd'hui"}
                            title={'Licence en Génie Logiciel'}
                            sub_title={'IUT-Douala'}
                            text={''}
                        />
                        <ResumeItem
                            year={'Oct 2022 - Jul 2024'}
                            title={'DUT en Informatique'}
                            sub_title={'IUT-Douala'}
                            text={'Mention Bien'}
                        />
                        <ResumeItem
                            year={'Sept 2021 - Jul 2022'}
                            title={'Baccalaureat'}
                            sub_title={'Collège Libermann'}
                            text={'Mention Bien'}
                        />
                        <ResumeItem
                            year={'Sept 2020 - Jul 2021'}
                            title={'Probatoire'}
                            sub_title={'Collège Libermann'}
                            text={'Mention Bien'}
                        />
                    </div>
                </InnerLayout>
            </ResumeStyles>
        </MainLayout>
    )
}

const ResumeStyles = styled.section`
    .small-title {
        margin-bottom: 1.5rem;
    }

    .resume-content {
        margin-left: .25rem;
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume