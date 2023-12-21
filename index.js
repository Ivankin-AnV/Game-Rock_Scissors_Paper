import readlineSync from 'readline-sync';

function getComputerChoice() {
  const options = ['камень', 'ножницы', 'бумага'];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'Вы уничтожили своего оппонента! Поздравляю, но это уже читерство!';
  }
  if (userChoice === computerChoice) {
    return 'Результат: Ничья!';
  } if (userChoice === 'камень' && computerChoice === 'ножницы') {
    return `Результат: Вы победили! ${userChoice} бьет ${computerChoice}.`;
  }
  if (userChoice === 'ножницы' && computerChoice === 'бумага') {
    return `Результат: Вы победили! ${userChoice} режут ${computerChoice}.`;
  }
  if (userChoice === 'бумага' && computerChoice === 'камень') {
    return `Результат: Вы победили! ${userChoice} покрывает ${computerChoice}.`;
  }
  return 'Результат: Компьютер выиграл!';
}

function game() {
  let userChoice = readlineSync.question('\nВыберите вашу фигуру: \n1. Камень \n2. Ножницы \n3. Бумага \n\nВаш выбор: ');

  userChoice = userChoice.toLowerCase();
  if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага' || userChoice === 'bomb') {
    const computerChoice = getComputerChoice();
    console.log(`Вы выбрали: ${userChoice}`);
    console.log(`\nКомпьютер выбрал: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    userChoice = readlineSync.question('\nХотите сыграть еще раз? (да/нет)').toLowerCase();
    if (userChoice === 'да') {
      game();
    } else {
      console.log('\nСпасибо за игру! До встречи!');
    }
  } else {
    console.log('Неверный выбор. Попробуйте еще раз.');
    game();
  }
  if (userChoice === 'bomb') {
    console.log('Результат: Вы уничтожили своего оппонента! Поздравляю!');
  }
}

console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
game();
