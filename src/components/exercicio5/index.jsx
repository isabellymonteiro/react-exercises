import "./index.css"
import exercicios from '@/exercicios'

function Exercicio5() {
  const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"]

  const dataItems = data.map((item, index) => {
    return <li key={index}>{item}</li>
  });

  return (
    <>
      <h1 className="title">{exercicios[4]}</h1>
			<div className="exercise5__list__container">
      	<ul className="exercise5__list">{dataItems}</ul>
			</div>
    </>
  )
}

export default Exercicio5
