## Desafio de projeto da DIO [Classificador de Nível de Herói](https://web.dio.me/lab/classificador-de-nivel-de-heroi/learning/45058400-f8ff-4c7f-b4d2-fe56d05aad7e)

---

# Hero Level

Este projeto é uma aplicação simples em Node.js que permite ao usuário inserir o nome e a quantidade de experiência (XP) de um herói e determina o nível desse herói com base na quantidade de XP. O programa utiliza a interface de linha de comando para interagir com o usuário.

## Funcionalidade

O programa realiza as seguintes ações:
1. Solicita ao usuário que insira o nome do herói.
2. Solicita ao usuário que insira a quantidade de experiência (XP) do herói.
3. Determina o nível do herói com base na XP informada:
   - **Ferro**: XP < 1.000
   - **Bronze**: 1.001 ≤ XP ≤ 2.000
   - **Prata**: 2.001 ≤ XP ≤ 5.000
   - **Ouro**: 5.001 ≤ XP ≤ 7.000
   - **Platina**: 7.001 ≤ XP ≤ 8.000
   - **Ascendente**: 8.001 ≤ XP ≤ 9.000
   - **Imortal**: 9.001 ≤ XP ≤ 10.000
   - **Radiante**: XP > 10.000
4. Exibe o nível do herói.
5. Pergunta ao usuário se deseja continuar e repetir o processo.

## Pré-requisitos

- **Node.js**: Você precisa ter o Node.js instalado em sua máquina para executar este código.

## Como Executar

1. **Clone o repositório** ou **baixe o arquivo** `heroi.js`.

2. **Abra o terminal** no diretório onde o arquivo está localizado.

3. Execute o seguinte comando para iniciar a aplicação:

   
   ```
   node heroi.js
   ```
