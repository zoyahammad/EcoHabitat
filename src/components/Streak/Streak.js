import React from 'react';
import { Image, StreaksContainer } from './StreakStyles.js';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Streak = () => (
  <div>
    <StreaksContainer>
      <SectionTitle>Streaks</SectionTitle>
      <Image src='/images/fire.webp' alt="Image" />
      <Image src='/images/fire.webp' alt="Image" />
      <Image src='/images/fire.webp' alt="Image" />
      <Image src='/images/fire.webp' alt="Image" />
    </StreaksContainer>
    <StreaksContainer>
      <SectionText style={{ paddingLeft: '350px' }}>4x Weeks!</SectionText> <br></br> <br></br>
    </StreaksContainer>
  </div>
);

export default Streak;