import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText } from '../styles/GlobalComponents';
import EarthImage from '../components/EarthImage/EarthImage';
import { appliances } from '../constants/constants';

const WattSearch = () => {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);

  let matchFound = false;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const classifyImage = async () => {
    if (!file) {
      console.error('No input image provided.');
      return;
    }

    // Import ml5 dynamically only on the client-side
    const ml5 = await import('ml5');
    const classifier = await ml5.imageClassifier('MobileNet');
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(file);

    imageElement.onload = () => {
      classifier.classify(imageElement, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log(results);
          setLabels(results[0].label.split(',').map(label => label.trim()));
        }
      });
    };
  };

  const checkAppliance = (label) => {

    for (const [appliance, values] of Object.entries(appliances)) {
      if (appliance.toLowerCase().includes(label.toLowerCase())) {
        return { appliance, values };
      }
    }
    return null;
  };

  return (
    <Layout>
      <Section grid>
        <LeftSection>
          <SectionTitle>Watt Search 🔎</SectionTitle>
          <SectionText>
            Are you confused about which electric appliance is more costly? Do you ever wonder if your hair dryer consumes more energy than a phone charger?
            With our fun Watt Search feature, you can upload an image of a home appliance and we will tell you its approximate minimum, maximum, and standby energy consumption per hour.
          </SectionText>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="#FFFFFF" style={{ textColor: 'black', width: '200px', height: '60px', borderRadius: '15px', fontSize: 13 }} component="span">
              Upload Image
            </Button>
          </label>
          <br></br><br></br>
          <Button variant="contained" color="#FFFFFF" style={{ textColor: 'black', width: '200px', height: '60px', borderRadius: '15px', fontSize: 13 }} onClick={classifyImage}>
            Classify
          </Button>
          <br></br><br></br>
          <div>
            {labels.map((label, index) => {
              if (!matchFound) { // Check if a match has not been found yet
                const match = checkAppliance(label);
                if (match) {
                  matchFound = true; // Update matchFound to indicate a match has been found
                  const { appliance, values } = match;
                  return (
                    <div key={index}>
                      <SectionText>Appliance: {appliance}</SectionText>
                      <SectionText>Min: {values.min} Watts</SectionText>
                      <SectionText> Max: {values.max} Watts</SectionText>
                      <SectionText>Standby: {values.standby} Watts</SectionText>
                    </div>
                  );
                } else {
                  return <div key={index}>Hmm, I am not sure</div>;
                }
              } else {
                // Skip processing the remaining labels if a match has already been found
                return null;
              }
            })}
          </div>
        </LeftSection>
        <EarthImage></EarthImage>
      </Section>
    </Layout>
  );
}

export default WattSearch;
