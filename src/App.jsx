import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor: '#383838'}}>
      <Navbar />
    </div>
  )
}

export default App
