import { useState } from 'react'
import '../styles/Footer.css'

function handleSubmit (e) {
  e.preventDefault()
  alert(e.target['email_input'].value)
}

function Footer () {
  const [inputValue, setInputValue] = useState('')

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div
        onClick={() => handleSubmit(inputValue, setInputValue)}
        className='lmj-footer-elem'
      >
        Laissez-nous votre mail :
        <form>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type='email'
            name='email_input'
			placeholder="Write your email adress"
          />
          <button type='submit'>Enter</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
