import './index.css'
import exercicios from '@/exercicios'

function Exercicio1() {
	return (
		<>
			<h1 className='title'>{exercicios[0]}</h1>
			<div className="exercise1__square">
				<p className="exercise1__paragraph">Hello, World!</p>
			</div>
		</>
	)
}

export default Exercicio1
