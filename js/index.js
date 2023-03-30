'use strict'


import { listarCursos } from "./apis.js"
const cursosLista = await listarCursos()


const criarCardCursos = ( curso ) => {
    const container = document.createElement('a')
    container.classList.add('container-curso')
    //container.href = '../turmas/index.html'

    const info = document.createElement('div')
    info.classList.add('container-info-curso')

    const icone = document.createElement('img')
    icone.src = curso.icone

    const sigla = document.createElement('h1')
    sigla.classList.add('title-curso')
    sigla.textContent = curso.sigla

    container.append(info)
    info.append(icone, sigla)

    container.addEventListener('click', ()=> {
        localStorage.setItem('curso', sigla.textContent);
        if(curso){
            getAlunos(curso)
        }
    })
    
    return container
}

const getAlunos = (curso) => {
    console.log(curso.sigla)

    
}

const carregarCardCursos = async () => {
    const container_cursos = document.getElementById('container-cursos-gerais')
    const cursos = await cursosLista.map(criarCardCursos)

    container_cursos.replaceChildren(...cursos)
}

carregarCardCursos()