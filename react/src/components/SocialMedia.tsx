import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SocialIconContainer = styled.div`
  /* display: inline-grid;
  grid-gap: 50px; */
  margin-top: 20px;
  svg {
    width: 50px;
    padding: 0 20px;
    height: 50px;
  }
`;

export const SocialMedia = () => (
  <SocialMediaContainer>
    <h2>See us on Social</h2>
    <SocialIconContainer>
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />
      <FiYoutube />
    </SocialIconContainer>
  </SocialMediaContainer>
);
