// promisse  then e catch
// uma forma de garantir a ordem que vai ser executado e separar os erros

function aleatorio(max,min) {
    min*=1000
    max*=1000
    return Math.floor(Math.random()* (max - min)+ min)
    
}
function execuçao(msg,tempo){
    return new Promise((resolver,reject)=>{
        if(typeof msg === 'number')reject('erro msg e um numero') // ele para o codigo e diz o erro
        setTimeout(() => {
            resolver(msg) // pra execultar os outros, esse valor vai para no then(msg)
        },tempo );

    })
    
}

execuçao('frase1',aleatorio(1,4)).then(respota=>{
    console.log(respota)
    return execuçao(4,aleatorio(1,4))
}).then(respota=>{
    console.log(respota)
    return execuçao('frase3',aleatorio(1,4))
}).then(resposta=>{
    console.log(resposta)
}).catch((msg)=>{
    console.log(msg)
})

