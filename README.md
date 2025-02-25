
# Regras Matemáticas

Este projeto é uma aplicação web que aplica um conjunto de regras matemáticas em um número inicial inserido pelo usuário. As regras são aplicadas de forma sequencial até que nenhuma outra regra possa ser aplicada ou até que o número chegue a zero.

## Funcionalidades

- O usuário insere um número inicial.
- O programa aplica as seguintes regras matemáticas:
  1. Se o número for divisível por 5, subtrai 5.
  2. Se o número for par, divide por 2.
  3. Se o número for primo, adiciona 7.
  4. Se o número for ímpar, multiplica por 3 e soma 1.
- O processo continua até que nenhuma nova regra possa ser aplicada ou o número chegue a zero.
- Os números gerados no processo e a sequência de operações aplicadas são exibidos na tela.

## Exemplo de Execução

```
Digite um número inicial: 15

Saída esperada:
Número inicial: 15
15 é divisível por 5 → 15 - 5 = 10
10 é par → 10 / 2 = 5
5 é divisível por 5 → 5 - 5 = 0
Processo finalizado.
Números gerados: [15, 10, 5, 0]
```

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Usar

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Insira um número no campo de entrada e clique em "Iniciar".
4. Veja a sequência de operações e os números gerados na tela.

## Estrutura do Projeto

```
.
├── index.html    # Interface do usuário
├── style.css     # Estilos para a página
└── script.js     # Lógica das regras matemáticas
```

## Observações

- O programa possui um limite de 1000 iterações para evitar loops infinitos.
- O processo é interrompido automaticamente caso chegue ao número zero.

## Autor

Desenvolvido por Johnatan Santos.
