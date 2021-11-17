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
      <Paragraph>The Earth's temperature is already rising. These consequences will affect everyone, rich and poor alike, and will be especially devastating for our most vulnerable citizens: the poorest and youngest.</Paragraph>
    </div>
    <div style={{ marginBottom: "64px" }}>
      <Title>We Demand Action</Title>
      <Paragraph>There isn't nearly enough being done to limit global warming. This is why Fridays For Future's purpose is to bring people together around science and convince those in positions of power to take the facts seriously and act accordingly.</Paragraph>
    </div>
    <div>
      <Title>The Crisis is Already Here</Title>
      <Paragraph>While we hope to limit global warming below 1.5 degrees Celsius, we will not give up or disappear if the earth reaches that threshold.</Paragraph>
    </div>
  </div>
  </div>
  )
}
