import Button from './Button'
import './index.css'
import exercicios from '@/exercicios'

function Exercicio3() {
	return (
		<>
			<h1 className='title'>{exercicios[2]}</h1>
			<div className='center__div'>
				<div className='exercise3__container'>
					<Button content='Button 1' />
					<Button content='Button 2' />
					<Button content='Button 3' />
				</div>
			</div>
		</>
	)
}

export default Exercicio3
