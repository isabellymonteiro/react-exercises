import JokeItem from './JokeItem'
import './index.css'
import exercicios from '@/exercicios'

function Exercicio8() {
  const data = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ]

  const jokeItems = data.map(({ id, setup, punchline}) => {
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
