// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    const amigo = inputAmigo.value;
    if(amigo!==""){
        amigos.push(amigo);
        actualizarLista();
        inputAmigo.value="";
    }else{
        alert("Debes escribir el nombre de uno de tus amigos");
    }
}

function actualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    amigos.forEach(amigo=>{
        const elemento = document.createElement("li");
        elemento.innerText=amigo;
        lista.appendChild(elemento);
    });
}