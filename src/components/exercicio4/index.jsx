import { useState } from 'react'
import './index.css'
import exercicios from '@/exercicios'

function Exercicio4() {
	const [count, setCount] = useState(0)

	const incrementCount = () => {
		setCount(prevState => prevState + 1)
	}

	return (
		<>
			<h1 className='title'>{exercicios[3]}</h1>
			<p className='exercise4__paragraph'>{`Button has been clicked: ${count} times`}</p>
			<button className="exercise4__button" onClick={incrementCount}>
        Click Me
      </button>
		</>
	)
}

export default Exercicio4
