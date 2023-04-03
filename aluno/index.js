'use strict'

import { getAluno } from "../js/apis.js"
const alunoInfo = await getAluno(localStorage.getItem('matricula'))


const criarCardAluno = (aluno) => {
    const container = document.getElementById('aluno-info')

    const foto = document.createElement('img')
    foto.src = aluno.foto

    const nome = document.createElement('p')
    nome.textContent = aluno.nome.toUpperCase()

    container.append(foto, nome)

    return container
}

const criarDisciplinas = (disciplina) => {
    const container = document.createElement('div')
    container.classList.add('container-barra')

    if (disciplina.status == 'Aprovado') {
        const materia = document.createElement('p')
        materia.textContent = getSigla(disciplina.nome)

        const containerBarra = document.createElement('div')
        containerBarra.classList.add('container-azul')

        const barra = document.createElement('div')
        barra.classList.add('barra-azul')
        barra.style.height = disciplina.media + '%'

        const nota = document.createElement('p')
        nota.classList.add('notas-azul')
        nota.textContent = disciplina.media

        container.title = disciplina.nome

        containerBarra.append(barra, nota)
        container.append(materia, containerBarra)

    } else if (disciplina.status == 'Exame') {
        const materia = document.createElement('p')
        materia.textContent = getSigla(disciplina.nome)       

        const containerBarra = document.createElement('div')
        containerBarra.classList.add('container-amarelo')

        const barra = document.createElement('div')
        barra.classList.add('barra-amarelo')
        barra.style.height = disciplina.media + '%'

        const nota = document.createElement('p')
        nota.classList.add('notas-amarelo')
        nota.textContent = disciplina.media

        container.title = disciplina.nome

        containerBarra.append(barra, nota)
        container.append(materia, containerBarra)

    } else if (disciplina.status == 'Reprovado') {
        const materia = document.createElement('p')
        materia.textContent = getSigla(disciplina.nome)

        const containerBarra = document.createElement('div')
        containerBarra.classList.add('container-vermelho')

        const barra = document.createElement('div')
        barra.classList.add('barra-vermelho')
        barra.style.height = disciplina.media + '%'

        const nota = document.createElement('p')
        nota.classList.add('notas-vermelho')
        nota.textContent = disciplina.media

        container.title = disciplina.nome

        containerBarra.append(barra, nota)
        container.append(materia, containerBarra)
    }

    return container

}

const carregarDisciplina = async () => {
    const containerP = document.getElementById('container-progresso')
    const notas = await alunoInfo.curso[0].disciplinas.map(criarDisciplinas)

    containerP.replaceChildren(...notas)
}

const getSigla = function (palavraNaoAbreviada) {
    let palavra = palavraNaoAbreviada

    const ignorar = ['de', 'a', 'do', 'da', 'e', 'em', 'para', 'com', 'por', 'sem', 'sob', 'II', 'III', 'I']
    let palavraDividida = palavra.split(' ')
    let sigla = ''


    if (palavraDividida.length == 1) {
        sigla = palavraDividida[0].slice(0, 2)
    } 
    else {
        palavraDividida.forEach(palavras => {
          if(!ignorar.includes(palavras)){
              sigla += palavras.charAt(0)
          }  
        })
    }

    return sigla.slice(-2).toUpperCase()
}

criarCardAluno(alunoInfo)
carregarDisciplina()