import styled from "styled-components"

const Title = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 12px;
  font-weight: bold;
`

const Paragraph = styled.p`
  color: #666;
  font-weight: 400;
  line-height: 1.6;
`

export const ReasonsToStrike = () => {
  return (
  <div style={{ display: "flex", justifyContent: "center" }}>
  <div style={{ maxWidth: "600px" }}>
    <div style={{ marginBottom: "64px" }}>
      <Title>Lower Warming, Lower Risk</Title>
      <Paragraph>The Earth is already warming. These effects will impact everyone - rich and poor - and be most devastating to our most vulnerable: the poorest and youngest people.</Paragraph>
    </div>
    <div style={{ marginBottom: "64px" }}>
      <Title>We Demand Action</Title>
      <Paragraph>Not enough is being done to limit warming - not even close. This is why Fridays For Future's mission is to unite behind the science and make those in power take the facts seriously, and act accordingly.</Paragraph>
    </div>
    <div>
      <Title>The Crisis is Already Here</Title>
      <Paragraph>It is important to add that while we want - even demand - action to keep global warming under 1.5 degree Celsius, we will not quit or go away if the planet hits that mark.</Paragraph>
    </div>
  </div>
  </div>
  )
}
