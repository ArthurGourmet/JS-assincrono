// promise.all : resolve todas as promessas em um array e executa todas, mas caso haja um erro ele considera tudo errado
//promise.race: corrida, excuta a mais rapida literalmente mostrara a que executar primeiro
// pormise.resolver: se o resolver tiver salvo ja excuta economizando tempo
// pormise.reject: se o reject tiver salvo ja excuta economizando tempo

function aleatorio(max,min) {
    min*=1000
    max*=1000
    return Math.floor(Math.random()* (max - min)+ min)
    
}
function execuçao(msg,tempo){
    return new Promise((resolver,reject)=>{
        if(typeof msg !== 'string')reject('erro msg e um numero') 
        setTimeout(() => {
            resolver(msg) 
        },tempo );

    })
    
}

const promessas = [
  
    execuçao('inico1',aleatorio(1,4)),
    execuçao('inico2',aleatorio(1,4)),
    execuçao('inico3',aleatorio(1,4)),

]

// Promise.all(promessas).then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res)

// })

// Promise.race(promessas).then((e)=>{
//     console.log(e)

// }).catch((e)=>{
//     console.log(e)

// })

