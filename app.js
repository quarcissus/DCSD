const acreditationList = document.querySelector("#acreditation-table tbody");
const cursesSelect = document.getElementById("cursesSelect");
const keySelecter = document.getElementById("inlineCheckbox1");
const curseSelecter = document.getElementById("inlineCheckbox2");
const keySection = document.getElementById("keyContainer");
const curseSection = document.getElementById("curseContainer");
const key = document.getElementById("clave");
let curseselected = "";
cursesSelect.addEventListener("change", function () {
  switch (cursesSelect.value) {
    case "110000":
      curseselected = "agro";
      cleanCursesTable();
      acreditationCurses();
      break;
    case "120000":
      curseselected = "basic";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "130000":
      curseselected = "salud";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "140000":
      curseselected = "constr";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "150000":
      curseselected = "econom";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "160000":
      curseselected = "hum";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "170000":
      curseselected = "media";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "180000":
      curseselected = "artes";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "190000":
      curseselected = "ing";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "200000":
      curseselected = "empre";
      cleanCursesTable();
      acreditationCurses();

      break;
    default:
      curseselected = "";
      cleanCursesTable();
      acreditationCurses();
  }
});

keySelecter.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("inlineCheckbox2").disabled = true;
    keySection.classList.remove("not-shown");
  } else {
    keySection.classList.add("not-shown");
    document.getElementById("inlineCheckbox2").disabled = false;
    key.value = "";
    cleanCursesTable();
    acreditationCurses();
  }
});

key.addEventListener("input", function (e) {
  filterKey(key.value);
});

curseSelecter.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("inlineCheckbox1").disabled = true;
    curseSection.classList.remove("not-shown");
  } else {
    curseSection.classList.add("not-shown");
    document.getElementById("inlineCheckbox1").disabled = false;
    curseselected = "";
    cleanCursesTable();
    acreditationCurses();
  }
});
let centers = {
  dgdp: {
    id: 6,
    name: "DGDP",
  },
  agro: {
    id: 11,
    name: "C. Agropecuarias",
  },
  basic: {
    id: 12,
    name: "C. Básicas",
  },
  salud: {
    id: 13,
    name: "C. de la Salud",
  },
  constr: {
    id: 14,
    name: "C. del Diseño y Construcción",
  },
  econom: {
    id: 15,
    name: "C. Economicas y Administrativas",
  },
  hum: {
    id: 16,
    name: "C. Sociales y Humanitarias",
  },
  media: {
    id: 17,
    name: "Educación Media",
  },
  artes: {
    id: 18,
    name: "Artes y la Cultura",
  },
  ing: {
    id: 19,
    name: "C. de la Ingeniería ",
  },
  empre: {
    id: 20,
    name: "C. Empresariales",
  },
};

let departments = {
  4: {
    name: "Desarrollo Curricular",
    id: "4",
    center: "6",
  },
  5: {
    name: "Innovación Educativa",
    id: "5",
    center: "6",
  },
  1105: {
    name: "C. de los Alimentos",
    id: "1105",
    center: "11",
  },
  1107: {
    name: "C. Agronómicas",
    id: "1107",
    center: "11",
  },
  1108: {
    name: "C. Veterinarias",
    id: "1108",
    center: "11",
  },
  1201: {
    name: "Biología",
    id: "1201",
    center: "12",
  },
  1202: {
    name: "Estadística",
    id: "1202",
    center: "12",
  },
  1203: {
    name: "Fisiología y Farmacología",
    id: "1203",
    center: "12",
  },
  1204: {
    name: "Ing. Bioquímica",
    id: "1204",
    center: "12",
  },
  1205: {
    name: "Matemáticas y Física",
    id: "1205",
    center: "12",
  },
  1206: {
    name: "Microbiología",
    id: "1206",
    center: "12",
  },
  1207: {
    name: "Morfología",
    id: "1207",
    center: "12",
  },
  1208: {
    name: "Química",
    id: "1208",
    center: "12",
  },
  1209: {
    name: "Sistemas de Información",
    id: "1209",
    center: "12",
  },
  1210: {
    name: "Sistemas Electrónicos",
    id: "1210",
    center: "12",
  },
  1211: {
    name: "Ciencias de la Computación",
    id: "1211",
    center: "12",
  },
  1302: {
    name: "Enfermería",
    id: "1302",
    center: "13",
  },
  1303: {
    name: "Estomatología",
    id: "1303",
    center: "13",
  },
  1304: {
    name: "Medicina",
    id: "1304",
    center: "13",
  },
  1305: {
    name: "Optometría",
    id: "1305",
    center: "13",
  },
  1309: {
    name: "Cultura Física y Salud Pública",
    id: "1309",
    center: "13",
  },
  1310: {
    name: "Nutrición",
    id: "1310",
    center: "13",
  },
  1311: {
    name: "Terapia física",
    id: "1311",
    center: "13",
  },
  1403: {
    name: "Diseño Industrial",
    id: "1403",
    center: "14",
  },
  1405: {
    name: "Diseño de Moda",
    id: "1405",
    center: "14",
  },
  1406: {
    name: "Diseño Gráfico",
    id: "1406",
    center: "14",
  },
  1407: {
    name: "Urbanismo",
    id: "1407",
    center: "14",
  },
  1408: {
    name: "Arquitectura",
    id: "1408",
    center: "14",
  },
  1409: {
    name: "Diseño de Interiores",
    id: "1409",
    center: "14",
  },
  1410: {
    name: "Ingeniería Civil",
    id: "1410",
    center: "14",
  },
  1501: {
    name: "Administración",
    id: "1501",
    center: "15",
  },
  1502: {
    name: "Contaduría",
    id: "1502",
    center: "15",
  },
  1503: {
    name: "Economía",
    id: "1503",
    center: "15",
  },
  1504: {
    name: "Finanzas",
    id: "1504",
    center: "15",
  },
  1505: {
    name: "Mercadotecnia",
    id: "1505",
    center: "15",
  },
  1506: {
    name: "Recursos Humanos",
    id: "1506",
    center: "15",
  },
  1507: {
    name: "Turismo",
    id: "1507",
    center: "15",
  },
  1601: {
    name: "Comunicación",
    id: "1601",
    center: "16",
  },
  1602: {
    name: "Derecho",
    id: "1602",
    center: "16",
  },
  1603: {
    name: "Educación",
    id: "1603",
    center: "16",
  },
  1604: {
    name: "Filosofía",
    id: "1604",
    center: "16",
  },
  1605: {
    name: "Historia",
    id: "1605",
    center: "16",
  },
  1606: {
    name: "Idiomas",
    id: "1606",
    center: "16",
  },
  1608: {
    name: "Psicología",
    id: "1608",
    center: "16",
  },
  1609: {
    name: "Sociología y Antropología",
    id: "1609",
    center: "16",
  },
  1610: {
    name: "Trabajo Social",
    id: "1610",
    center: "16",
  },
  1611: {
    name: "Ciencias Políticas",
    id: "1611",
    center: "16",
  },
  1701: {
    name: "Actividades Artisticas y Culturales",
    id: "1701",
    center: "17",
  },
  1702: {
    name: "Actividades Deportivas",
    id: "1702",
    center: "17",
  },
  1704: {
    name: "Ciencias Sociales,Economicas e Historia",
    id: "1704",
    center: "17",
  },
  1705: {
    name: "Filosofía y letras",
    id: "1705",
    center: "17",
  },
  1707: {
    name: "Idiomas",
    id: "1707",
    center: "17",
  },
  1708: {
    name: "Matemáticas y Física",
    id: "1708",
    center: "17",
  },
  1709: {
    name: "Ciencias QuÍmico-BiolÓgicas",
    id: "1709",
    center: "17",
  },
  1801: {
    name: "Arte y Gestión Cultural",
    id: "1801",
    center: "18",
  },
  1802: {
    name: "Letras",
    id: "1802",
    center: "18",
  },
  1803: {
    name: "Música",
    id: "1803",
    center: "18",
  },
  1805: {
    name: "Artes Escenicas y Audiovisuales",
    id: "1805",
    center: "18",
  },
  1902: {
    name: "Ingeniería Automotriz",
    id: "1902",
    center: "19",
  },
  1903: {
    name: "Ingeniería Robótica",
    id: "1903",
    center: "19",
  },
  1904: {
    name: "Ingeniería Biomédica",
    id: "1904",
    center: "19",
  },
  2002: {
    name: "Agronegocios",
    id: "2002",
    center: "20",
  },
  2003: {
    name: "Comercio electrónico",
    id: "2003",
    center: "20",
  },
};
let curseInformation = [
  {
    center: centers["dgdp"],
    department: 4,
    curseName: "Metodología institucional para el diseño curricular",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "16/01/2020",
    curseCredits: "4",
    requestoToControl: "Pendiente",
    fullAct: "Pendiente",
    recordsGeneration: "28/01/2020",
    recordsDelivered: "28/01/2020",

    requestoToControlReception: "Pendiente",
    curseKey: " ",
    controlKey: " ",
    receptionDate: "15/01/2020",
    participantsNumber: "35",
    number: 1,
  },
  {
    center: centers["basic"],
    department: 1201,
    curseName: "Manejo seguro de sustancias químicas peligrosas",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    receptionDate: "15/07/2020",
    participantsNumber: "11",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8647",
    controlKey: "20264",
    receptionDate: "15/07/2020",
    participantsNumber: "12",
    number: 2,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1202,
    curseName: "Didáctica de la Estadística Básica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8648",
    controlKey: "20265",
    receptionDate: "07/07/2020",
    participantsNumber: "23",
    number: 3,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1202,
    curseName:
      "Herramientas Digitales en la Enseñanza de Probabilidad y Estadística",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Por analizar",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8650",
    controlKey: "20269",
    receptionDate: "07/07/2020",
    participantsNumber: "23",
    number: 4,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1202,
    curseName: "Herramientas Digitales para la Educación Virtual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8649",
    controlKey: "20266",
    receptionDate: "13/07/2020",
    participantsNumber: "23",
    number: 5,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1202,
    curseName: "Software Estadístico R como Apoyo a la Docencia",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8651",
    controlKey: "20270",
    receptionDate: "07/07/2020",
    participantsNumber: "23",
    number: 6,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1203,
    curseName: "Bioestadística Básica y Uso del programa Graph Pad Prism",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8652",
    controlKey: "20271",
    receptionDate: "13/07/2020",
    participantsNumber: "11",
    number: 7,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1203,
    curseName: "Farmacología de los Antibióticos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8653",
    controlKey: "20272",
    receptionDate: "13/07/2020",
    participantsNumber: "10",
    number: 8,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["constr"],
    department: 1203,
    curseName: "Herramientas tecnológicas en la docencia universitaria",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8654",
    controlKey: "20273",
    receptionDate: "13/07/2020",
    participantsNumber: "11",
    number: 9,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1204,
    curseName:
      "Herramientas para Aula Virtual y MS Teams en Ciencias Básicas y Ingenierías ",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8655",
    controlKey: "20274",
    receptionDate: "07/07/2020",
    participantsNumber: "16",
    number: 10,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1204,
    curseName:
      "Proceso de Producción, Extracción, y Purificación de Aceite de la Cannabis",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8657",
    controlKey: "20275",
    receptionDate: "07/07/2020",
    participantsNumber: "9",
    number: 11,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1204,
    curseName: "Uso de Hongos en Biorremediación",
    request: "No",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8658",
    controlKey: "20276",
    receptionDate: "07/07/2020",
    participantsNumber: "11",
    number: 12,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1205,
    curseName:
      "Elaboración de reactivos para Álgebra y Álgebra lineal con Wiris",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8659",
    controlKey: "20277",
    receptionDate: "13/07/2020",
    participantsNumber: "39",
    number: 13,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1205,
    curseName: "Elaboración de reactivos para Cálculo Diferencial con Wiris",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8660",
    controlKey: "20278",
    receptionDate: "13/07/2020",
    participantsNumber: "45",
    number: 14,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1205,
    curseName: "Elaboración de reactivos para Cálculo Integral con Wiris",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8661",
    controlKey: "20281",
    receptionDate: "13/07/2020",
    participantsNumber: "40",
    number: 15,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1205,
    curseName:
      "Elaboración de reactivos para ecuaciones diferenciales con Wiris",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8662",
    controlKey: "20280",
    receptionDate: "13/07/2020",
    participantsNumber: "40",
    number: 16,
    requestoToControlReception: "Pendiente",
  },
  ,
  {
    center: centers["basic"],
    department: 1205,
    curseName: "Reactivos de opción múltiple con Wiris",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "13/01/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8478",
    controlKey: "19829",
    receptionDate: "13/12/2019",
    participantsNumber: "11",
    number: 17,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1205,
    curseName: "Seminario de matemáticas aplicadas 2020",
    request: "Si",
    cursePlan: "Si",
    participants: "8",
    curseAutorization: "2/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "2/7/2020",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "6998",
    controlKey: "19839",
    receptionDate: "30/01/20209",
    participantsNumber: "8",
    number: 18,
    requestoToControlReception: "07/02/2020",
  },
  {
    center: centers["basic"],
    department: 1206,
    curseName:
      "Actualización en materia de normatividad aplicable a laboratorios clínicos y farmacias",
    request: "Si",
    cursePlan: "Si",
    participants: "8",
    curseAutorization: "1/13/2020",
    curseCredits: "1",
    fullAct: "14/02/2020",
    requestoToControl: "14/02/2020",
    recordsGeneration: "14/02/2020",
    recordsDelivered: "17/02/2020",

    curseKey: "8480",
    controlKey: "19830",
    receptionDate: "13/12/2019",
    participantsNumber: "20",
    number: 19,
    requestoToControlReception: "2/14/2020",
  },

  {
    center: centers["basic"],
    department: 1206,
    curseName: "Herramientas tecnológicas orientadas a la educación",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Cancelado",
    curseCredits: "-",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8663",
    controlKey: "20282",
    receptionDate: "13/07/2020",
    participantsNumber: "18",
    number: 20,
    requestoToControlReception: "14/02/2020",
  },
  {
    center: centers["basic"],
    department: 1206,
    curseName:
      "Introducción a la Investigación Experimental: Redacción Cientifica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Cancelado",
    curseCredits: "6",
    fullAct: "No",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8664",
    controlKey: "20283",
    receptionDate: "13/7/2020",
    participantsNumber: "18",
    number: 21,
    requestoToControlReception: "14/02/2020",
  },
  {
    center: centers["basic"],
    department: 1209,
    curseName: "Excel Avanzado",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8665",
    controlKey: "20284",
    receptionDate: "7/7/2020",
    participantsNumber: "11",
    number: 22,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1209,
    curseName: "Introducción al Lenguaje de Programación Python",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8666",
    controlKey: "20285",
    receptionDate: "7/7/2020",
    participantsNumber: "16",
    number: 23,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1209,
    curseName: "Programación Web Básica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8667",
    controlKey: "20286",
    receptionDate: "7/7/2020",
    participantsNumber: "20",
    number: 24,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["basic"],
    department: 1210,
    curseName: "Control de Versiones con Git",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8668",
    controlKey: "20287",
    receptionDate: "10/07/2020",
    participantsNumber: "14",
    number: 25,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1210,
    curseName: "Introducción a Docker",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8670",
    controlKey: "20288",
    receptionDate: "10/7/2020",
    participantsNumber: "12",
    number: 26,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1210,
    curseName: "Introducción a MongoDB",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8671",
    controlKey: "20289",
    receptionDate: "10/7/2020",
    participantsNumber: "14",
    number: 27,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1210,
    curseName: "Microcontrolador ATMega8515",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8672",
    controlKey: "20290",
    receptionDate: "10/7/2020",
    participantsNumber: "12",
    number: 28,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1211,
    curseName: "Lenguaje de Java",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8673",
    controlKey: "20291",
    receptionDate: "7/7/2020",
    participantsNumber: "10",
    number: 29,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1211,
    curseName: "Uso de las TICs para Administración de un LMS",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8674",
    controlKey: "20292",
    receptionDate: "7/7/2020",
    participantsNumber: "20",
    number: 30,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1305,
    curseName: "IX Seminario Académico Clínico en Optometría",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/1/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "",
    controlKey: "",
    receptionDate: "22/1/2020",
    participantsNumber: "20",
    number: 31,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName: "Cátedra Alfonso Pérez Romo",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "8/1/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "",
    controlKey: "",
    receptionDate: "13/12/2019",
    participantsNumber: "2",
    number: 32,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1302,
    curseName: "Aspectos Pedagógicos del Docente de Enfermerá en Ed Superior",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8675",
    controlKey: "20293",
    receptionDate: "7/7/2020",
    participantsNumber: "17",
    number: 33,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1302,
    curseName: "Reactivos para el EGEL-ENFER",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8676",
    controlKey: "20294",
    receptionDate: "7/7/2020",
    participantsNumber: "26",
    number: 34,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1303,
    curseName: "Actualización en Prostodoncia Paricla Removible",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8677",
    controlKey: "20295",
    receptionDate: "7/7/2020",
    participantsNumber: "6",
    number: 35,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["salud"],
    department: 1303,
    curseName: "La Docencia en Estomatología ante el Covid. Protocolos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8678",
    controlKey: "20296",
    receptionDate: "7/7/2020",
    participantsNumber: "4",
    number: 36,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["salud"],
    department: 1303,
    curseName: "Manejo Estomatológico en Pacientes Sistémicos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8679",
    controlKey: "20297",
    receptionDate: "7/7/2020",
    participantsNumber: "11",
    number: 37,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1303,
    curseName: "Aclaramiento Dental",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8680",
    controlKey: "20298",
    receptionDate: "7/7/2020",
    participantsNumber: "5",
    number: 38,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1303,
    curseName: "Rol Actual del Docente en el Ámbito Clinico",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "6",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8681",
    controlKey: "20299",
    receptionDate: "7/7/2020",
    participantsNumber: "6",
    number: 39,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1305,
    curseName: "Fisiología Clínica de la visión I",
    request: "No",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8682",
    controlKey: "20300",
    receptionDate: "7/7/2020",
    participantsNumber: "19",
    number: 40,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["salud"],
    department: 1310,
    curseName: "Trabajo comunitario en salud pública",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "23/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8683",
    controlKey: "20301",
    receptionDate: "7/7/2020",
    participantsNumber: "8",
    number: 41,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1403,
    curseName: "Aspectos Conceptuales y Didácticos en el Diseño de un Curso",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8684",
    controlKey: "20302",
    receptionDate: "09/07/2020",
    participantsNumber: "12",
    number: 42,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1403,
    curseName: "Curso Básico de SolidWorks II",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8685",
    controlKey: "20303",
    receptionDate: "09/07/2020",
    participantsNumber: "12",
    number: 43,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1403,
    curseName:
      "Taller de Herramientas Digitales Apoyando la Docencia en la Carrera de Diseño Industrial",
    request: "Si",
    cursePlan: "No",
    participants: "No",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8686",
    controlKey: "20304",
    receptionDate: "09/07/2020",
    participantsNumber: "10",
    number: 44,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["constr"],
    department: 1405,
    curseName: "Diseño de Estampados",
    request: "Si",
    cursePlan: "Si",
    participants: "No",
    curseAutorization: "24/7/2020",
    curseCredits: "6",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8687",
    controlKey: "20305",
    receptionDate: "09/07/2020",
    participantsNumber: "18",
    number: 45,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1405,
    curseName: "Scrapboock. Cuaderno de bocetos para diseño de moda",
    request: "Si",
    cursePlan: "Si",
    participants: "No",
    curseAutorization: "Cancelado",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8688",
    controlKey: "20306",
    receptionDate: "09/07/2020",
    participantsNumber: "10",
    number: 46,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1405,
    curseName: "Taller de Bordado con Técnicas Artesanales Mexicanas Modulo I",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "6",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8689",
    controlKey: "20307",
    receptionDate: "09/07/2020",
    participantsNumber: "29",
    number: 47,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1406,
    curseName:
      "Experiencia e interfaz de usuario en aplicaciones web y móviles",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/20200",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8690",
    controlKey: "20308",
    receptionDate: "09/07/2020",
    participantsNumber: "15",
    number: 48,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1406,
    curseName: "Técnicas de Recorte Papel",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Por analizar",
    curseCredits: "24/7/2020",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8691",
    controlKey: "26309",
    receptionDate: "09/07/2020",
    participantsNumber: "26",
    number: 49,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1407,
    curseName: "Curso Básico Excel",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8692",
    controlKey: "20310",
    receptionDate: "09/07/2020",
    participantsNumber: "11",
    number: 50,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1407,
    curseName: "Investigación Básica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8693",
    controlKey: "20311",
    receptionDate: "09/07/2020",
    participantsNumber: "6",
    number: 51,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1407,
    curseName: "Medición de Variables en Excel",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8694",
    controlKey: "20312",
    receptionDate: "09/07/2020",
    participantsNumber: "11",
    number: 52,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1407,
    curseName:
      "Transposición de Significados en el Proceso Creactivo de Diseño",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8695",
    controlKey: "20313",
    receptionDate: "09/07/2020",
    participantsNumber: "10",
    number: 53,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1408,
    curseName: "AutoCad 3D",
    request: "Si",
    cursePlan: "sI",
    participants: "No",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8696",
    controlKey: "20314",
    receptionDate: "09/07/2020",
    participantsNumber: "10",
    number: 54,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1408,
    curseName: "Autocad 2D Architecture",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8697",
    controlKey: "20315",
    receptionDate: "09/07/2020",
    participantsNumber: "8",
    number: 55,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1408,
    curseName: "Enseñanza y Aprendizaje de la Arquitectura a Distancia",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8698",
    controlKey: "20316",
    receptionDate: "09/07/2020",
    participantsNumber: "21",
    number: 56,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1408,
    curseName: "LUMION 8.5",
    request: "Si",
    cursePlan: "Si",
    participants: "No",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8699",
    controlKey: "20317",
    receptionDate: "09/07/2020",
    participantsNumber: "11",
    number: 57,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1409,
    curseName: "Escala del espacio interior (Iy II)",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8700",
    controlKey: "20318",
    receptionDate: "09/07/2020",
    participantsNumber: "15",
    number: 58,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1410,
    curseName: "Ambientes Virtuales para la Docencia en Ingeniería Civil",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8701",
    controlKey: "20319",
    receptionDate: "09/07/2020",
    participantsNumber: "11",
    number: 59,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["constr"],
    department: 1410,
    curseName: "Excel para Ingenieros",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8702",
    controlKey: "20320",
    receptionDate: "09/07/2020",
    participantsNumber: "6",
    number: 60,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1410,
    curseName:
      "Herramientas Didácticas Complementarias para Plataformas Virtuales",
    request: "Si",
    cursePlan: "No",
    participants: "Si",
    curseAutorization: "Por analizar",
    curseCredits: "-",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "",
    controlKey: "",
    receptionDate: "09/07/2020",
    participantsNumber: "8",
    number: 61,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1410,
    curseName: "Introducción a la Plataforma de Aula Virtual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/7/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8703",
    controlKey: "20321",
    receptionDate: "09/07/2020",
    participantsNumber: "12",
    number: 62,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["constr"],
    department: 1410,
    curseName:
      "Recursos en Línea y Software Open Source de Aplicación a la Docencia de la Ingeniería",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8704",
    controlKey: "20322",
    receptionDate: "09/07/2020",
    participantsNumber: "6",
    number: 63,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1501,
    curseName: "Coaching para Docentes",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "No",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8705",
    controlKey: "20323",
    receptionDate: "08/07/2020",
    participantsNumber: "30",
    number: 64,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1502,
    curseName: "Aspectos Generales de los sistemas de costos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8706",
    controlKey: "20324",
    receptionDate: "08/07/2020",
    participantsNumber: "33",
    number: 65,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1502,
    curseName: "Crédito Bancario",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8707",
    controlKey: "20325",
    receptionDate: "08/07/2020",
    participantsNumber: "12",
    number: 66,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1502,
    curseName: "El Ejercicio Docente y la Contabilidad Gubernamental",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8708",
    controlKey: "20326",
    receptionDate: "08/07/2020",
    participantsNumber: "24",
    number: 67,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1502,
    curseName: "Normas de Información Financiera",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8709",
    controlKey: "20327",
    receptionDate: "08/07/2020",
    participantsNumber: "29",
    number: 68,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1503,
    curseName:
      'Herramientas Educativas Digitales "Apps educativas para el contexto digital"',
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8710",
    controlKey: "20328",
    receptionDate: "08/07/2020",
    participantsNumber: "23",
    number: 69,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1503,
    curseName: "Herramientas Educativas Digitales",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8711",
    controlKey: "20329",
    receptionDate: "08/07/2020",
    participantsNumber: "23",
    number: 70,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1503,
    curseName: 'Herramientas Educativas Digitales "Microsoft Teams"',
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8712",
    controlKey: "20330",
    receptionDate: "08/07/2020",
    participantsNumber: "23",
    number: 71,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1503,
    curseName: "Uso de Series Desestacionalizados para el Análisis Económico",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8713",
    controlKey: "20331",
    receptionDate: "08/07/2020",
    participantsNumber: "14",
    number: 72,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1504,
    curseName: "Análisis Financiero",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "No",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8714",
    controlKey: "20332",
    receptionDate: "08/07/2020",
    participantsNumber: "9",
    number: 73,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1504,
    curseName: "Certificación Infosel",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8715",
    controlKey: "20333",
    receptionDate: "08/07/2020",
    participantsNumber: "15",
    number: 74,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1504,
    curseName: "Estadística para Finanzas y Ciencias Económico Administrativas",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Por analizar",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8716",
    controlKey: "20334",
    receptionDate: "08/07/2020",
    participantsNumber: "18",
    number: 75,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1504,
    curseName: "Herramientas de Excel para el Modelaje Financiero",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8717",
    controlKey: "20335",
    receptionDate: "08/07/2020",
    participantsNumber: "13",
    number: 76,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1505,
    curseName: "Rebranding",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8718",
    controlKey: "20336",
    receptionDate: "08/07/2020",
    participantsNumber: "26",
    number: 77,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1505,
    curseName:
      "Tropicalización de los Hábitos de Consumo, Sectores de Recuperación en la Nueva Normalidad",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8719",
    controlKey: "20337",
    receptionDate: "08/07/2020",
    participantsNumber: "24",
    number: 78,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Actualización en Tópicos de Calidad Industrial y Empresarial",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8720",
    controlKey: "20338",
    receptionDate: "08/07/2020",
    participantsNumber: "5",
    number: 79,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName:
      "Como detectar mentiras en el proceso de selección de recursos humanos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8721",
    controlKey: "20339",
    receptionDate: "08/07/2020",
    participantsNumber: "9",
    number: 80,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Fundamentos Básicos de Sueldos y Salarios",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "No",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8722",
    controlKey: "20340",
    receptionDate: "08/07/2020",
    participantsNumber: "9",
    number: 81,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName:
      "LMA: Lean Maturity Assessment como Instrumento de productividad de Clase Mundial",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8723",
    controlKey: "20341",
    receptionDate: "08/07/2020",
    participantsNumber: "11",
    number: 82,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Los Recursos Humanos y el Nuevo Sistema Judicial Laboral",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8724",
    controlKey: "20342",
    receptionDate: "08/07/2020",
    participantsNumber: "17",
    number: 83,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: '"Maestria Personal" El Nuevo Perfil en los Recursos Humanos',
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8725",
    controlKey: "20343",
    receptionDate: "08/07/2020",
    participantsNumber: "10",
    number: 84,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Proceso de Mejora Continua en Organizaciones de Servicio",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "5",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8726",
    controlKey: "20344",
    receptionDate: "08/07/2020",
    participantsNumber: "13",
    number: 85,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Repensando el Genero",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8727",
    controlKey: "20345",
    receptionDate: "08/07/2020",
    participantsNumber: "10",
    number: 86,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1506,
    curseName: "Técnicas De Interpretación de Lenguaje Corporal",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8728",
    controlKey: "20346",
    receptionDate: "08/07/2020",
    participantsNumber: "16",
    number: 87,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["econom"],
    department: 1507,
    curseName: "Identidad con Sentido en las Organizaciones",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "24/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8729",
    controlKey: "20347",
    receptionDate: "08/07/2020",
    participantsNumber: "7",
    number: 88,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["hum"],
    department: 1601,
    curseName:
      "Uso de WordPress para Creación de Páginas Web y Blogs Para Materias Prácticas de Comunicación",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8730",
    controlKey: "20348",
    receptionDate: "05/07/2020",
    participantsNumber: "11",
    number: 89,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["hum"],
    department: 1601,
    curseName: "WireCast y streaming de contenido",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Si",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8731",
    controlKey: "20349",
    receptionDate: "05/07/2020",
    participantsNumber: "20",
    number: 90,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["media"],
    department: 1701,
    curseName:
      "Uso de Aula Virtual de la Plataforma Educativa Institucional Ámbito Académico en el Rol de Profesor",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8732",
    controlKey: "20350",
    receptionDate: "02/07/2020",
    participantsNumber: "35",
    number: 91,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["media"],
    department: 1702,
    curseName:
      "Taller de Diseño de Experiencias de Aprendizaje y Elavoración de Material Propio",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "6",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8733",
    controlKey: "20351",
    receptionDate: "02/07/2020",
    participantsNumber: "32",
    number: 92,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["media"],
    department: 1702,
    curseName: "Capacitación para el Uso y Manejo del Aula Virtual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "5",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8734",
    controlKey: "20352",
    receptionDate: "02/07/2020",
    participantsNumber: "32",
    number: 93,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["media"],
    department: 1704,
    curseName: "Taller de Adecuación de Materiales Didacticos al Aula Virtual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8735",
    controlKey: "20353",
    receptionDate: "02/07/2020",
    participantsNumber: "52",
    number: 94,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["media"],
    department: 1704,
    curseName: "Educando Conscientemente a Partir de mi Ser",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8736",
    controlKey: "20354",
    receptionDate: "06/07/2020",
    participantsNumber: "9",
    number: 95,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName: "Arte y Diversidad Sexual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8737",
    controlKey: "20355",
    receptionDate: "06/07/2020",
    participantsNumber: "23",
    number: 96,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName:
      "Arte y Misticismo de las Culturas Infígenas Rarámuri y Wixárika",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8738",
    controlKey: "20356",
    receptionDate: "06/07/2020",
    participantsNumber: "1",
    number: 97,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName: "Como Hacer un Portafolio de Artista",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8739",
    controlKey: "20357",
    receptionDate: "06/07/2020",
    participantsNumber: "2",
    number: 98,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName: "Taller de Diseño de Proyectos Culturales",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "Por analizar",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8740",
    controlKey: "20358",
    receptionDate: "06/07/2020",
    participantsNumber: "2",
    number: 99,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1801,
    curseName: "Iconografía Esóterica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8741",
    controlKey: "20359",
    receptionDate: "06/07/2020",
    participantsNumber: "30",
    number: 100,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Cuento fantástico: la imaginación como herramienta subversiva",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8742",
    controlKey: "20360",
    receptionDate: "06/07/2020",
    participantsNumber: "8",
    number: 101,
    requestoToControlReception: "Pendiente",
  },
  {
    center: centers["artes"],
    department: 1802,
    curseName: "Escritura creativa sobre la pandemia",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8743",
    controlKey: "20361",
    receptionDate: "06/07/2020",
    participantsNumber: "8",
    number: 102,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName:
      "Estrategias de escritura para evitar el plagio: la paráfrasis y la citación.",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8744",
    controlKey: "20362",
    receptionDate: "06/07/2020",
    participantsNumber: "7",
    number: 103,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Guerra civil española y la posguerra en la literatura",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8745",
    controlKey: "20363",
    receptionDate: "06/07/2020",
    participantsNumber: "8",
    number: 104,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Redacción científica: la escritura de la investigación.",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8746",
    controlKey: "20364",
    receptionDate: "06/07/2020",
    participantsNumber: "5",
    number: 105,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Redacción de textos académicos científicos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8749",
    controlKey: "20367",
    receptionDate: "06/07/2020",
    participantsNumber: "8",
    number: 106,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Redacción en el Área Administrativa",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8748",
    controlKey: "20366",
    receptionDate: "06/07/2020",
    participantsNumber: "14",
    number: 107,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Redacción: ortografía",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8747",
    controlKey: "20365",
    receptionDate: "06/07/2020",
    participantsNumber: "8",
    number: 108,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1802,
    curseName: "Taller de redacción para profesores",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8747",
    controlKey: "20365",
    receptionDate: "06/07/2020",
    participantsNumber: "5",
    number: 109,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1803,
    curseName:
      "Taller de Diseño, Redacción y Evalaución de Proyectos Culturales",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8751",
    controlKey: "20369",
    receptionDate: "06/07/2020",
    participantsNumber: "3",
    number: 110,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1803,
    curseName: "Herramientas de Transmisión en Línea",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8752",
    controlKey: "20370",
    receptionDate: "06/07/2020",
    participantsNumber: "12",
    number: 111,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1803,
    curseName: "Taller de producción radiofónica desde casa: Ventana al Sonido",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8753",
    controlKey: "20371",
    receptionDate: "06/07/2020",
    participantsNumber: "15",
    number: 112,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["artes"],
    department: 1805,
    curseName: "Procesos Producción Audiovisuales y Montajes",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8754",
    controlKey: "20372",
    receptionDate: "06/07/2020",
    participantsNumber: "20",
    number: 113,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["ing"],
    department: 1902,
    curseName: "Procesos Básicos de Taller",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8755",
    controlKey: "20373",
    receptionDate: "06/07/2020",
    participantsNumber: "16",
    number: 114,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["ing"],
    department: 1903,
    curseName:
      "Diseño de Técnicas de Control para Sistemas Neumáticos, Hidráulicos y Eléctricos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8756",
    controlKey: "20374",
    receptionDate: "06/07/2020",
    participantsNumber: "14",
    number: 115,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["ing"],
    department: 1903,
    curseName: "Herramientas de Diseño en Ingeniería (AUTOCAD)",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8757",
    controlKey: "20375",
    receptionDate: "06/07/2020",
    participantsNumber: "21",
    number: 116,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["ing"],
    department: 1903,
    curseName:
      "Metodologías de Evaluación en los Aprendizajes Orientados a Proyectos de Ingeniería",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "2",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8758",
    controlKey: "20376",
    receptionDate: "06/07/2020",
    participantsNumber: "21",
    number: 117,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["empre"],
    department: 2002,
    curseName: "Excel para Docentes",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "5",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8759",
    controlKey: "20377",
    receptionDate: "06/07/2020",
    participantsNumber: "15",
    number: 118,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["empre"],
    department: 2002,
    curseName: "Metodología para la Publicación de Artículos Científicos",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "4",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8760",
    controlKey: "20378",
    receptionDate: "06/07/2020",
    participantsNumber: "15",
    number: 119,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["empre"],
    department: 2003,
    curseName: "Análisis de datos con MS Excel en Comercio electrónico",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "6",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8761",
    controlKey: "20379",
    receptionDate: "06/07/2020",
    participantsNumber: "6",
    number: 120,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["empre"],
    department: 2003,
    curseName:
      "Manejo de herramientas tecnológicas en el aula y en clases en línea en Comercio Electrónico",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "27/07/2020",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8762",
    controlKey: "20380",
    receptionDate: "06/07/2020",
    participantsNumber: "6",
    number: 121,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["basic"],
    department: 1206,
    curseName: "Bioinformática básica",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "08/06/20",
    curseCredits: "3",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "8764",
    controlKey: "20394",
    receptionDate: "7/30/20",
    participantsNumber: "21",
    number: 122,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["dgdp"],
    department: 5,
    curseName:
      "Pasos básicos para la conformación de evidencias de aprendizaje a través de diferentes estrategias y tecnologías",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "08/07/20",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "",
    controlKey: "",
    receptionDate: "08/07/20",
    participantsNumber: "2",
    number: 123,
    requestoToControlReception: "Pendiente",
  },

  {
    center: centers["dgdp"],
    department: 5,
    curseName: "Creando mi primer espacio en aula virtual",
    request: "Si",
    cursePlan: "Si",
    participants: "Si",
    curseAutorization: "08/07/20",
    curseCredits: "1",
    fullAct: "Pendiente",
    requestoToControl: "Pendiente",
    recordsGeneration: "Pendiente",
    recordsDelivered: "No",

    curseKey: "",
    controlKey: "",
    receptionDate: "08/07/20",
    participantsNumber: "4",
    number: 124,
    requestoToControlReception: "Pendiente",
  },
];
acreditationCurses();
function acreditationCurses(filtered = [], flag) {
  if (!flag) {
    flag = false;
  }
  if (filtered.length !== 0 && !flag) {
    createTable(filtered, "filtered");
    return;
  } else {
    if (flag) {
      return;
    }
  }
  createTable(curseInformation, "center");
}

function sortCourses(courses) {
  courses = courses.sort(function (a, b) {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }

    return 0;
  });
}

function createTable(courses, type) {
  cleanCursesTable();
  for (let i = 0; i < courses.length; i++) {
    if (typeof courses[i] == "undefined") {
      continue;
    }
    sortCourses(courses);
    if (
      curseselected !== "" &&
      courses[i].center.name !== centers[curseselected].name &&
      type === "center"
    ) {
      continue;
    }
    createRow(courses[i]);
  }
}
function createRow(curseInformation) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td class="number">${curseInformation.number}</td>
        <td class="year">2020</td>
        <td class="curseName">${curseInformation.curseName}</td>
        <td class="curseKey">${curseInformation.curseKey}</td>
        <td class="controlKey">${curseInformation.controlKey}</td>
        <td class="centerKey">${curseInformation.center.id}</td>
        <td class="center">${curseInformation.center.name}</td>
        <td class="departmentKey">${curseInformation.department}</td>
        <td class="department">${
          departments[curseInformation.department].name
        }</td>
        <td class="receptionDate">${curseInformation.receptionDate}</td>
        <td class="request">${curseInformation.request}</td>
        <td class="cursePlan">${curseInformation.cursePlan}</td>
        <td class="participants">${curseInformation.participants}</td>
        <td class="participantsNumber">${
          curseInformation.participantsNumber
        }</td>
        <td class="curseCredits">${curseInformation.curseCredits}</td>
        <td class="autorization">${curseInformation.curseAutorization}</td>

        <td class="requestoToControl">${curseInformation.requestoToControl}</td>
        <td class="certificatoToDSCD">${
          curseInformation.requestoToControlReception
        }</td>
        <td class="fullAct">${curseInformation.fullAct}</td>
        <td class="recordsGeneration">${curseInformation.recordsGeneration}</td>
        <td class="recordsDelivered">${curseInformation.recordsDelivered}</td>
    `;
  acreditationList.appendChild(row);
}

function filterKey(key) {
  let found = [];
  let not_res = document.querySelector(".not-res");
  not_res.classList.add("not-shown");
  if (key.length >= 1) {
    for (let i = 0; i < curseInformation.length; i++) {
      if (typeof curseInformation[i] == "undefined") {
        continue;
      }
      if (curseInformation[i].curseKey.includes(key)) {
        found.push(curseInformation[i]);
      }
    }
    if (found.length === 0) {
      let not_res = document.querySelector(".not-res");
      not_res.classList.remove("not-shown");
      acreditationCurses(found, true);
    } else {
      acreditationCurses(found, false);
    }
  } else {
    if (key === "") {
      acreditationCurses();
    }
  }
}

function cleanCursesTable() {
  while (acreditationList.firstChild) {
    acreditationList.removeChild(acreditationList.firstChild);
  }
}
