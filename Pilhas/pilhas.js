

//Pilhas
//Last in, first out


//CLASSE DE PILHA
function Stack(){
    var items = []
    
    //metodos...
    this.push = function(dado){
        //adiciona um novo item a Pilha
        items.push(dado)
    }

    this.pop = function(){
        //remove o item do topo da Pilha
        return items.pop()
    }

    this.peek = function(){
        //devolve o elemento que esta no topo da pilha
        //Devolve a ultima posição do array
        return items[items.length - 1]
    }

    this.isEmpty = function(){
        //informa se a pilha esta vazia 
        //devolve um true ou false 
        return items.length === 0
    }

    this.clear = function(){
        //Limpa a Pilha 
        items = []
    }

    this.size = function(){
        //informa o tamanho da pilha
        return items.length
    }

    this.mostraNoTerminal = function(){
        //imprime a pilha do console 
        console.log(items.toString())
    }
}


//criando uma instancia da Classe STACK
var pilha = new Stack()

//adiciona dados na pilha
pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(5)
pilha.push(6)

//ultimo elemento da pilha
console.log(pilha.peek())