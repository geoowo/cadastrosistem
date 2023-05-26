// This is a JavaScript file
var nome
var selecao
var selecaodisciplina
var selecaomencao

function cadastrar(){
    nome = document.getElementById('inputnome').value
    document.getElementById('nome').textContent = nome

    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    selecao = document.getElementById('mencao')
    selecaomencao = selecao.options[selecao.selectedIndex].value

    localStorage.setItem(selecaodisciplina, selecaomencao)

}

function listar(){
    var exibirmencao
    selecao = document.getElementById('disciplina')
    selecaodisciplina = selecao.options[selecao.selectedIndex].value

    exibirmencao = localStorage.getItem(selecaodisciplina)

    document.getElementById('exibirdisciplina').textContent = selecaodisciplina
    document.getElementById('exibirmencao').textContent = exibirmencao
}