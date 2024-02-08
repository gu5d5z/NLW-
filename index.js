const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
         "Uma linguagem de programação de alto nível",
        "Uma linguagem de marcação",
        "Um sistema operacional",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade principal do JavaScript em        desenvolvimento web?",
      respostas: [
        "Estilização de páginas",
        "Armazenamento de dados no servidor",
         "Adição de interatividade às páginas",
      ],
      correta: 2
    },
    {
      pergunta: "Como declaramos uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "v x",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma tag HTML",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre `let`, `const` e `var` na declaração de variáveis?",
      respostas: [
        " Nenhuma, são sinônimos",
        "`let` é para variáveis de escopo local, `const` é para constantes, e `var` é obsoleto",
        " `let` é para variáveis globais, `const` é para variáveis locais, e `var` é para constantes",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        " Um modelo de objeto para representar a estrutura de uma página web",
        "Uma biblioteca de funções JavaScript",
        "Um protocolo de comunicação",
      ],
      correta: 0
    },
    {
      pergunta: "Como podemos adicionar um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "addEvent(element, event, function);",
        "attachEvent(element, event, function);",
        "element.addEventListener(event, function);",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca de animações",
        " Um método de estilização de páginas web",
        "Uma técnica para realizar requisições assíncronas ao servidor",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
         "Um formato de intercâmbio de dados",
        "Uma função para criar objetos",
        "Uma biblioteca de gráficos",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre `==` e `===` em JavaScript?",
      respostas: [
        "Nenhuma, são sinônimos",
        "`==` compara valores, `===` compara valores e tipos de dados",
        "==` é usado para atribuição, `===` para comparação de igualdade",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }
  
  