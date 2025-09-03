function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// UTILIZANDO CALLBACKS PARA QUE A EXECUÇÃO SEJA NA ORDEM DETERMINADA
// function esperaAi(msg, tempo, cb){
//     setTimeout(()=>{
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// esperaAi("Frase 1", rand(1, 3), function(){
//     esperaAi("Frase 2", rand(1, 3), function(){
//         esperaAi("Frase 3", rand(1, 3));
//     });
// });

// UTILIZANDO PROMISSES
function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== "string") reject(new Error());

        setTimeout(()=>{
            resolve(msg);
        }, tempo);
    });
}

esperaAi("Conexão com o BD", rand(1, 3))
.then((resposta)=>{
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
}).then((resposta)=>{
    console.log(resposta);
    return esperaAi("Tratando dados da Base", rand(1, 3));
}).then((resposta)=>{
    console.log(resposta);
}).then(()=>{
    console.log("Exibe dados na tela");
}).catch((error)=>{
    console.log(error);
});

console.log("Isto será exibido antes de qualquer Promise.");
