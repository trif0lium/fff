import styled from 'styled-components';

const HeroTitle = styled.span`
  font-size: 8rem;
  line-height: 1.5;
  font-weight: 800;
  @media (max-width: 720px) {
    font-size: 23vw;
  }
`;

const HeroTitleOuter = styled.span`
  height: 8rem;
  font-size: 8rem;
  @media (max-width: 720px) {
    height: 23vw;
    font-size: 23vw;
  }
`;

const HeroTitleOne = styled(HeroTitle)`
  background: linear-gradient(90deg, #007cf0, #00dfd8);
  position: relative;
  z-index: 1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @keyframes hero1 {
    0%,
    100% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  }

  display: block;
  animation: hero1 8s infinite;
`;

const HeroTitleTwo = styled(HeroTitle)`
  background: linear-gradient(90deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  @keyframes hero2 {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  display: block;
  animation: hero2 8s infinite;
`;

const HeroTitlethree = styled(HeroTitle)`
  background: linear-gradient(90deg, #ff4d4d, #f9cb28);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  @keyframes hero3 {
    0%,
    100% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
  }

  display: block;
  animation: hero3 8s infinite;
`;

const HeroTitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 32px 0 96px 0;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
`;
const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 0 25px;
  border: 1px solid black;
  color: #ffffff;
  background-color: black;
  border-radius: 0.25rem;
  height: 50px;
  font-weight: 500;
  line-height: 38px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 64px;
`;

const HeroDescription = styled.div`
  line-height: 1.6em;
  color: #666;
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <small style={{ fontSize: '0.75rem', letterSpacing: '0.2rem', padding: 0, margin: 0, fontWeight: 700 }}>
        P2 CONTROL
      </small>
      <HeroTitleContainer>
        <HeroTitleOuter>
          <HeroTitleOne>Fridays.</HeroTitleOne>
        </HeroTitleOuter>
        <HeroTitleOuter>
          <HeroTitleTwo>For.</HeroTitleTwo>
        </HeroTitleOuter>
        <HeroTitleOuter>
          <HeroTitlethree>Future.</HeroTitlethree>
        </HeroTitleOuter>
      </HeroTitleContainer>
      <ActionContainer>
        <ActionButton>Start Action Today</ActionButton>
      </ActionContainer>
      <HeroDescription>
        #FridaysForFuture is a youth-led and organised movement that began in August 2018. It was started by 15-year-old
        Greta Thunberg, who sat in front of the Swedish parliament every schoolday for three weeks.
      </HeroDescription>
    </HeroContainer>
  );
};
