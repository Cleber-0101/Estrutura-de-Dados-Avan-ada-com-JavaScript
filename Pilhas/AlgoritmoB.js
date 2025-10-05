
//transformando numeros decimais em binarios
function dec2bin(decNumber){
    var reststack = [],
    rest,
    binarioString = ' '

    while(decNumber > 0){
        //100 / 2 = 50,00
        rest = Math.floor(decNumber % 2)

        //vai empilhando na lista o resto da divisão dos numeros DIVIDIDOS 
        reststack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(reststack.length > 0){
        binarioString += reststack.pop().toString()
    }

    return binarioString
}

//metodo floor arredonda para baixo, ou seja: 
// 10,50 , para dar 11 preciso de mais 00,50

//o floor ele pega esse numero e joga o valor para baixo ou seja retorna 10 e não 11

console.log(dec2bin(100))