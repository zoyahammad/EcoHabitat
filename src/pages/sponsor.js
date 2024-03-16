import { Layout } from '../layout/Layout';
import { Section, SectionTitle, SectionText, Img } from '../styles/GlobalComponents';

const SponsorPage = () => {
  return (
    <Layout>
      <Section grid>
        <SectionTitle main center>
          Sponsorship & Donations
        </SectionTitle>
        <br></br>
        <SectionText>
          Eco Habitat is a non-profit organization working towards sustainability. In order for us to cover our operational costs and sustain in the long run, we are open to donations ❤️
          <br></br><br></br>
          For sponorship or donations, feel free to contact us at hello@ecohabitat.com
        </SectionText>
      </Section>
      <Section grid>
        <Img src='/images/aws.webp'></Img>
        <Img src='/images/unilever.png'></Img>
        <Img src='/images/ikea.png'></Img>
      </Section>
    </Layout>
  );
};

export default SponsorPage;