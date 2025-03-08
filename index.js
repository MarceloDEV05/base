//aprendendo readLine do node e testando interatividade pelo terminal
import readLine from "node:readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o seu nome?: ", (n) => {
  console.log(`Olá ${n}`);

  rl.question("Digite um número: ", (number) => {
    rl.question("digite outro numero: ", (otherNumber) => {
      const sum = parseInt(number) + parseInt(otherNumber);
      console.log(`a soma é ${sum}`);
      rl.close();
    });
  });
});


