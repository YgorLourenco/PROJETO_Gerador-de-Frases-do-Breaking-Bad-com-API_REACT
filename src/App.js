import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
// import { jsx, css } from '@emotion/react'
import Frase from './components/Frase'


const Concatenador = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Botao = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  // State de Frases
  const  [frase, guardarFrase] = useState({});

  const consultarAPI = async () => { // Vai começar a requisição
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes') // fetch e uma função de fazer requisição em URLs / await vai esperar a resposta da API
    const frase = await api.json() // .json vai estruturar a varivel em formato de objeto json
    guardarFrase(frase[0])
    // const frase = api.then(resposta => resposta.json()) // Then e uma propriedade que ira chamar os dados da API de volta
    // frase.then(resultado => console.log(resultado))
  }

  // Carrega uma frase sozinha ao abri a aplicação
  useEffect(() => {
    consultarAPI()
  }, []) // Vai carregar com algum parametro aberto, no caso vai ser só a função dentro do useEffect

  return (
    <Concatenador>
      <Frase 
        frase={frase}
      />

      <Botao
        onClick={consultarAPI}
      >
        Obter Frase
      </Botao>
    </Concatenador>
  );
}

export default App;
