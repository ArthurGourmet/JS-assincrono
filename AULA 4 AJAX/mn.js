//requisiçao assincrono
//XMLHttpRequest  ELA FAZ REQUISIÇAO 

const request = obj=>{
 const xhr = new XMLHttpRequest()
 xhr.open(obj.method, obj.url, true);
 xhr.send()


 xhr.addEventListener('load',()=>{
    if(xhr.status >=200 && xhr.status <300){
        obj.success(xhr.responseText)
    }else{
        obj.erro(xhr.statusText)
    }
 })
}


// Claro! Vou explicar cada parte desse código JavaScript:

// Declaração da Função request:
// A função request é definida com um único parâmetro chamado obj.
// Essa função é projetada para fazer uma requisição HTTP assíncrona (AJAX) usando o objeto XMLHttpRequest.
// Criação do Objeto xhr:
// Dentro da função, criamos um novo objeto XMLHttpRequest chamado xhr.
// O XMLHttpRequest é usado para fazer solicitações HTTP a um servidor.
// Configuração da Requisição:
// xhr.open(obj.method, obj.url, true);
// O método open configura os detalhes da requisição.
// obj.method especifica o método HTTP (como GET, POST, etc.).
// obj.url é a URL para a qual a requisição será enviada.
// O terceiro argumento true indica que a requisição é assíncrona (não bloqueante).
// xhr.send();
// O método send envia a requisição para o servidor.
// Evento de Carregamento:
// xhr.addEventListener('load', () => {...});
// Registra um ouvinte para o evento de carregamento.
// Quando a resposta da requisição é carregada, o código dentro da função de callback é executado.
// Verificação do Status da Resposta:
// if (xhr.status >= 200 && xhr.status < 300) {...}
// Verifica se o status da resposta está na faixa de sucesso (códigos 2xx).
// Se for verdadeiro, chama a função obj.success com o conteúdo da resposta (xhr.responseText).
// Caso contrário:
// Chama a função obj.erro com o texto do status da resposta (xhr.statusText).
// Em resumo, essa função request é usada para fazer uma requisição HTTP e manipular a resposta com base no status retornado pelo servidor. Ela permite que você execute ações específicas quando a requisição é bem-sucedida ou quando ocorre um erro. 😊