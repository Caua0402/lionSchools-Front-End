'use strict'

 import { getAluno } from "../js/apis.js"
 const alunoInfo = await getAluno(localStorage.getItem('matricula'))

const criarCardAluno = ( aluno ) => {
    const container = document.getElementById('aluno-info')

    const foto = document.createElement('img')
    foto.src = aluno.foto 

    const nome = document.createElement('p')
    nome.textContent = aluno.nome

    container.append(foto, nome)

    return container
}

const criarDisciplinas = ( disciplina ) => {
    const container = document.createElement('div')
    container.classList.add('container-barra')

    if (disciplina.status == 'Aprovado') {
        const materia = document.createElement('p')
        materia.textContent = disciplina.nome

        const containerAzul = document.createElement('div')
        containerAzul.classList.add('container-azul')

        const barraAzul = document.createElement('div')
        barraAzul.classList.add('barra-azul')

    }
    
}

const getSigla = function (palavraNaoAbreviada) {
    let palavra = palavraNaoAbreviada

    const ignorar = ['de', 'a', 'do', 'da', 'e', 'em', 'para', 'com', 'por', 'sem', 'sob']
    let palavraDividida = palavra.split(' ')
    let sigla = ''

    if (palavraDividida.length == 1) {
        
    }
    
}

console.log(getSigla('Programação web back end'))

criarCardAluno(alunoInfo)