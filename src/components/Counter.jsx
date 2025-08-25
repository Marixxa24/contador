import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const [mensaje, setMensaje] = useState("")
  const [inputValue, setInputValue] = useState("")

  const incrementar = () => setCount(count + 1)
  const decrementar = () => setCount(count - 1)
  const reiniciar = () => setCount(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMensaje(`Has escrito: ${inputValue}`)
    setInputValue("")
  }

  return (
    <div 
      className="counter"
      onMouseEnter={() => setMensaje("El mouse esta dentro del contador 😁")}
      onMouseLeave={() => setMensaje("El mouse esta fuera del contador 😒")}
    >
      <h1>CONTADOR MERNSTAR </h1>
      <h2>Chaile Marisa Soledad</h2>
      
      <div className="contador-box">
        <div 
          className="numero"
          onDoubleClick={() => setCount(count * 2)}
        >
          {count}
        </div>

        <div className="botones">
          <button 
            onClick={decrementar} 
            onFocus={() => setMensaje("Estás en el botón -")}
            className="btn btn-red"
          >
            -
          </button>

          <button 
            onClick={incrementar} 
            onKeyDown={(e) => e.key === "Enter" && incrementar()}
            className="btn btn-green"
          >
            +
          </button>
        </div>

        <button 
          onClick={reiniciar} 
          onBlur={() => setMensaje("Saliste del botón Reiniciar")}
          className="btn btn-reset"
        >
          Reiniciar
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setMensaje("Estás escribiendo  ✍️")}
          onKeyUp={(e) => setMensaje(`Soltaste la tecla: ${e.key}`)}
        />
        <button className='btnenviar' type="submit">Enviar</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  )
}

export default Counter
