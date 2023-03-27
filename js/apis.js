'use strict'

export const listarCursos = async () => {
    const url = `https://lion-school-apis.cyclic.app//v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data
}