import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
 
const Hero = (props) => (
  <>
   <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Welcome To <br/>
       Hypericron
      </SectionTitle>
      <SectionText>
        Blockchain to the next level.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
     </LeftSection>
 </Section>
 </>
);

export default Hero;