import styled from 'styled-components';

const HeroTitle = styled.span`
  font-size: 10rem;
  line-height: 9rem;
`;

const HeroTitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 64px;
`;

const HeroContainer = styled.div``;
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
      <HeroTitleContainer>
        <HeroTitle>Friday.</HeroTitle>
        <HeroTitle>For.</HeroTitle>
        <HeroTitle>Future.</HeroTitle>
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
