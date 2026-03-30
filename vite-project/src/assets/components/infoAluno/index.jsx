import './style.css'

function InfoAluno() {
    const nome = "João Silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className='info-aluno'>
            <h2>Informações do aluno: </h2>
            <p>Nome: { nome }</p>
            <p>idade: { idade }</p>
            <p>curso: { curso }</p>
        </div>
    )
}

export default InfoAluno



