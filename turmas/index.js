'use strict'

import { listarAlunos } from "../js/apis.js"
const alunosLista = await listarAlunos(localStorage.getItem('curso'))
console.log(alunosLista)

const criarCardAlunos = ( aluno ) => {
    // const text = document.createElement('div')
    // text.classList.add('text-card')

    // const title = document.createElement('h2')
    // title.textContent = curso[0].nome

    alunosLista.alunos.forEach(aluno => {
        const container = document.createElement('div')
        container.classList.add('container')
    
        const card = document.createElement('div')
        card.classList.add('card')
    
        const picture = document.createElement('img')
        picture.src = aluno.foto
    
        const name = document.createElement('p')
        name.classList.add('card__description')
        name.textContent = aluno.nome    
    
        card.append(picture, name)
        container.append(card)
       // console.log(container);
        return card
    });

   
    
    

}
criarCardAlunos()
// const carregarCardAlunos = () => {
//     const container = document.getElementById('container')


//     let listadeAlunos = [];

   
    
//     container.replaceChildren(...listadeAlunos)

// }

// carregarCardAlunos()


const criandoCard = () => {

}


console.log(localStorage.getItem('curso'))
