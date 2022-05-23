import List from "./List"
import './index.css'

function Exercicio6() {
	const data = [
		{
			icon: "🏀",
			name: "basketball"
		},
		{
			icon: "🏐",
			name: "volleyball"
		},
		{
			icon: "⚽",
			name: "football/soccer"
		},
		{
			icon: "⚾",
			name: "baseball"
		},
		{
			icon: "🥎",
			name: "softball"
		}
	]
	return (
		<>
			<h1 className='title'>Exercicio6</h1>
			<div className="exercise6__list__container">
				<List listData={data} />
			</div>
		</>
	)
}

export default Exercicio6
