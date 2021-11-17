import {
  BsFacebook as Facebook,
  BsTwitter as Twitter,
  BsInstagram as Instagram,
  BsYoutube as YouTube,
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
  grid-gap: 40px; */
  svg {
    width: 40px;
    padding: 0 20px;
    height: 40px;
  }
  color: #fff;
`;

const Link = styled.a`
  color: #000000;
`;

export const SocialMedia = () => (
  <SocialMediaContainer>
    <SocialIconContainer>
      <Link href="https://www.youtube.com/channel/UChb23_19GTIWDF7-zXNrT3g">
        <Facebook />
      </Link>
      <Link href="https://twitter.com/Fridays4future">
        <Twitter />
      </Link>
      <Link href="https://www.instagram.com/fridaysforfuture/">
        <Instagram />
      </Link>
      <Link href="https://www.facebook.com/FridaysForFuture.org/">
        <YouTube />
      </Link>
    </SocialIconContainer>
  </SocialMediaContainer>
);
