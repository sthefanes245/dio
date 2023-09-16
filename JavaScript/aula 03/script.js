let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array3']];
console.log(array2[1]); //acessar o indice de um array

//manipulando arrays
array.forEach(function (item, index) { console.log(item, index) });/*é uma função e recebe uma fnção como parametro a qual recebe uma instrução */
//faz uma repetição para cada item ou indice dentro de um array
array.push('novo item');/*add um novo item no final do array */
console.log(array);

array.pop(); /*remove um item do final do array*/
console.log(array);

array.shift(); /*remove um item do inicio do array*/
console.log(array);

array.unshift('novo item no inicio'); /*add um item no inicio do array*/
console.log(array);

console.log(array.indexOf(true));  /*retorna o indice de um valor dentro do array*/

array.splice(0, 3); /*remove ou substitui um item pelo indice */
console.log(array);

let novoArray = array.slice(0, 3);/*retorna uma parte de uma array existente */
console.log(novoArray);

//objetos
//manipulando 

let object = { string: 'string', number: 1, boolean: true, objectInterno: { objectInterno: 'objectInterno' } }
console.log(object.boolean); /*com esse . eu acesso alo especifico */

//desestruturação do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);