let amigos = [];


function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); 

    if (nome == "") {
        alert("Por favor, insira um nome!");
        return;
    }

    amigos.push(nome); 
    atualizarLista(); 
    nomeInput.value = ""; 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista está vazia! Adicione nomes primeiro.");
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").textContent = amigos[nomeSorteado];

        amigos.splice(nomeSorteado,1);
        atualizarLista();
}

