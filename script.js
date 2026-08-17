const COLORES_JUGADORES = [
  "#e45756",
  "#3b82f6",
  "#2f9e68",
  "#8b5cf6",
  "#f59e0b",
  "#ec4899"
];


const TIPOS = {

  identifica: {
    nombre: "Identifica",
    icono: "🔎",
    puntos: 1
  },

  suma: {
    nombre: "Suma",
    icono: "+",
    puntos: 1
  },

  resta: {
    nombre: "Resta",
    icono: "−",
    puntos: 1
  },

  multiplicacion: {
    nombre: "Multiplicación",
    icono: "×",
    puntos: 1
  },

  division: {
    nombre: "División",
    icono: "÷",
    puntos: 2
  },

  sustituye: {
    nombre: "Sustituye y compara",
    icono: "≷",
    puntos: 2
  },

  desafio: {
    nombre: "Desafío",
    icono: "★",
    puntos: 3
  },

  comodin: {
    nombre: "Comodín",
    icono: "🃏",
    puntos: 0
  }

};


const P = (
  id,
  categoria,
  dificultad,
  enunciado,
  opciones,
  respuesta,
  explicacion,
  puntos
) => ({

  id,
  categoria,
  dificultad,
  enunciado,
  opciones,
  respuesta,
  explicacion,
  puntos

});


/* =====================================================
   BANCO DE 60 PREGUNTAS
===================================================== */

const PREGUNTAS = [

  P(
    1,
    "identifica",
    "fácil",
    "En 7x + 4, ¿cuál es el coeficiente de x?",
    ["4", "7", "x", "11"],
    "7",
    "El coeficiente es el número que multiplica a la variable x: 7.",
    1
  ),

  P(
    2,
    "identifica",
    "fácil",
    "En −3a² + 5a − 9, ¿cuál es el término independiente?",
    ["−3", "5", "a", "−9"],
    "−9",
    "El término independiente no contiene variables. Aquí es −9.",
    1
  ),

  P(
    3,
    "identifica",
    "fácil",
    "¿Cuáles son términos semejantes?",
    [
      "3x y 3y",
      "4a² y −7a²",
      "2x y 2x²",
      "5ab y 5a"
    ],
    "4a² y −7a²",
    "Son semejantes porque tienen la misma parte literal: a².",
    1
  ),

  P(
    4,
    "identifica",
    "media",
    "En 6m²n − 4mn + 8, ¿cuál es la parte literal del primer término?",
    ["6", "m²n", "6m²n", "n"],
    "m²n",
    "La parte literal está formada por las variables y sus exponentes: m²n.",
    1
  ),

  P(
    5,
    "identifica",
    "media",
    "¿Cuántos términos tiene 3x² − 2x + 7?",
    ["1", "2", "3", "4"],
    "3",
    "Los términos se separan por los signos + o −: 3x², −2x y 7.",
    1
  ),

  P(
    6,
    "identifica",
    "difícil",
    "En 5x²y − 3xy² + 9, ¿qué afirmación es correcta?",
    [
      "5 es variable",
      "x²y es coeficiente",
      "9 es término independiente",
      "3xy² es término independiente"
    ],
    "9 es término independiente",
    "El 9 no contiene variables, por eso es el término independiente.",
    1
  ),

  P(
    7,
    "identifica",
    "fácil",
    "¿Cuál expresión contiene exactamente dos términos?",
    [
      "x + 4",
      "x² + x + 1",
      "7x",
      "a − b + c"
    ],
    "x + 4",
    "Una expresión con dos términos es un binomio; x + 4 tiene dos términos.",
    1
  ),

  P(
    8,
    "identifica",
    "media",
    "En −8p³q, ¿cuál es el coeficiente?",
    ["p³q", "−8", "3", "q"],
    "−8",
    "El coeficiente numérico es −8.",
    1
  ),


  /* SUMA */

  P(
    9,
    "suma",
    "fácil",
    "Simplifica: 3x + 5x.",
    ["8", "8x", "15x", "2x"],
    "8x",
    "Se suman los coeficientes de términos semejantes: 3 + 5 = 8; resultado 8x.",
    1
  ),

  P(
    10,
    "suma",
    "fácil",
    "Simplifica: 7a² + 2a² − 4a².",
    ["5a²", "9a²", "3a²", "−9a²"],
    "5a²",
    "7 + 2 − 4 = 5. Por tanto, queda 5a².",
    1
  ),

  P(
    11,
    "suma",
    "media",
    "Calcula: (2x + 3) + (5x − 7).",
    ["7x − 4", "7x + 10", "3x − 4", "7x + 4"],
    "7x − 4",
    "Agrupamos semejantes: 2x + 5x = 7x y 3 − 7 = −4.",
    1
  ),

  P(
    12,
    "suma",
    "media",
    "Calcula: (3a² + 2a − 1) + (a² − 5a + 6).",
    [
      "4a² − 3a + 5",
      "2a² − 3a + 5",
      "4a² + 7a + 5",
      "4a² − 3a − 7"
    ],
    "4a² − 3a + 5",
    "3a²+a²=4a²; 2a−5a=−3a; −1+6=5.",
    1
  ),

  P(
    13,
    "suma",
    "difícil",
    "Simplifica: (4x³ − 2x² + x) + (x³ + 5x² − 3x + 2).",
    [
      "5x³ + 3x² − 2x + 2",
      "3x³ + 3x² − 2x + 2",
      "5x³ − 7x² + 4x + 2",
      "5x³ + 7x² − 2x − 2"
    ],
    "5x³ + 3x² − 2x + 2",
    "4+1=5; −2+5=3; 1−3=−2; el término independiente es 2.",
    1
  ),

  P(
    14,
    "suma",
    "media",
    "Calcula: (6m − 4n + 2) + (−m + 7n − 5).",
    [
      "5m + 3n − 3",
      "7m + 3n + 7",
      "5m − 11n − 3",
      "5m + 11n + 7"
    ],
    "5m + 3n − 3",
    "6m−m=5m; −4n+7n=3n; 2−5=−3.",
    1
  ),

  P(
    15,
    "suma",
    "difícil",
    "Suma: (x² + 3xy + 2y²) + (4x² − xy − y²).",
    [
      "5x² + 2xy + y²",
      "3x² + 4xy + y²",
      "5x² + 4xy + 3y²",
      "x² + 2xy + y²"
    ],
    "5x² + 2xy + y²",
    "x²: 1+4=5; xy: 3−1=2; y²: 2−1=1.",
    1
  ),


  /* RESTA */

  P(
    16,
    "resta",
    "fácil",
    "Simplifica: 9x − 4x.",
    ["13x", "5x", "−5x", "5"],
    "5x",
    "9−4=5, por lo tanto 9x−4x=5x.",
    1
  ),

  P(
    17,
    "resta",
    "fácil",
    "Calcula: 6a² − 9a².",
    ["3a²", "−3a²", "15a²", "−15a²"],
    "−3a²",
    "6−9=−3; se conserva la parte literal a².",
    1
  ),

  P(
    18,
    "resta",
    "media",
    "Calcula: (7x + 4) − (3x − 2).",
    ["4x + 2", "4x + 6", "10x + 2", "10x + 6"],
    "4x + 6",
    "Al restar el segundo polinomio cambian sus signos: 7x+4−3x+2=4x+6.",
    1
  ),

  P(
    19,
    "resta",
    "media",
    "Calcula: (5a² − 2a + 8) − (2a² + 3a − 1).",
    [
      "3a² − 5a + 9",
      "3a² + a + 7",
      "7a² − 5a + 7",
      "3a² − 5a + 7"
    ],
    "3a² − 5a + 9",
    "Distribuimos el signo menos: 5a²−2a+8−2a²−3a+1=3a²−5a+9.",
    1
  ),

  P(
    20,
    "resta",
    "difícil",
    "Calcula: (4x³ + x² − 6x + 3) − (x³ − 2x² + x − 5).",
    [
      "3x³ + 3x² − 7x + 8",
      "5x³ − x² − 5x − 2",
      "3x³ − x² − 5x + 8",
      "3x³ + 3x² − 5x + 8"
    ],
    "3x³ + 3x² − 7x + 8",
    "4−1=3; 1−(−2)=3; −6−1=−7; 3−(−5)=8.",
    1
  ),

  P(
    21,
    "resta",
    "media",
    "Resta: (8m² − 3mn + n²) − (2m² + mn − 4n²).",
    [
      "6m² − 4mn + 5n²",
      "10m² − 2mn − 3n²",
      "6m² − 2mn − 3n²",
      "6m² + 4mn + 5n²"
    ],
    "6m² − 4mn + 5n²",
    "8−2=6; −3−1=−4; 1−(−4)=5.",
    1
  ),


  /* MULTIPLICACIÓN */

  P(
    22,
    "multiplicacion",
    "fácil",
    "Multiplica: 3x · 4x².",
    ["7x³", "12x³", "12x²", "x³"],
    "12x³",
    "3·4=12 y x¹·x²=x³.",
    1
  ),

  P(
    23,
    "multiplicacion",
    "fácil",
    "Multiplica: −2a² · 5a³.",
    ["−10a⁵", "10a⁵", "−7a⁶", "−10a⁶"],
    "−10a⁵",
    "−2·5=−10 y a²·a³=a⁵.",
    1
  ),

  P(
    24,
    "multiplicacion",
    "media",
    "Calcula: 2x(3x + 4).",
    ["6x² + 8x", "6x + 8", "6x² + 4", "5x² + 8x"],
    "6x² + 8x",
    "Aplicamos distributiva: 2x·3x=6x² y 2x·4=8x.",
    1
  ),

  P(
    25,
    "multiplicacion",
    "media",
    "Calcula: (x + 3)(x + 2).",
    ["x² + 5x + 6", "x² + 6x + 5", "x² + x + 6", "x² + 5"],
    "x² + 5x + 6",
    "x·x=x²; 2x+3x=5x; 3·2=6.",
    1
  ),

  P(
    26,
    "multiplicacion",
    "difícil",
    "Calcula: (2x − 1)(x + 4).",
    [
      "2x² + 7x − 4",
      "2x² + 8x − 1",
      "2x² − 7x − 4",
      "x² + 7x − 4"
    ],
    "2x² + 7x − 4",
    "2x·x=2x²; 8x−x=7x; −1·4=−4.",
    1
  ),

  P(
    27,
    "multiplicacion",
    "difícil",
    "Calcula: (x + 2)(x² − x + 3).",
    [
      "x³ + x² + x + 6",
      "x³ + x² + 3x + 6",
      "x³ + x + 6",
      "x³ − x² + x + 6"
    ],
    "x³ + x² + x + 6",
    "x³−x²+3x+2x²−2x+6=x³+x²+x+6.",
    1
  ),

  P(
    28,
    "multiplicacion",
    "media",
    "Calcula: −3m(2m² − m + 5).",
    [
      "−6m³ + 3m² − 15m",
      "−6m³ − 3m² + 15m",
      "6m³ − 3m² + 15m",
      "−6m² + 3m − 15"
    ],
    "−6m³ + 3m² − 15m",
    "Distribuimos −3m: −6m³ + 3m² − 15m.",
    1
  ),


  /* DIVISIÓN */

  P(
    29,
    "division",
    "fácil",
    "Divide: 12x³ ÷ 3x.",
    ["4x²", "4x³", "9x²", "4x"],
    "4x²",
    "12÷3=4 y x³÷x=x².",
    2
  ),

  P(
    30,
    "division",
    "fácil",
    "Divide: −20a⁴ ÷ 5a².",
    ["−4a²", "4a²", "−15a²", "−4a⁶"],
    "−4a²",
    "−20÷5=−4 y a⁴÷a²=a².",
    2
  ),

  P(
    31,
    "division",
    "media",
    "Divide: (6x² + 9x) ÷ 3x.",
    ["2x + 3", "2x² + 3", "3x + 2", "2x + 9"],
    "2x + 3",
    "6x²/3x=2x y 9x/3x=3.",
    2
  ),

  P(
    32,
    "division",
    "media",
    "Divide: (12a³ − 8a² + 4a) ÷ 4a.",
    [
      "3a² − 2a + 1",
      "3a³ − 2a² + 1",
      "3a² − 2a + 4",
      "8a² − 4a + 1"
    ],
    "3a² − 2a + 1",
    "12a³/4a=3a²; −8a²/4a=−2a; 4a/4a=1.",
    2
  ),

  P(
    33,
    "division",
    "difícil",
    "Divide: (x² + 5x + 6) ÷ (x + 2).",
    ["x + 2", "x + 3", "x + 4", "x² + 3"],
    "x + 3",
    "x²+5x+6=(x+2)(x+3), por lo que el cociente es x+3.",
    2
  ),

  P(
    34,
    "division",
    "difícil",
    "Divide: (2x² + 7x + 3) ÷ (x + 3).",
    ["2x + 1", "2x + 3", "x + 1", "2x − 1"],
    "2x + 1",
    "(x+3)(2x+1)=2x²+7x+3; por tanto el cociente es 2x+1.",
    2
  ),

  P(
    35,
    "division",
    "difícil",
    "Divide: (x³ − 1) ÷ (x − 1).",
    ["x² − x + 1", "x² + x + 1", "x² + 1", "x − 1"],
    "x² + x + 1",
    "x³−1=(x−1)(x²+x+1), así que el cociente es x²+x+1.",
    2
  ),


  /* SUSTITUCIÓN Y COMPARACIÓN */

  P(
    36,
    "sustituye",
    "fácil",
    "Si x=3, calcula 2x + 5.",
    ["8", "10", "11", "13"],
    "11",
    "2(3)+5=6+5=11.",
    2
  ),

  P(
    37,
    "sustituye",
    "fácil",
    "Si y=−2, calcula y² + 3.",
    ["−1", "1", "7", "−7"],
    "7",
    "(−2)²+3=4+3=7.",
    2
  ),

  P(
    38,
    "sustituye",
    "media",
    "Si x=2 y y=3, calcula x² + y².",
    ["10", "12", "13", "25"],
    "13",
    "2²+3²=4+9=13.",
    2
  ),

  P(
    39,
    "sustituye",
    "media",
    "Si m=−1 y n=4, calcula 3m − 2n.",
    ["−5", "−11", "5", "11"],
    "−11",
    "3(−1)−2(4)=−3−8=−11.",
    2
  ),

  P(
    40,
    "sustituye",
    "media",
    "Si x=4, calcula x² − 3x + 2.",
    ["4", "6", "8", "10"],
    "6",
    "4²−3(4)+2=16−12+2=6.",
    2
  ),

  P(
    41,
    "sustituye",
    "difícil",
    "Si p=2 y q=−3, calcula 2p² − pq + q².",
    ["11", "17", "23", "29"],
    "23",
    "2(4)−(2·−3)+9=8+6+9=23.",
    2
  ),

  P(
    42,
    "sustituye",
    "difícil",
    "Si x=−2, y=3, calcula x²y − 2xy.",
    ["24", "18", "30", "12"],
    "24",
    "(−2)²(3)−2(−2)(3)=12+12=24.",
    2
  ),

  P(
    43,
    "sustituye",
    "media",
    "Si x=2, compara A=3x+1 y B=x²+2.",
    ["A>B", "A<B", "A=B", "No se puede comparar"],
    "A>B",
    "A=3(2)+1=7 y B=2²+2=6; por tanto A>B.",
    2
  ),

  P(
    44,
    "sustituye",
    "media",
    "Si m=3, compara A=m²−1 y B=2m+2.",
    ["A>B", "A<B", "A=B", "B=0"],
    "A=B",
    "A=3²−1=8 y B=2(3)+2=8; por tanto A=B.",
    2
  ),

  P(
    45,
    "sustituye",
    "difícil",
    "Si x=−1, compara A=x³+x y B=2x²−4.",
    ["A>B", "A<B", "A=B", "A=0"],
    "A=B",
    "A=(−1)³+(−1)=−2 y B=2(1)−4=−2; por tanto A=B.",
    2
  ),


  /* DESAFÍOS */

  P(
    46,
    "desafio",
    "fácil",
    "Clasifica: 7x² − 3x + 1.",
    ["Monomio", "Binomio", "Trinomio", "Cuatrinomio"],
    "Trinomio",
    "Tiene tres términos: 7x², −3x y 1.",
    3
  ),

  P(
    47,
    "desafio",
    "fácil",
    "¿Cuál es el grado absoluto del monomio 5x³y²?",
    ["2", "3", "5", "6"],
    "5",
    "El grado absoluto de un monomio es la suma de sus exponentes: 3+2=5.",
    3
  ),

  P(
    48,
    "desafio",
    "media",
    "¿Cuál es el grado absoluto de 4x³ + 2x²y − 7y⁴?",
    ["3", "4", "5", "7"],
    "4",
    "Los grados de los términos son 3, 3 y 4. El mayor es 4.",
    3
  ),

  P(
    49,
    "desafio",
    "media",
    "Resuelve: 3x + 2(4x − 1), simplifica.",
    ["11x − 2", "11x + 2", "7x − 2", "8x − 1"],
    "11x − 2",
    "2(4x−1)=8x−2; luego 3x+8x−2=11x−2.",
    3
  ),

  P(
    50,
    "desafio",
    "media",
    "Resuelve: (12x² ÷ 3x) + 2x.",
    ["4x", "6x", "8x", "10x"],
    "6x",
    "12x²÷3x=4x; 4x+2x=6x.",
    3
  ),

  P(
    51,
    "desafio",
    "difícil",
    "Si x=2, resuelve 3x² − 2(x + 1) + 4 ÷ 2.",
    ["8", "10", "12", "14"],
    "8",
    "3(2²)−2(2+1)+4÷2=12−6+2=8.",
    3
  ),

  P(
    52,
    "desafio",
    "difícil",
    "Simplifica: 2(x+3) − (x−4) + 3x.",
    ["4x + 10", "4x + 2", "6x + 10", "2x + 10"],
    "4x + 10",
    "2x+6−x+4+3x=4x+10.",
    3
  ),

  P(
    53,
    "desafio",
    "difícil",
    "Calcula: (x+2)(x−2) + 4 cuando x=5.",
    ["21", "25", "29", "33"],
    "25",
    "(5+2)(5−2)+4=7·3+4=25.",
    3
  ),

  P(
    54,
    "desafio",
    "difícil",
    "Resuelve: [(2x²+6x) ÷ 2x] − x cuando x=3.",
    ["0", "2", "3", "6"],
    "3",
    "(2x²+6x)÷2x=x+3. Con x=3 queda 6−3=3.",
    3
  ),

  P(
    55,
    "desafio",
    "media",
    "Clasifica la expresión 4a³ como monomio y determina su grado absoluto.",
    [
      "Binomio, grado 3",
      "Monomio, grado 3",
      "Monomio, grado 4",
      "Trinomio, grado 3"
    ],
    "Monomio, grado 3",
    "Tiene un solo término, por eso es monomio; su único exponente es 3.",
    3
  ),

  P(
    56,
    "desafio",
    "difícil",
    "Simplifica: (3x²−x+2) + (2x²+4x−5) − (x²−x+1).",
    [
      "4x² + 4x − 4",
      "4x² + 2x − 4",
      "6x² + 4x − 2",
      "5x² + 4x − 4"
    ],
    "4x² + 4x − 4",
    "Primero sumamos: 5x²+3x−3. Luego restamos x²−x+1: 4x²+4x−4.",
    3
  ),


  /* PREGUNTAS EXTRA PARA COMPLETAR LAS CATEGORÍAS */

  P(
    57,
    "suma",
    "fácil",
    "¿Cuál es el resultado de 5z + 0z?",
    ["0", "5", "5z", "z"],
    "5z",
    "El término 0z no aporta valor: 5z+0z=5z.",
    1
  ),

  P(
    58,
    "resta",
    "fácil",
    "Simplifica: 4p − (−3p).",
    ["p", "−7p", "7p", "−p"],
    "7p",
    "Restar un número negativo equivale a sumar: 4p+3p=7p.",
    1
  ),

  P(
    59,
    "multiplicacion",
    "media",
    "Calcula: (x+1)(x+5).",
    ["x²+5x+5", "x²+6x+5", "x²+4x+5", "x²+6"],
    "x²+6x+5",
    "x·x=x²; 5x+x=6x; 1·5=5.",
    1
  ),

  P(
    60,
    "division",
    "media",
    "Divide: (15n²−10n) ÷ 5n.",
    ["3n−2", "3n−5", "5n−2", "3n²−2n"],
    "3n−2",
    "15n²/5n=3n y −10n/5n=−2.",
    2
  )

];


/* =====================================================
   TABLERO
===================================================== */

const casillas = [

  "start",
  "identifica",
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "sustituye",
  "desafio",

  "comodin",
  "identifica",
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "sustituye",
  "desafio",

  "identifica",
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "comodin",
  "sustituye",
  "desafio",

  "identifica",
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "sustituye",
  "comodin",
  "desafio",

  "identifica",
  "suma",
  "resta",
  "multiplicacion",
  "division",
  "sustituye",
  "desafio",
  "finish"

];


/* =====================================================
   ESTADO DEL JUEGO
===================================================== */

const estado = {

  jugadores: [],

  turno: 0,

  numJugadores: 5,

  dado: 0,

  movimientoPendiente: 0,

  retoActual: null,

  retoRespondido: false,

  juegoTerminado: false,

  preguntasUsadas: new Set()

};


const $ = (id) =>
  document.getElementById(id);


const pantallas = [

  "pantalla-inicio",
  "pantalla-config",
  "pantalla-juego",
  "pantalla-reto",
  "pantalla-final"

];


/* =====================================================
   CAMBIO DE PANTALLAS
===================================================== */

function mostrarPantalla(id) {

  pantallas.forEach(
    p => $(p).classList.remove("activa")
  );

  $(id).classList.add("activa");

}


/* =====================================================
   CONFIGURACIÓN DE JUGADORES
===================================================== */

function crearCamposNombres() {

  const contenedor =
    $("nombres-jugadores");

  contenedor.innerHTML = "";


  for (
    let i = 0;
    i < estado.numJugadores;
    i++
  ) {

    const div =
      document.createElement("div");

    div.className =
      "name-field";


    div.innerHTML = `

      <span
        class="color-chip"
        style="background:${COLORES_JUGADORES[i]}"
      ></span>

      <input
        id="nombre-${i}"
        maxlength="18"
        placeholder="Jugador ${i + 1}"
        value="Jugador ${i + 1}"
      >

    `;


    contenedor.appendChild(div);

  }

}


function seleccionarNumeroJugadores(btn) {

  estado.numJugadores =
    Number(btn.dataset.count);


  document
    .querySelectorAll(".count-btn")
    .forEach(
      b => b.classList.remove("selected")
    );


  btn.classList.add("selected");

  crearCamposNombres();

}


function iniciarConfiguracion() {

  crearCamposNombres();

  mostrarPantalla(
    "pantalla-config"
  );

}


/* =====================================================
   INICIAR PARTIDA
===================================================== */

function iniciarPartida() {

  const nombres = [];


  for (
    let i = 0;
    i < estado.numJugadores;
    i++
  ) {

    const valor =
      $(`nombre-${i}`)
        .value
        .trim();


    if (!valor) {

      $("config-error").textContent =
        "Escribe un nombre para cada jugador.";

      return;

    }


    nombres.push(valor);

  }


  $("config-error").textContent =
    "";


  estado.jugadores =
    nombres.map(
      (nombre, i) => ({

        nombre,

        color:
          COLORES_JUGADORES[i],

        posicion: 0,

        puntos: 0

      })
    );


  estado.turno = 0;

  estado.dado = 0;

  estado.movimientoPendiente = 0;

  estado.retoActual = null;

  estado.retoRespondido = false;

  estado.juegoTerminado = false;

  estado.preguntasUsadas =
    new Set();


  mostrarPantalla(
    "pantalla-juego"
  );


  renderizarTablero();

  renderizarMarcador();

  actualizarTurno();


  $("btn-dado").disabled =
    false;

}


/* =====================================================
   CREAR TABLERO
===================================================== */

function construirTablero() {

  const tablero =
    $("tablero");


  tablero.innerHTML =
    "";


  for (
    let i = 0;
    i < casillas.length;
    i++
  ) {

    const tipo =
      casillas[i];


    const celda =
      document.createElement("div");


    celda.className =
      `cell ${tipo}`;


    /*
      Las filas alternan la dirección:
      izquierda → derecha
      derecha → izquierda
    */

    const fila =
      Math.floor(i / 8);

    const columna =
      i % 8;


    celda.style.gridColumn =
      String(
        fila % 2 === 0
          ? columna + 1
          : 8 - columna
      );


    const numero =
      i === 0
        ? "SALIDA"
        : i === casillas.length - 1
          ? "META"
          : i;


    const etiqueta =
      tipo === "start"
        ? "SALIDA"
        : tipo === "finish"
          ? "META"
          : TIPOS[tipo].nombre;


    const icono =
      tipo === "start"
        ? "🚩"
        : tipo === "finish"
          ? "🏁"
          : TIPOS[tipo].icono;


    celda.innerHTML = `

      <span class="cell-number">
        ${numero}
      </span>

      <span class="cell-icon">
        ${icono}
      </span>

      <span class="cell-label">
        ${etiqueta}
      </span>

      <div
        class="token-stack"
        id="tokens-${i}"
      ></div>

    `;


    tablero.appendChild(celda);

  }

}


/* =====================================================
   FICHAS
===================================================== */

function renderizarTablero() {

  construirTablero();


  estado.jugadores.forEach(j => {

    const cont =
      $(`tokens-${j.posicion}`);


    if (cont) {

      const token =
        document.createElement("span");


      token.className =
        "token";


      token.title =
        j.nombre;


      token.style.background =
        j.color;


      cont.appendChild(token);

    }

  });

}


/* =====================================================
   MARCADOR
===================================================== */

function renderizarMarcador() {

  const marcador =
    $("marcador");


  marcador.innerHTML =
    estado.jugadores
      .map(
        (j, i) => `

          <div
            class="score-row
              ${i === estado.turno
                ? "active"
                : ""}"
          >

            <span
              class="token-mini"
              style="background:${j.color}"
            ></span>

            <span class="score-name">
              ${escapeHtml(j.nombre)}
            </span>

            <span class="score-points">
              ${j.puntos} pts
            </span>

          </div>

        `
      )
      .join("");

}


/* =====================================================
   TURNO
===================================================== */

function actualizarTurno() {

  const jugador =
    estado.jugadores[estado.turno];


  if (!jugador)
    return;


  $("jugador-actual")
    .textContent =
      jugador.nombre;


  renderizarMarcador();


  $("resultado-dado")
    .textContent =
      estado.dado
        ? `Salió ${estado.dado}.`
        : "Lanza el dado para avanzar.";

}


/* =====================================================
   DADO
===================================================== */

function lanzarDado() {

  if (estado.juegoTerminado)
    return;


  const btn =
    $("btn-dado");


  btn.disabled =
    true;


  const dice =
    $("dado-visual");


  dice.classList.remove(
    "rolling"
  );


  void dice.offsetWidth;


  dice.classList.add(
    "rolling"
  );


  let contador = 0;


  const intervalo =
    setInterval(() => {

      dice.textContent =
        Math.floor(
          Math.random() * 6
        ) + 1;


      contador++;


      if (contador >= 7) {

        clearInterval(
          intervalo
        );


        estado.dado =
          Number(
            dice.textContent
          );


        moverJugador(
          estado.dado
        );

      }

    }, 90);

}


/* =====================================================
   MOVIMIENTO
===================================================== */

function moverJugador(cantidad) {

  const jugador =
    estado.jugadores[
      estado.turno
    ];


  const destino =
    Math.min(
      jugador.posicion + cantidad,
      casillas.length - 1
    );


  jugador.posicion =
    destino;


  renderizarTablero();


  $("resultado-dado")
    .textContent =
      `${jugador.nombre} avanza ${cantidad}
      casilla${cantidad === 1 ? "" : "s"}.`;


  estado.movimientoPendiente =
    destino;


  setTimeout(
    () => abrirReto(),
    450
  );

}


/* =====================================================
   SELECCIÓN ALEATORIA DE PREGUNTAS
===================================================== */

function obtenerPregunta(tipo) {

  if (
    tipo === "start" ||
    tipo === "finish"
  ) {

    tipo =
      "desafio";

  }


  const disponibles =
    PREGUNTAS.filter(
      p =>
        p.categoria === tipo &&
        !estado.preguntasUsadas.has(p.id)
    );


  let lista =
    disponibles.length
      ? disponibles
      : PREGUNTAS.filter(
          p => p.categoria === tipo
        );


  if (!lista.length) {

    lista =
      PREGUNTAS.filter(
        p =>
          !estado.preguntasUsadas
            .has(p.id)
      );

  }


  if (!lista.length) {

    estado.preguntasUsadas.clear();

    lista =
      PREGUNTAS;

  }


  const pregunta =
    lista[
      Math.floor(
        Math.random() *
        lista.length
      )
    ];


  estado.preguntasUsadas
    .add(pregunta.id);


  return pregunta;

}


/* =====================================================
   ABRIR RETO
===================================================== */

function abrirReto() {

  const jugador =
    estado.jugadores[
      estado.turno
    ];


  const tipoCasilla =
    casillas[
      jugador.posicion
    ];


  /*
    META
  */

  if (
    tipoCasilla === "finish"
  ) {

    comprobarVictoria(
      jugador
    );


    if (
      estado.juegoTerminado
    )
      return;

  }


  /*
    COMODÍN
  */

  if (
    tipoCasilla === "comodin"
  ) {

    aplicarComodin(
      jugador
    );

    return;

  }


  estado.retoActual =
    obtenerPregunta(
      tipoCasilla
    );


  estado.retoRespondido =
    false;


  const p =
    estado.retoActual;


  $("reto-tipo")
    .textContent =
      TIPOS[p.categoria].nombre;


  $("reto-dificultad")
    .textContent =
      p.dificultad;


  $("reto-pregunta")
    .textContent =
      p.enunciado;


  $("reto-opciones")
    .innerHTML =
      p.opciones
        .map(
          (op, i) => `

            <label class="option">

              <input
                type="radio"
                name="respuesta"
                value="${escapeAttr(op)}"
              >

              <span>
                ${escapeHtml(op)}
              </span>

            </label>

          `
        )
        .join("");


  $("resultado-reto")
    .className =
      "answer-result hidden";


  $("resultado-reto")
    .innerHTML =
      "";


  $("btn-comprobar")
    .classList
    .remove("hidden");


  $("btn-continuar")
    .classList
    .add("hidden");


  mostrarPantalla(
    "pantalla-reto"
  );

}


/* =====================================================
   COMPROBAR RESPUESTA
===================================================== */

function comprobarReto() {

  if (
    estado.retoRespondido
  )
    return;


  const seleccion =
    document.querySelector(
      'input[name="respuesta"]:checked'
    );


  if (!seleccion) {

    $("resultado-reto")
      .className =
        "answer-result incorrect";


    $("resultado-reto")
      .innerHTML = `
        <strong>
          Selecciona una respuesta.
        </strong>

        Debes elegir una opción
        antes de comprobar.
      `;

    return;

  }


  estado.retoRespondido =
    true;


  const p =
    estado.retoActual;


  const correcto =
    seleccion.value ===
    p.respuesta;


  const jugador =
    estado.jugadores[
      estado.turno
    ];


  let puntosGanados =
    correcto
      ? p.puntos
      : 0;


  if (correcto) {

    jugador.puntos +=
      puntosGanados;

  }


  /*
    RECOMPENSA MULTIPLICACIÓN
  */

  if (
    correcto &&
    p.categoria ===
      "multiplicacion"
  ) {

    jugador.posicion =
      Math.min(
        jugador.posicion + 1,
        casillas.length - 1
      );


    $("resultado-dado")
      .textContent =
        "¡Multiplicación correcta! Avanzas 1 casilla adicional.";

  }


  const resultado =
    $("resultado-reto");


  resultado.className =
    `answer-result ${
      correcto
        ? "correct"
        : "incorrect"
    }`;


  resultado.innerHTML = `

    <strong>
      ${
        correcto
          ? "¡CORRECTO!"
          : "INCORRECTO"
      }
    </strong>

    ${
      correcto
        ? `
          Ganaste
          ${puntosGanados}
          punto${puntosGanados === 1 ? "" : "s"}.
        `
        : `
          La respuesta correcta es:
          <b>${escapeHtml(p.respuesta)}</b>.

          Ganaste 0 puntos.
        `
    }

    <br>

    <span>
      ${escapeHtml(p.explicacion)}
    </span>

  `;


  $("btn-comprobar")
    .classList
    .add("hidden");


  $("btn-continuar")
    .classList
    .remove("hidden");


  renderizarTablero();

  renderizarMarcador();

}


/* =====================================================
   CONTINUAR
===================================================== */

function continuarTurno() {

  const jugador =
    estado.jugadores[
      estado.turno
    ];


  if (
    comprobarVictoria(
      jugador
    )
  )
    return;


  estado.turno =
    (
      estado.turno + 1
    ) %
    estado.jugadores.length;


  estado.dado = 0;


  actualizarTurno();


  mostrarPantalla(
    "pantalla-juego"
  );


  $("btn-dado").disabled =
    false;

}


/* =====================================================
   COMODÍN
===================================================== */

function aplicarComodin(
  jugador
) {

  const acciones = [

    {
      texto:
        "¡Comodín! Ganas 2 puntos por una buena jugada.",
      puntos: 2,
      mover: 0
    },

    {
      texto:
        "¡Comodín! Avanzas 2 casillas sin perder puntos.",
      puntos: 0,
      mover: 2
    },

    {
      texto:
        "¡Comodín! Retrocedes 1 casilla, pero ganas 1 punto.",
      puntos: 1,
      mover: -1
    },

    {
      texto:
        "¡Comodín favorable! Avanzas 1 casilla y ganas 1 punto.",
      puntos: 1,
      mover: 1
    }

  ];


  const accion =
    acciones[
      Math.floor(
        Math.random() *
        acciones.length
      )
    ];


  jugador.puntos +=
    accion.puntos;


  jugador.posicion =
    Math.max(
      0,
      Math.min(
        jugador.posicion +
          accion.mover,
        casillas.length - 1
      )
    );


  renderizarTablero();

  renderizarMarcador();


  $("resultado-dado")
    .textContent =
      accion.texto;


  setTimeout(
    () => {

      if (
        comprobarVictoria(
          jugador
        )
      )
        return;


      estado.turno =
        (
          estado.turno + 1
        ) %
        estado.jugadores.length;


      estado.dado = 0;


      actualizarTurno();


      $("btn-dado")
        .disabled = false;

    },
    900
  );

}


/* =====================================================
   VICTORIA
===================================================== */

function comprobarVictoria(
  jugador
) {

  /*
    Para ganar:
    - estar en META
    - tener mínimo 5 puntos
  */

  if (
    jugador.posicion >=
      casillas.length - 1 &&
    jugador.puntos >= 5
  ) {

    estado.juegoTerminado =
      true;


    $("ganador-nombre")
      .textContent =
        jugador.nombre;


    $("ganador-puntos")
      .textContent =
        `${jugador.puntos} puntos algebraicos`;


    mostrarPantalla(
      "pantalla-final"
    );


    return true;

  }


  /*
    Si llega a META sin
    los 5 puntos necesarios,
    vuelve una casilla.
  */

  if (
    jugador.posicion >=
      casillas.length - 1 &&
    jugador.puntos < 5
  ) {

    $("resultado-dado")
      .textContent =
        `${jugador.nombre} llegó a META, pero necesita al menos 5 puntos. Debe seguir jugando.`;


    jugador.posicion =
      casillas.length - 2;


    renderizarTablero();

  }


  return false;

}


/* =====================================================
   NUEVA PARTIDA
===================================================== */

function nuevaPartida() {

  mostrarPantalla(
    "pantalla-inicio"
  );

}


/* =====================================================
   SEGURIDAD BÁSICA PARA TEXTO
===================================================== */

function escapeHtml(text) {

  return String(text)
    .replace(
      /[&<>'"]/g,
      c => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        "\"": "&quot;"

      }[c])
    );

}


function escapeAttr(text) {

  return escapeHtml(text);

}


/* =====================================================
   EVENTOS
===================================================== */

$("btn-jugar")
  .addEventListener(
    "click",
    iniciarConfiguracion
  );


document
  .querySelectorAll(".count-btn")
  .forEach(
    btn =>
      btn.addEventListener(
        "click",
        () =>
          seleccionarNumeroJugadores(
            btn
          )
      )
  );


$("btn-comenzar")
  .addEventListener(
    "click",
    iniciarPartida
  );


$("btn-dado")
  .addEventListener(
    "click",
    lanzarDado
  );


$("btn-comprobar")
  .addEventListener(
    "click",
    comprobarReto
  );


$("btn-continuar")
  .addEventListener(
    "click",
    continuarTurno
  );


$("btn-nueva-partida")
  .addEventListener(
    "click",
    nuevaPartida
  );


$("btn-reiniciar-top")
  .addEventListener(
    "click",
    nuevaPartida
  );


/* =====================================================
   INICIALIZACIÓN
===================================================== */

crearCamposNombres();
