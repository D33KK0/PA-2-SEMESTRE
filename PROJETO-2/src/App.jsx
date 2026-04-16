import { useState } from 'react'
// BASE

function App() {
  // Estados para armazenar os dados digitados e o status do login
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [logado, setLogado] = useState(false)
  const [erro, setErro] = useState('')

  // Função que roda ao enviar o formulário
  const fazerLogin = (e) => {
    e.preventDefault() // Evitar que a página recarregue.

    // Simulação de verificação no banco de dados
    if (usuario === 'admin' && senha === '123456') {
      setLogado(true)
      setErro('')
    } else {
      setErro('Usuário ou senha incorretos!')
    }
  }

  // Função para sair da conta.
  const fazerLogout = () => {
    setLogado(false)
    setUsuario('')
    setSenha('')
  }

  // Se o usuário estiver logado, mostrar o painel.
  if (logado) {
    return (
      <div className='conteiner'>
        <h2>Bem vindo, {usuario}!
        </h2>
        <p>Voce acessou o sistema com sucesso.</p>
        <button onClick={fazerLogout} className='btn-sair'>Sair. </button>
      </div>
    )
  }

  // Se nao estiver logado, mostrar a tela de login 
  return (
    <div className='conteiner'>
      <h2> Acesso ao Sistema</h2>
      <form onSubmit={fazerLogin} className='form-login'>
        <div className='input-group'>
          <label htmlFor='usuario'>Usuário</label>
          <input
          id="usuario"
          type='text'
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Digite: admin" required/>
        </div>

        <div className='input-group'>
          <label htmlFor="senha">Senha</label>
          <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite: 123456" required /> 
        </div>
        {/*Mostrar mensagem de erro caso exista*/}
        {erro && <p className="message-error">{erro}</p>}
        <button type="submit" className="btn-entrar">Entrar</button>
      </form>
    </div>
  )
}

export default App
