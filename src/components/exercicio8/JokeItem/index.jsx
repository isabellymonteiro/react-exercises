import './index.css'

const JokeItem = ({ setup, punchline }) => {
  return (
    <li className='exercise8__joke__container'>
      <h2 className='exercise8__joke__setup'>{setup}</h2>
      <p className='exercise8__joke__punchline'>{punchline}.</p>
    </li>
  )
}

export default JokeItem