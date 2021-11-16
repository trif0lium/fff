import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Title onClick={() => setCount(count + 1)}>Hello Vite + React! {count}</Title>
      </header>
    </div>
  )
}

export default App
