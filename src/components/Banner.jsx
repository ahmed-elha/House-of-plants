import '../styles/Banner.css'
import logo from '../assets/logo.png'

function handleClick (e) {

}


function Banner () {
  const text = 'LA MAISON DE LA JUNGLE'
  return (
    <div className='lmj-banner'>
    
      <img src={logo} alt='La maison de la jungle' className='lmj-logo' />
      <h1>{text}</h1>
    </div>
  )
}

export default Banner
