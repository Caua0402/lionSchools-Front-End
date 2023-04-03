'use strict'

import { listarAlunos } from "../js/apis.js"
const alunosLista = await listarAlunos(localStorage.getItem('sigla'))

import { getAlunosStatus } from "../js/apis.js"

const criarCardAlunos = (aluno) => {
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

    if (aluno.status == 'Finalizado') {
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

    const status = document.getElementById('status')
    const finalizado = document.getElementById('finalizado')
    const cursando = document.getElementById('cursando')

    status.addEventListener('click', () => {
        container.replaceChildren(...alunos)
    })


    finalizado.addEventListener('click', async () => {
        const alunosFinalizado = await getAlunosStatus('Finalizado')
        const alunosF = []

        alunosFinalizado.alunos.forEach(aluno => {
            if (aluno.curso[0].nome.slice(6) == localStorage.getItem('curso').slice(6)) {
                alunosF.push(aluno)
            }
        })

        const alunosFinalizados = alunosF.map(criarCardAlunos)
        container.replaceChildren(...alunosFinalizados)

    })

    cursando.addEventListener('click', async () => {
        const alunosCursando = await getAlunosStatus('Cursando')
        const alunosC = []

        alunosCursando.alunos.forEach(aluno => {
            if (aluno.curso[0].nome.slice(6) == localStorage.getItem('curso').slice(6)) {
                alunosC.push(aluno)
            }
        })

        const alunosCurs = alunosC.map(criarCardAlunos)
        container.replaceChildren(...alunosCurs)

    })
}

console.log(localStorage.getItem('curso'));
carregarCardAlunos()


