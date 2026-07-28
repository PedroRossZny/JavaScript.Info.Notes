let map = new Map();

map.set("name", "John");

// let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more");

// Porque map e uma colecao de itens indexados, onde ele possui pares que compoem chave e valor, quando utilizamos o map.keys() ele retorna um iteravel para chaves, muito usado em loops, que passam por todos os itens de um array, utilizando assim, vamos obter apenas as chaves que estao dentro do map, mas o que aconteceu, foi que atribuimos o objeto iteravel como valor para keys, nos retornando um objeto, mas o metodo push atua apenas em arrays, nos podemos usar o map.keys() e converte-lo para um array logo em seguida, usando Array.from, assim podemos usar o metodo push na variavel, como mostrado a seguir:

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);
