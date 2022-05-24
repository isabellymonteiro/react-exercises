import Button from './Button'
import './index.css'
import exercicios from '@/exercicios'

function Exercicio3() {
	return (
		<>
			<h1 className='title'>{exercicios[2]}</h1>
			<div className='center__div'>
				<div className='exercise3__container'>
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</div>
			</div>
		</>
	)
}

export default Exercicio3
