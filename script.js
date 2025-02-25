// Função para verificar se um número é primo
function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Função principal para aplicar as regras matemáticas
function aplicarRegras(numeroInicial) {
    let numeroAtual = numeroInicial; // Inicializa o numeroAtual com o valor inicial
    const numerosGerados = [numeroInicial];
    const operacoes = [];
    let contador = 0;
    const limiteIteracoes = 1000; // Limite de 1000 iterações para evitar loop infinito

    while (contador < limiteIteracoes) {
        let novaOperacao = false;

        // Verifica se chegou no zero
        if (numeroAtual === 0) {
            operacoes.push(`${numeroAtual} chegou a zero. Processo encerrado.`);
            break;
        }

        // Regra: Se for divisível por 5, subtrai 5
        if (numeroAtual % 5 === 0 && numeroAtual !== 0) {
            const novoNumero = numeroAtual - 5;
            operacoes.push(`${numeroAtual} é divisível por 5 → ${numeroAtual} - 5 = ${novoNumero}`);
            numeroAtual = novoNumero;
            numerosGerados.push(numeroAtual);
            novaOperacao = true;
        }
        // Regra: Se for par, divide por 2
        else if (numeroAtual % 2 === 0) {
            const novoNumero = numeroAtual / 2;
            operacoes.push(`${numeroAtual} é par → ${numeroAtual} / 2 = ${novoNumero}`);
            numeroAtual = novoNumero;
            numerosGerados.push(numeroAtual);
            novaOperacao = true;
        }
        // Regra: Se for primo, adiciona 7
        else if (ehPrimo(numeroAtual)) {
            const novoNumero = numeroAtual + 7;
            operacoes.push(`${numeroAtual} é primo → ${numeroAtual} + 7 = ${novoNumero}`);
            numeroAtual = novoNumero;
            numerosGerados.push(numeroAtual);
            novaOperacao = true;
        }
        // Regra: Se for ímpar, multiplica por 3 e soma 1
        else if (numeroAtual % 2 !== 0) {
            const novoNumero = numeroAtual * 3 + 1;
            operacoes.push(`${numeroAtual} é ímpar → ${numeroAtual} * 3 + 1 = ${novoNumero}`);
            numeroAtual = novoNumero;
            numerosGerados.push(numeroAtual);
            novaOperacao = true;
        }

        // Se nenhuma regra foi aplicada, o processo termina
        if (!novaOperacao) break;

        contador++;
    }

    if (contador === limiteIteracoes) {
        alert("O processo foi interrompido para evitar um loop infinito.");
    }

    // Exibe as operações e números gerados na tela
    const operacoesContainer = document.getElementById("operacoes");
    operacoesContainer.innerHTML = "";
    operacoes.forEach(op => {
        const p = document.createElement("p");
        p.textContent = op;
        operacoesContainer.appendChild(p);
    });

    const numerosGeradosContainer = document.getElementById("numerosGerados");
    numerosGeradosContainer.textContent = `[${numerosGerados.join(', ')}]`;
}

// Função para iniciar o processo ao clicar no botão
window.iniciarProcesso = function() {
    const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    if (isNaN(numeroInicial)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    aplicarRegras(numeroInicial);
};
