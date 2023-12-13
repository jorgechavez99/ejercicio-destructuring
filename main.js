//Ejercicios destructuring

/* 1.Dado el siguiente objeto:
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
Extrae la empleada Ana completa
{"name":"Ana", "email":"Ana@gmail.com"}
Extrae el email del empleado Luis --> Luis@gmail.com*/

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];


let [{email},ana,]=empleados


console.log('ejercicio 1',ana);
console.log('ejercicio 1',email)

/* 2.Usa destructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5;*/

// Inicialmente
let a = 5;
let b = 3;

[a,b]=[b,a]
console.log('ejercicio 2',a);
console.log('ejercicio 2',b)

/* 3.Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);*/

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const {today:maximaHoy} = HIGH_TEMPERATURES;

const {tomorrow:maximaManana} =HIGH_TEMPERATURES;

console.log('ejercicio 3',maximaHoy);
console.log('ejercicio 3',maximaManana)


