let age= 31;
let years= 10;
console.log(age);
//console.log(years);
age= 36;
console.log(age);

const piNumber = 3.14;
console.log(piNumber);

let userName = 'Daria';
console.log('name: ');
console.log(userName);

//Operatori date numerice

//adunare
let firstNumber = 10;
firstNumber = 12;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);

//scadere
let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}`);

//inmultire
let numberA = 5; 
let numberB = 10;
let multiplyResult = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} da ${multiplyResult}`);

//Impartire
let numberC = 25;
let numberD = 10;
let divisionResult = numberC / numberD;
console.log(`${numberC} impartit la ${numberD} rezulta ${divisionResult}`);

//Restul impartirii
let numberE = 15; 
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(`Result impartirii lui ${numberE} la ${numberF} este ${moduloResult}`);


// cum aflam cel mai mare numar de tip NUMBER
console.log(Number.MAX_SAFE_INTEGER);

// cum aflam cel mai mic numar de tip NUMBER
console.log(Number.MIN_SAFE_INTEGER);

// numere de tip BigInt
let bigIntNumber = 12491241924819n;
console.log(`BigInt value is ${bigIntNumber}`);


// String operations
const myName = 'Daria Luca';

// afisarea unui caracter de la o pozitie 
// primul caracter
const firstCharInName = myName[0];
console.log(`Primul caracter din sirul '${myName}' este ${firstCharInName}`);

// lungimea sirului 
const myNameLenght = myName.length;
console.log(`Lungimea sirului '${myName}' este ${myNameLenght}`);

// ultimul caracter din string 
let lastCharIndex = myNameLenght - 1;
let lastChar = myName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);

// concatenare de stringuri
let firstName = 'Daria'.endsWith('d');
let lastName = 'Luca';
let separator = ' ';
let fullName = firstName + ' ' + lastName;
console.log(`Numele meu complet este ${fullName}`);

// verificare numar par/impar

let checkedNumber = 21;

let remainder = checkedNumber % 2;

let isEven = remainder === 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);

// Date booleene (true/false)

let isAdult = true;
console.log(`isAdult = ${true}`);
let isOld = false;
console.log(`isOld = ${false}`);

// data null sau undefine
let nullValue = null;
console.log(`nullValue = ${nullValue}`);

let  notInitialized;
console.log(`notInitialized = ${notInitialized}`);


// adaugare +1 la un numar
let x = 10;
console.log('x=', x);

x++;
console.log('x=', x);