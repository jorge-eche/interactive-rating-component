import { useState } from 'react'
import Form from './components/Form'
import Thankyou from './components/Thankyou'

function App() {

const [isRated, setIsRated] = useState(false)

const [rate, setRate] = useState(0)

  return (
    <div>
        {isRated ? (
        <Thankyou
        rate={rate}
        /> 
        ) : (
        <Form
        setIsRated={setIsRated}
        rate={rate}
        setRate={setRate}
        />
        )}   
        <footer>        
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Jorge Enrique Echeverría</a> .
        </footer>
    </div>
  )
}

export default App
