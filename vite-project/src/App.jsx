import './App.css'
import InfoAluno from './assets/components/infoAluno'
import InfoCurso from './assets/components/infoCurso'
import Mensagem from './assets/components/Mensagem'
function App() {

  return (
    <>
      <h1>Bem-Vindo ao meu projeto</h1>
      
      <Mensagem/>
      <InfoAluno/>
      <hr /> 
      <InfoCurso/> 
    </>
  )
}

export default App
