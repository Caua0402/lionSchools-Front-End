'use strict'

import { listarAlunos } from "../js/apis.js"
const alunosLista = await listarAlunos(localStorage.getItem('sigla'))


const criarCardAlunos = ( aluno ) => {
        const title = document.getElementById('title-card')
        title.textContent = localStorage.getItem('curso').slice(6)

        const container = document.createElement('div')
        container.classList.add('container')
    
        const card = document.createElement('a')
        card.classList.add('card')
        card.href = '../aluno'
    
        const picture = document.createElement('img')
        picture.src = aluno.foto
    
        const name = document.createElement('p')
        name.classList.add('card__description')
        name.textContent = aluno.nome.toUpperCase()
        
        if(aluno.status == 'Finalizado'){
            card.classList.add('finalizado')
        }

        card.addEventListener('click', () => {
            localStorage.setItem('matricula', aluno.matricula)
        })
        
        
        card.append(picture, name)
        container.append(card)
        return card

}

const carregarCardAlunos = async () => {
    const container = document.getElementById('container')
    const alunos = alunosLista.alunos.map(criarCardAlunos)

    container.replaceChildren(...alunos)
}


carregarCardAlunos()


