function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== "string") {
                reject("CAI NO ERRO");
                return;
            }
            resolve(msg.toUpperCase() + " - Passei na Promisse");
        }, tempo);
    });
}

// Promisse.all(): recebe um array de promisses, resolve todas, retorna um array com as promisses resolvidas.
// A ordem em que as promisses serão resolvidas não importa. O array com tudo resolvido é o que interessa.
// Caso alguma das promisses seja rejeitada, o erro será retornado.
const promisses = [
    // "Primeiro Valor",
    esperaAi("Promisse 1", rand(1, 3)),
    esperaAi("Promisse 2", rand(1, 3)),
    esperaAi("Promisse 3", rand(1, 3)),
    // esperaAi(1000, rand(1, 3)),
    // "Outro Valor"
];

// Promise.all(promisses)
// .then(dados=>{
//     console.log(dados);
// }).catch(e=>{
//     console.log(e);
// })

// Promisse.race(): vai receber um array de promisses e irá retorna a primeira que foi resolvida.
// Caso a promise que foi resolvida primeiro seja rejeitada, o erro será retornado. Porém, caso
// alguma outra promise seja resolvida primeiro que a promise com potencial rejeição, aquela será
// retornada.
// Promise.race(promisses)
// .then(promessa=>{
//     console.log(promessa);
// }).catch(e=>{
//     console.log(e);
// })

// Promise.resolve(): retorna uma promise resolvida.
// Promise.reject(): retona uma promise rejeitada.
// No exemplo abaixo, certamente uma promise será retornada pelo método baixaPagina(), porém,
// essa promise pode ser retornada já resolvida ou tomar o seu tempo necessário para se resolver.
function baixaPagina(){
    const emCache = true;
    
    if(emCache){
        // return Promise.resolve("Página em Cache.");
        return Promise.reject("Erro: Página em Cache");
    } else{
        return esperaAi("Baixei a Página", 3000);
    }
}
baixaPagina()
.then(resp=>{
    console.log(resp);
}).catch(e=>{
    console.log(e);
});