# Strings

## Exercise 154

Existem tres tipos de citacoes para as strings, com aspas simples e aspas duplas, que nao possuem diferenca nenhuma no funcionamento das duas, podemos escrever uma linha de texto usando as duas, tambem temos com crases, que alem de fazer o mesmo que as aspas, dentro das crases podemos incorporar qualquer expressao na string, a envolvendo em `${...}`, e tambem podemos escrever uma string que ocupe varias linhas dentro das crases. Como mostrado no **ex154**.

---

## Exercise 155

Ainda e possivel criar uma string de varias linhas usando as aspas duplas ou simples, apenas usando o caractere especial `\n` que e usado para a quebra de linha. Existem outros caracteres especiais menos comuns: `\n` - nova linha, `\r` - em arquivos de texto Windows, uma combinacao de dois caracteres `\r\n` representa uma nova quebra de linha, enquanto em sistemas operacionais que nao sejam Windows, e apenas um caractere de nova linha `\n`. Isso se deve a razoes historicas; a maioria dos softwares do Windows tambem entende o caractere de nova linha `\n`. `\'`, `\"`, `\`` - citacoes. `\\` - barra invertida. `\t` - aba. `\b`, `\f`, `\v` - Backspace, Form Feed, Tab Vertical - mencionados para fins de completude, sao funcoes antigas e nao sao mais usadas hoje em dia. Como ja deve ter sido percebido, a barra invertida e o que usamos para poder usar nossos carcteres especiais, tambem chamada de *caractere de escape*. As aspas escapadas, como ja vimos, o `\'`, `\"` e `\``, que sao usados para inserir uma citacao na mesma sequencia de carcteres citada, em alguns momentos nao precisam ser usados, ja que podemos comecar uma string com crase ou aspas duplas e se quisermos colocar uma aspas simples no meio do texto e so colocarmos, apenas precisa ser algo diferente da aspa que iremos colocar como parte do texto. Como mostrado no **ex155**.

---

## Exercise 156

Em JavaScript temos uma propriedade `length` que retorna a quantidade de caracteres de uma string, possui a seguinte sintaxe: `str.length`. Vale lembrar que os carcteres especiais dentro de uma string valem como apenas um caractere. Como mostrado no **ex156**.

---

## Exercise 157

Para obter um caractere em uma posicao especifica usamos colchetes `[pos]` ou chamamos o metodo `str.at(pos)`, com o primeiro caractere comecando na posicao 0, a diference entre o colchetes e o metodo, e que o metodo aceita posicoes negativas, se o valor for negativo a contagem e feita a partir do final da string, os colchetes sempre retornam `undefined` para valores negativos. Tambem podemos iterar sobre caracteres usando `for..of`. Como mostrado no **ex157**.

---

## Exercise 158

No JavaScript nao e possivel alterar strings, sendo impossivel modificar um caractere, a solucao que temos pra isso e criando uma string nova. Como mostrado no **ex158**.

---

## Exercise 159

Os metodos `toLowerCase()` e `toUpperCase()` alteram o case, podendo colocar uma string um minusculo ou maiusculo, tambem podemos alterar a case de um unico caractere. Como mostrado no **ex159**.

---

## Exercise 160

Temos muitos jeitos de procurar uma substring dentro de uma string, o primeiro e pelo metodo `str.indexOf(substr, pos)`, que retorna a posicao inicial onde a substring se encontra, a posicao e um argumento opcional, mas ela controla onde comeca essa procura, o metodo retorna -1 se nao encotrar a substring. Se quisermos achar todas as ocorrencias em uma string podemos executar o `indexOf` em um loop, com cada chamada sendo feita com a posicao apos a partida anterior. Nao podemos esquecer do metodo `str.lastIndexOf(substr, position)`, que funciona de maneira contraria. Se quisermos verificar se uma substring esta presente ou nao em uma string, podemos usar o metodo `indexOf()` em uma verificacao `if`, porem nao podemos esquecer que se o metodo retornar `0` o `if` vai tratar esse retorno como `false`, entao temos sempre que veirificor se o metodo retornou um valor diferente de -1. Mas o que faz esse mesmo trabalho e outro metodo mais moderno chamado `str.includes(substr, pos)` que retorna `true/false` dependendo se a substring foi encontrada na string ou nao, e nele tamebm temos o segunda argumento opcional de posicao, que comeca a procura da posicao de partida. Outros metodos que temos, sao, `str.startWith` e `str.endsWith`, que retornam `true/false`, um se encontrou ao nao a substring no inicio e o outro se encontrou no final. Como mostrado no **ex160**.

---

## Exercise 161

Existem 3 metodos em JavaScript para obter uma substring: comecando por `str.slice(start [, end])`, que retorna a parte da string comecando do start e terminado no end, mas nao inclue o ultimo caractere, se nao tivermos um segundo argumento, o processo continua ate o final e valores negativos tambem sao possiveis, com a posicao sendo contada a partir do final da string. Depois temos `str.substring(start [, end])`, que faz a mesma coisa que o `slice` porem ele permite que start seja maior que o end, e quando isso acontece ele troca os valores, com o end primeiro e depois a start, e ele tambem trata todo numero negativo como 0. Por ultimo temos `str.substr(start [, length])` que retorna a parte da string comecando no start seguindo pela quantidade de caracteres que foram fornaceidos no segundo argumento, e nesse caso o primeiro argumento pode ser negativo comecando a partir do final, esse metodo e suportado apenas por mecanismos JavaScript hospedados em navegadores, com seu uso nao sendo recomendado, mas na pratica ele e suportado em todos os lugares. Recapitulando: metodo - `slice(start, end)`, seleciona..., de `start` para `end` (excluindo `end`), negativos - permite negativos. metodo - `substring(start, end)`, seleciona..., entre `start` e `end` (excluindo `end`), negativos - valores negativos significam `0`. metodo - `substr(start, length)`, seleciona..., de `start` obter `length` caracteres, negativos - permite negativo `start`. O metodo `slice` e o mais usado atualmente e o mais recomendado por sua flexibilidade. Como mostrado no **ex161**.

---

## Exercise 162

Em JavaScript quando fazemos uma comparacao entre strings vale lembrar que as letras minusculas sao sempre maior que as maiusculas, e uma curiosidade e que as letras com sinais diacriticos estao fora de ordem, podendo levar a resultados estranhos, principalmente se estivermos trabalhando com nomes de paises. Existem um metodo que permite obter o caractere pelo seu codigo, o `str.codePointAt(pos)`, e um outro metodo que temos e o `String.fromCodePoint(code)` que cria um caractere a partir do codigo, o uso esses metodos nos ajuda a perceber como os caracteres sao comparados, que e pelo codigo de cada um, e um codigo maior, significa um caractere maior. Para fazer uma comparacao mais correta de acordo com a lingua na qual se encontra as strings, temos a chamada `str.localeCompare(str2)` que retorna -1 se `str` for menor que `str2`, 0 se `str` for igual a `str2` e 1 se o `str` for maior que `str2`, e toda essa comparacao e adaptada para a lingua certa. Como mostrado no **ex162**.

## Additional

Existem varios outros metodos uteis em strings, como: `str.trim()` - remove espacos do inicio e do fim da string. `str.repeat(n)` - repete a sequencia `n` vezes. Entre muitos outros.
