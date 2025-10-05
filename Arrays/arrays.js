
//inicializando e ultilizando dados de uma array
var primeiraArray = ["Lucas", "Mariana", "Rafael", "Camila", "João"];
//acessando a posição do array 
console.log(primeiraArray[3])

//Acessando elementos do array  e imprimindo no console 
for(var i = 0; i < primeiraArray.length; i++){
    console.log(primeiraArray[0])
}


//soma dos 2 anteriores é o resultado do posterior
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let seq = [0, 1];

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

console.log(fibonacci(10)); 

//inserindo elementos na Array
var segundoArray = ["Lucas", "Mariana", "Rafael", "Camila", "João"];

//Adicionando um dado no array
segundoArray.push("teste")
segundoArray.push("teste")
segundoArray.push("teste")
segundoArray.push("teste")
segundoArray.push("teste")
segundoArray.push("Estrutura de dados array")

//adiciona um dado negativo na Array
segundoArray.unshift(-1)
segundoArray.unshift(-2)
segundoArray.unshift(-3)
segundoArray.unshift(-4)
segundoArray.unshift(-5)

console.log(segundoArray)

for(var i = 0; i <= segundoArray.length; i++){
    console.log("Percorrendo lista = " +segundoArray[i])
}

//removendo dados no array
var terceiraArray = [1,2,3,4,5,6,7,8,9,10]
console.log(terceiraArray)



//removendo passando um indice para o metodo
terceiraArray.splice(3,3)

//Inserindo na posição que eu desejar
terceiraArray.splice(3, 0 , 3)



//removendo no fim do array
terceiraArray.pop()
terceiraArray.pop()
terceiraArray.pop()

terceiraArray.shift()
terceiraArray.shift()
terceiraArray.shift()

//metodo de incersão, depois do ultimo elemento
terceiraArray.push(1)
terceiraArray.push(2)
terceiraArray.push(3)
terceiraArray.push(4)
terceiraArray.push(5)
terceiraArray.push(6)
terceiraArray.push(7)



terceiraArray.unshift(-1)

for(var i = 0; i <= terceiraArray.length; i++)[
    console.log(terceiraArray[i])
]


var fibonacci = []
fibonacci [0] = 1
fibonacci [1] = 2
fibonacci [2] = 3

for(var i = 3 ; i < 20; i++){
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log(fibonacci)