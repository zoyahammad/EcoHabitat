import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './LandingTextStyles';

const LandingText = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Join the Green Movement!
        </SectionTitle>
        <SectionText>
        At Eco Habitat, we believe in empowering individuals to make informed decisions about their energy usage and contribute to a sustainable future. Our platform provides you with the tools and insights you need to optimize your energy consumption, reduce wastage, and lower your environmental footprint.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default LandingText;
