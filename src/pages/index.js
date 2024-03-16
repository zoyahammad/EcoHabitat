import LandingImage from '../components/LandingImage/LandingImage';
import LandingText from '../components/LandingText/LandingText';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>
      <Section grid>
        <LandingText />
        <LandingImage />
      </Section>
    </Layout>
  );
};

export default HomePage;