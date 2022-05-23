import './index.css'

function Exercicio2() {
	const alertMessage = (message) => {
		alert(message)
	}

  return (
    <>
      <h1 className="title">Exercicio2</h1>
      <button className="exercise2__button" onClick={() => alertMessage('Clicked!')}>
        Click Me
      </button>
    </>
  );
}

export default Exercicio2;
