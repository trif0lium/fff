import React from 'react'

export interface Props {
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ children }: Props) => {
  return <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}><div style={{ margin: "0 24px" }}>{children}</div></div>
}
