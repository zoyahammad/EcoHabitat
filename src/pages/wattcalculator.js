import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText } from '../styles/GlobalComponents';
import FunFact from '../components/FunFact/FunFact';
import CalculatorForm from '../components/CalculatorForm/CalculatorForm';

const WattCalculatorPage = () => {
  return (
    <Layout>
      <Section grid>
        <LeftSection>
          <SectionTitle main center>
            Watt Calculator ⚡
          </SectionTitle>
          <SectionText>
          You can estimate your daily energy consumption in Watts by filling out the form below. Select today’s used appliances, specify the number of hours they were used for, and we’ll give you a rough estimate for your daily energy consumption.  You can also find some interesting data <a href="https://www.daftlogic.com/information-appliance-power-consumption.htm">here</a>.
          </SectionText>
        </LeftSection>
        <FunFact></FunFact>
      </Section>
      <CalculatorForm></CalculatorForm>
    </Layout>
  );
};

export default WattCalculatorPage;
