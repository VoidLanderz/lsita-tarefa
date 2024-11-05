let count = 0;
function adicionar() {
    //Recuperabdo o valor do elemento de id Tarefa
    let tarefa = document.getElementById("tarefas").value;

    // Verificar se existe uma tarefa digitada
        if(tarefa) {
        // contador do id de tarefa 
        count++;

        // recuperando lista do elemento UL de class tarefas 
        let lista = document.getElementsByClassName("tarefas")[0];

        // cruando os elementos li e button
        let li = document.createElement("li");
        let btn = document.createElement("button");

        //atribuindo valores para o elemento li 
        li.id = count;
        li.className = "tarefa-item";
        li.textContent = tarefa;

        // atribuindo valores para elemento button
        btn.className = "btn";
        btn.textContent = "Remover";
        btn.onclick = () => {
            lista.removeChild(li);
            atualizarMensagem(lista);
        }

        //Adicionando button criado no li
        li.appendChild(btn);

        //Adicionandoi o li criado na lista 
        lista.appendChild(li);

        atualizarMensagem(lista);
    } else {
        alert("Escreva uma tarefa uma tarefa!")
    }
// limpa campo de entrada
        document.getElementById("tarefas").value = "";
}

function atualizarMensagem(lista) {
    if(lista.children.length === 0) {
        if (spanRemovido) {
            document.querySelector(".tarefas").insertBefore(spanRemovido,document.querySelector(".tarefas").firstChild);
            spanRemovido  (null);
        }
    } else {
    let mensagemNaoExiste = document.getElementById("nao-existe");
        if(mensagemNaoExiste) {
            spanRemovido = mensagemNaoExiste;
            mensagemNaoExiste.remove();
        }
    }
}