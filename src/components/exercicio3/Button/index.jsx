import './index.css'

const Button = ({ content }) => {
  const handleOnClick = () => {
      alert(`You clicked on ${content}`)
  }

  return (
    <button className='exercise3__button' onClick={handleOnClick}>
      {content}
    </button>
  )
}

export default Button