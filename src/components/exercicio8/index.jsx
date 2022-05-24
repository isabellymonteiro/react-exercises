import JokeItem from './JokeItem'
import './index.css'
import exercicios from '@/exercicios'
import jokeData from './jokeData.json'

function Exercicio8() {
  const jokeItems = jokeData.map(({ id, setup, punchline}) => {
    return <JokeItem key={id} setup={setup} punchline={punchline} />
  })

	return (
    <>
      <h1 className='title'>{exercicios[7]}</h1>
      <div className='center__div'>
        <ul className='exercise8__jokeList'>
          {jokeItems}
        </ul>
      </div>
    </>
  )
}

export default Exercicio8
