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
  background-image: linear-gradient(90deg, ${props => props.startColor ?? '#000'}, ${ props => props.endColor ?? '#000'})
`

export const SectionLabel: React.FC<Props> = ({ number, heading, startColor, endColor }: Props) => {
  return (<>
    <div style={{ display: "flex" }}>
      <span style={{ width: "40px", height: "40px", borderRadius: "1000", background: `linear-gradient(90deg, ${startColor}, ${endColor})` }}>{number}</span>
      <Heading startColor={startColor} endColor={endColor}>{heading}</Heading>
    </div>
  </>)
}
