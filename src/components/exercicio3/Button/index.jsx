import './index.css'

const Button = ({ children }) => {
  const handleOnClick = () => {
      alert(`You clicked on ${children}`)
  }

  return (
    <button className='exercise3__button' onClick={handleOnClick}>
      {children}
    </button>
  )
}

export default Button