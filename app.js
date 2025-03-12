let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const amigo = nomeInput.value.trim();

    if (amigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (amigos.includes(amigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }    

    amigos.push(amigo);
    nomeInput.value = ""; // Limpa o campo de entrada

    atualizarLista(); // Atualiza a lista exibida
}

function atualizarLista() {
    const list = document.getElementById("listaAmigos");
    list.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        list.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista(); // Atualiza a lista após a remoção
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `Amigo secreto: ${sorteado}`;
}

let ultimoSorteado = "";

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let sorteado;
    do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteado === ultimoSorteado && amigos.length > 1);

    ultimoSorteado = sorteado;
    document.getElementById("resultado").textContent = `Amigo secreto: ${sorteado}`;
}




