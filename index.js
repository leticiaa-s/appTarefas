let itemId = 0;

function salvar(tipo) {
  let campo = document.querySelector('#conteudo')
  let elementoLista = document.querySelector(`#${tipo}`)
  elementoLista.innerHTML += `<div class='card' id='item-${itemId}'>
    <span>${campo.value}</span>
    <button onclick='excluir("item-${itemId}")'>Excluir</button>
  </div>`
  campo.value = ''
  itemId++
}

function excluir(valor) {
  let elemento = document.querySelector(`#${valor}`)
  elemento.remove()
}