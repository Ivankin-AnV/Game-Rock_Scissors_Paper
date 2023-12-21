import readlineSync from 'readline-sync';

function getComputerChoice() {
  const options = ['камень', 'ножницы', 'бумага'];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === 'bomb') {
    return 'Вы уничтожили своего оппонента! Поздравляю, но это уже читерство!';
  }
  if (playerChoice === computerChoice) {
    return 'Результат: Ничья!';
  } if (playerChoice === 'камень' && computerChoice === 'ножницы') {
    return `Результат: Вы победили! ${playerChoice} бьет ${computerChoice}.`;
  }
  if (playerChoice === 'ножницы' && computerChoice === 'бумага') {
    return `Результат: Вы победили! ${playerChoice} режут ${computerChoice}.`;
  }
  if (playerChoice === 'бумага' && computerChoice === 'камень') {
    return `Результат: Вы победили! ${playerChoice} покрывает ${computerChoice}.`;
  }
  return 'Результат: Компьютер выиграл!';
}

function game() {
  let playerChoice = readlineSync.question('\nВыберите вашу фигуру: \n1. Камень \n2. Ножницы \n3. Бумага \n\nВаш выбор: ');

  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === 'камень' || playerChoice === 'ножницы' || playerChoice === 'бумага' || playerChoice === 'bomb') {
    const computerChoice = getComputerChoice();
    console.log(`Вы выбрали: ${playerChoice}`);
    console.log(`\nКомпьютер выбрал: ${computerChoice}`);
    console.log(determineWinner(playerChoice, computerChoice));
    playerChoice = readlineSync.question('\nХотите сыграть еще раз? (да/нет)').toLowerCase();
    if (playerChoice === 'да') {
      game();
    } else {
      console.log('\nСпасибо за игру! До встречи!');
    }
  } else {
    console.log('Неверный выбор. Попробуйте еще раз.');
    game();
  }
  if (playerChoice === 'bomb') {
    console.log('Результат: Вы уничтожили своего оппонента! Поздравляю!');
  }
}

console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
game();
