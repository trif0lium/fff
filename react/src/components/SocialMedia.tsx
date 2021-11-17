import {
  BsFacebook as Facebook,
  BsTwitter as Twitter,
  BsInstagram as Instagram,
  BsYoutube as YouTube
} from 'react-icons/bs';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SocialIconContainer = styled.div`
  /* display: inline-grid;
  grid-gap: 32px; */
  svg {
    width: 32px;
    padding: 0 16px;
    height: 32px;
  }
`;

export const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialIconContainer>
      <Facebook />
      <Twitter />
      <Instagram />
      <YouTube />
    </SocialIconContainer>
  </SocialMediaContainer>
);
