import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText } from '../styles/GlobalComponents';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Streak from '../components/Streak/Streak';
import { lineChartData } from '../constants/constants';

const colors = ['#3f51b5', '#ff9800', '#2196f3'];

const ProfilePage = () => {
    return (
        <Layout>
            <Section grid>
                <LeftSection>
                    <SectionTitle main center>
                        Your Progress
                    </SectionTitle>
                    <br></br>
                    <SectionText>
                        Congratulations, you're getting better! 🎉🥳<br></br><br></br>
                    </SectionText>
                    <br></br><br></br>
                    <LineChart width={600} height={300} data={lineChartData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke={colors[0]} name="Total" />
                    </LineChart>
                    <br></br><br></br>
                    <SectionText>
                        <br></br>
                        Here you can evaluate how your daily average energy consumption (in Watts) changed over the past months.
                    </SectionText>
                </LeftSection>
                <Streak></Streak>
            </Section>
        </Layout>
    );
};

export default ProfilePage;
