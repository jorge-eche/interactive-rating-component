import IconStar from '../images/icon-star.svg'

const Form = ({
    rate,
    setIsRated,
    setRate
}) => {

      const handleSubmit = e => {
        e.preventDefault()
        if (rate !== 0) {
          setIsRated(true)
        }
        return
    }

  return (
    <div className='container'>
            <div className='star'>
                <img 
                src={IconStar} alt="icono estrella"
                />
            </div>

            <h1>How did we do?</h1>

            <p className='text-form'>Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
        
        <form onSubmit={handleSubmit}>
            <div className='numbers'>
     
                    <input 
                    className='number'
                    type='radio' 
                    name='rate' 
                    value='1' 
                    id="one"
                    onClick={e => setRate(Number(e.target.value))}
                    />  
                    <label htmlFor="one" className='round-background'>1</label>              

                    <input
                    className='number'
                    type='radio'
                    name='rate' 
                    value='2' 
                    id='two'
                    onClick={e => setRate(Number(e.target.value))}
                    />
                    <label htmlFor="two" className='round-background'>2</label>  

                    <input
                    className='number'
                    type='radio' 
                    name='rate' 
                    value='3' 
                    id='three'
                    onClick={e => setRate(Number(e.target.value))}
                    />
                    <label htmlFor="three" className='round-background'>3</label>  

                    <input 
                    className='number'
                    type='radio' 
                    name='rate' 
                    value='4' 
                    id='four'
                    onClick={e => setRate(Number(e.target.value))}
                    />
                    <label htmlFor="four" className='round-background'>4</label>  

                    <input 
                    className='number'
                    type='radio' 
                    name='rate' 
                    value='5' 
                    id='five'
                    onClick={e => setRate(Number(e.target.value))}
                    />
                    <label htmlFor="five" className='round-background'>5</label>  

            </div>

            <input type="submit" value='Submit'/>        
        </form>
    </div>
  )
}

export default Form