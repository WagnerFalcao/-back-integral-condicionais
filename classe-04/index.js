const ladoA = 5;
const ladoB = 5;

let bucha = ladoB;

if (ladoA == ladoB) {
  console.log(bucha);
} else {
  console.log('NÃO');
}

switch (bucha) {
  case 0:
    console.log('Branco');
    break;
  case 1:
    console.log('Ás');
    break;
  case 2:
    console.log('Duque');
    break;
  case 3:
    console.log('Terno');
    break;
  case 4:
    console.log('Quadra');
    break;
  case 5:
    console.log('Quina');
    break;
  case 6:
    console.log('Sena');
    break;
}
