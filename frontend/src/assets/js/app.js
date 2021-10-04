function editar(){
    document.getElementById("nombrePropuesta").value = "POLIZA";
}
function excluir(){
    document.getElementById("nombrePropuesta").value = "EXCLUIR";
}
function incorporar(){
    document.getElementById("nombrePropuesta").value = "INCORPORAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function modificar(){
    document.getElementById("nombrePropuesta").value = "MODIFICAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function anular(){
    document.getElementById("nombrePropuesta").value = "ANULAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function cancelar(){
    document.getElementById("nombrePropuesta").value = "CANCELAR";
    console.log( "incorporacion "+ document.getElementById("nombrePropuesta").value)
}
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

var observe;
if (window.attachEvent) {
  observe = function (element, event, handler) {
    element.attachEvent('on'+event, handler);
  };
}
else {
  observe = function (element, event, handler) {
    element.addEventListener(event, handler, false);
  };
}