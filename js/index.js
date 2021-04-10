let number = document.querySelector("input#num")
let list = document.querySelector("select#flist")
let verificar = document.querySelector("input#n-ver")
let result = document.querySelector("div#n-res")

let numeros = []

//verificar se o número é válido
function verNum(n) {
    if (Number(n)>=1 && Number(n) <=100) {
        return true
    
    } else {
        return false    
    }
}

//verificar se número está na lista 
function verList(n, l){
    let numero = l.indexOf(Number(n))
    if(numero == -1) {
        return false
    } else {
        return true
    }
}
//Adiciona items a lista 
function add() {

    //faz as verificações acima antes de adicionar o elemento a lista
    if (verNum(number.value) && !verList(number.value, numeros)) {
        numeros.push(Number(number.value))

        //adiciona o elemento a lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)

    } else {
        window.alert('Número inválido ou já adicionado na lista')
    }

    //limpa o campo #num ao adicionar o valor a lista
    num.value = ''
    num.focus()
}

//função responsável por realizar as análises
function ver() {
    if (numeros.length == 0) {
        window.alert('Por favor adicione um número')
    }

    else{
        
        let total = numeros.length
        let ordenarNum = numeros.sort(function(a, b){return a-b})//ordernar array de números do maior para o menor
        let nOrdenarNum = ordenarNum.slice()
        let maiorNum = nOrdenarNum.pop()

        //somando os valores do array
        let soma = 0
        for(i in numeros){
            soma += numeros[i]
        }

        let media = soma/total


        result.innerHTML = ''
        result.innerHTML += `<p> Foi adicionado ${total} valores a lista.`
        result.innerHTML += `<p> Esses são os número ordenados do menor para o maior: ${ordenarNum}.`
        result.innerHTML += `<p> O menor número adicionado é o ${ordenarNum[0]}.`
        result.innerHTML += `<p> O maior número adicionado é o ${maiorNum}.`
        result.innerHTML += `<p> A soma dos valores é  ${soma}.`
        result.innerHTML += `<p> A media dos valores é  ${media}.`

        
    }

}

//Limpar a lista
function limpar() { 
    var limpar = list.options.length
    for(i = limpar - 1; i>=0; i--){
        list.options[i] = null
    }
}

//Limpar resultado
function limparRes() {
    result.innerHTML = ''
}