import React from 'react'
import styled from 'styled-components'

interface Props {
  number: number
  heading: string
  startColor: string
  endColor: string
}

interface HeadingProps {
  startColor: string
  endColor: string
}

const Heading = styled.h2<HeadingProps>`
  font-size: 2rem;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, ${props => props.startColor ?? '#000'}, ${ props => props.endColor ?? '#000'});
  margin: 16px 0;
`

const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 3.75rem;
  margin: 0
`

export const SectionLabel: React.FC<Props> = ({ number, heading, startColor, endColor }: Props) => {
  return (<>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <span style={{ width: "1px", height: "100px", background: `linear-gradient(#FFF, ${endColor})`, display: "flex" }}></span>
      <div style={{ width: "40px", height: "40px", borderRadius: "1000px", display: "flex", background: `linear-gradient(90deg, ${startColor}, ${endColor})`, color: "#FFF", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <span style={{ display: "flex", fontWeight: 700 }}>{number}</span>
      </div>
      <Heading startColor={startColor} endColor={endColor}>{heading}</Heading>
      <SectionTitle>{heading}</SectionTitle>
    </div>
  </>)
}
