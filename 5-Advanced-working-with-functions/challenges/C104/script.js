function printList(list) {
    while(true) {
        if (list.next == null) {
            alert(list.value);
            break;
        } else {
            alert(list.value);
        }
        list = list.next;
    }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);

function printListRecursion(list) {
    if (list.next == null) {
        alert(list.value);
    } else {
        alert(list.value);
        printListRecursion(list.next);
    }
}

printListRecursion(list);

// A solução com laço de repetição é melhor em termos de desempenho e memória, pois utiliza apenas um contexto de execução durante toda a iteração. Já a recursão cria um novo contexto de execução a cada chamada, aumentando o consumo de memória e podendo causar estouro da pilha em listas muito grandes. A vantagem da recursão é que o código costuma ficar mais simples e acompanhar melhor a estrutura da lista.
