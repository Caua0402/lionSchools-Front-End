'use strict'

export const listarCursos = async () => {
    const url = `https://lion-school-apis.cyclic.app//v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const listarAlunos = async (curso) => {
    const url = `https://lion-school-apis.cyclic.app//v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAluno = async (matricula) => {
    const url = `https://lion-school-apis.cyclic.app//v1/lion-school/alunos/${matricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data 
}

export const getAlunosStatus = async (status) => {
    const url = `https://lion-school-apis.cyclic.app//v1/lion-school/alunos?status=${status}`
    const response = await fetch(url)
    const data = response.json()

    return data
}