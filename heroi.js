const readline = require('readline');
let nome;
let xp;
let nivel;


// Criar uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Loop principal
const perguntas = async () => {
    let continuar = true;

    while (continuar) {
        // Lendo o nome do herói
        nome = await new Promise(resolve => {
            rl.question("Digite o nome do herói: ", resolve);
        });

        // Lendo a quantidade de experiência (XP) do herói
        const xpInput = await new Promise(resolve => {
            rl.question("Digite a quantidade de experiência (XP) do herói: ", resolve);
        });

        xp = parseInt(xpInput);

        if (xp < 1000) {
          nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
          nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
          nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
          nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
          nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
          nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
          nivel = "Imortal";
        } else {
          nivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);

        // Perguntando se o usuário deseja continuar
        const resposta = await new Promise(resolve => {
            rl.question("Deseja continuar? (s/n): ", resolve);
        });

        continuar = resposta.toLowerCase() === 's';
    }

    rl.close(); // Fechar a interface de leitura quando terminar
};

// Iniciar o processo de perguntas
perguntas();
