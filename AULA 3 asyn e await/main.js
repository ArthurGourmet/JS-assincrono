//async e await para executar a promise de forma mais limpa

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


async function executar(){ 
    try{
        const fase = await execuçao('fase 1',aleatorio(1,4)) 
    console.log(fase)
    const fase2 = await execuçao(2 ,aleatorio(1,4))
    console.log(fase2)
    const fase3 = await execuçao('fase 3',aleatorio(1,4))
    console.log(fase3)

    }catch(e){
        console.log(e)
    }
    
}
executar()