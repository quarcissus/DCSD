const acreditationList = document.querySelector("#acreditation-table tbody");
const cursesSelect = document.getElementById("cursesSelect");
const keySelecter = document.getElementById("inlineCheckbox1");
const curseSelecter = document.getElementById("inlineCheckbox2");
const keySection = document.getElementById("keyContainer");
const curseSection = document.getElementById("curseContainer");
const key = document.getElementById("clave");
const wrapScroll = document.querySelector(".scrollTop");
const scrollDiv = document.querySelector(".scrollTopDiv");
const tableScroll = document.querySelector(".table-wrap");
const lineaments = document.querySelector("#lineamiento");

const table_width = acreditationList.offsetWidth * 1.3;
scrollDiv.setAttribute("style", "width:" + table_width + "px");
scrollDiv.style.width = table_width;
$(".scrollTop").scroll(function () {
  $(".table-wrap").scrollLeft($(".scrollTop").scrollLeft());
});
$(".table-wrap").scroll(function () {
  $(".scrollTop").scrollLeft($(".table-wrap").scrollLeft());
});

let initTopPosition = $(".table-wrap").offset().top;
setScrollHeight();

let curseselected = "";
cursesSelect.addEventListener("change", function () {
  setScrollHeight(true);
  switch (cursesSelect.value) {
    case "110000":
      curseselected = "C Agropecuarias";
      cleanCursesTable();
      acreditationCurses();
      break;
    case "120000":
      curseselected = "C de C Básicas";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "130000":
      curseselected = "C de la Salud";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "140000":
      curseselected = "C del Diseño y de la Construcción";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "150000":
      curseselected = "C Económicas y Administrativas";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "160000":
      curseselected = "C de C Sociales y Humanidades";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "170000":
      curseselected = "C de Educación Media";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "180000":
      curseselected = "C del Arte y de la Cultura";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "190000":
      curseselected = "C de la Ingeniería";
      cleanCursesTable();
      acreditationCurses();

      break;
    case "200000":
      curseselected = "C Empresariales";
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
  setScrollHeight(true);
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
  initTopPosition = $(".table-wrap").offset().top;
  setScrollHeight(true);
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
    name: "C Agropecuarias",
  },
  basic: {
    id: 12,
    name: "C Básicas",
  },
  salud: {
    id: 13,
    name: "C de la Salud",
  },
  constr: {
    id: 14,
    name: "C del Diseño y Construcción",
  },
  econom: {
    id: 15,
    name: "C Economicas y Administrativas",
  },
  hum: {
    id: 16,
    name: "C Sociales y Humanitarias",
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
    name: "C de la Ingeniería ",
  },
  empre: {
    id: 20,
    name: "C Empresariales",
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
      "number": "1",
      "curseName": "Video, fotografía movil y Editores de video para optimizar la clase grupos A y B",
      "curseKey": "8798",
      "controlKey": "20450 y 20714",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1601",
      "department": "Comunicación",
      "receptionDate": "10/29/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "41",
      "curseCredits": "1 y 3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/11/20",
      "responId": "65762",
      "comprobation": "2/2/21",
      "teachersCapture": "2/10/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "2",
      "curseName": "Argumentación y razonamiento jurídico",
      "curseKey": "8799",
      "controlKey": "20451",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1602",
      "department": "Derecho",
      "receptionDate": "11/6/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "58",
      "curseCredits": "6",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/11/20",
      "responId": "61426",
      "comprobation": "2/8/21",
      "teachersCapture": "2/9/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/18/21"
  },
  {
      "number": "3",
      "curseName": "Programación y operación de robots industriales",
      "curseKey": "8800",
      "controlKey": "20452",
      "centerKey": "19",
      "center": "C de la Ingeniería",
      "departmentKey": "1903",
      "department": "Ing Robótica",
      "receptionDate": "11/6/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/11/20",
      "responId": "6603",
      "comprobation": "2/19/21",
      "teachersCapture": "2/22/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/29/21",
      "constDelivered": "3/26/21"
  },
  {
      "number": "4",
      "curseName": "Taller editorial",
      "curseKey": "8801",
      "controlKey": "20453",
      "centerKey": "5",
      "center": "Difusión y Vinculación",
      "departmentKey": "502",
      "department": "Editorial",
      "receptionDate": "11/9/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "No",
      "participantsNumber": "30",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/11/20",
      "responId": "varios",
      "comprobation": "N/A",
      "teachersCapture": "N/A",
      "requestToControl": "N/A",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "5",
      "curseName": "Actualización en probabilidad y estadística basado en ejercicios y proyectos contextualizados",
      "curseKey": "8877",
      "controlKey": "20603",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1202",
      "department": "Estadística",
      "receptionDate": "11/11/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "7140",
      "comprobation": "2/4/21",
      "teachersCapture": "2/5/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "6",
      "curseName": "Diseño asistido por computadora básico",
      "curseKey": "8856",
      "controlKey": "20457",
      "centerKey": "19",
      "center": "C de la Ingeniería",
      "departmentKey": "1902",
      "department": "Ing Automotríz",
      "receptionDate": "11/12/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "15",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/13/20",
      "responId": "108997",
      "comprobation": "3/18/21",
      "teachersCapture": "3/18/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "enviadas"
  },
  {
      "number": "7",
      "curseName": "Taller para la actividad deportiva general de regularización",
      "curseKey": "8857",
      "controlKey": "20458",
      "centerKey": "17",
      "center": "C de Educación Media",
      "departmentKey": "1702",
      "department": "Act Deportivas",
      "receptionDate": "11/12/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "4",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/13/20",
      "responId": "3922",
      "comprobation": "Cancelado no se comprobó",
      "teachersCapture": "Cancelado no se comprobó",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "8",
      "curseName": "Generalidades de la ley del Seguro Social",
      "curseKey": "8866",
      "controlKey": "20587",
      "centerKey": "15",
      "center": "C Económicas y Administrativas",
      "departmentKey": "1502",
      "department": "Contaduría",
      "receptionDate": "11/13/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "26",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "8589",
      "comprobation": "3/16/21",
      "teachersCapture": "3/16/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/29/21",
      "constDelivered": "enviadas"
  },
  {
      "number": "9",
      "curseName": "Indicadores como herramienta para la administración financiera",
      "curseKey": "8867",
      "controlKey": "20588",
      "centerKey": "15",
      "center": "C Económicas y Administrativas",
      "departmentKey": "1504",
      "department": "Finanzas",
      "receptionDate": "11/13/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "29",
      "curseCredits": "1",
      "curseStart": "1/13/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "147438",
      "comprobation": "2/9/21",
      "teachersCapture": "2/10/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/25/21",
      "constDelivered": "3/19/21"
  },
  {
      "number": "10",
      "curseName": "Recurso Humano Integral",
      "curseKey": "8865",
      "controlKey": "20586",
      "centerKey": "15",
      "center": "C Económicas y Administrativas",
      "departmentKey": "1506",
      "department": "Recursos Humanos",
      "receptionDate": "11/13/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "6",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "234160",
      "comprobation": "3/16/21",
      "teachersCapture": "3/16/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/26/21",
      "constDelivered": "enviadas"
  },
  {
      "number": "11",
      "curseName": "Seminario de teorías sociales de organizaciones, industria y trabajo",
      "curseKey": "8868",
      "controlKey": "20589",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1609",
      "department": "Sociología y Antropología",
      "receptionDate": "11/19/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "9",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "8318",
      "comprobation": "2/2/21",
      "teachersCapture": "2/2/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/23/21"
  },
  {
      "number": "12",
      "curseName": "Adapatación literaria al guión cinematográfico",
      "curseKey": "8869",
      "controlKey": "20590",
      "centerKey": "18",
      "center": "C del Arte y de la Cultura",
      "departmentKey": "1805",
      "department": "Artes Escénicas y Audiovisuales",
      "receptionDate": "11/19/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "8",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "11421",
      "comprobation": "2/9/21",
      "teachersCapture": "2/10/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/25/21",
      "constDelivered": "3/3/21"
  },
  {
      "number": "13",
      "curseName": "Estrategias artísticas para trabajar en aula virtual",
      "curseKey": "8870",
      "controlKey": "20591",
      "centerKey": "17",
      "center": "C de Educación Media",
      "departmentKey": "1701",
      "department": "Act Artísticas",
      "receptionDate": "11/19/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "4",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/20/20",
      "responId": "9647",
      "comprobation": "2/9/21",
      "teachersCapture": "2/10/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/25/21",
      "constDelivered": "4/15/21"
  },
  {
      "number": "14",
      "curseName": "Modernidad y posmodernidad en la Arquitectura Contemporanea",
      "curseKey": "8871",
      "controlKey": "20604",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1408",
      "department": "Arquitectura",
      "receptionDate": "11/23/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "27",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "9785",
      "comprobation": "2/18/21",
      "teachersCapture": "2/18/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "15",
      "curseName": "Foro de experiencias en el trabajo tutorial",
      "curseKey": "N/A",
      "controlKey": "N/A",
      "centerKey": "-",
      "center": "Servicios Estudiantiles",
      "departmentKey": "-",
      "department": "Orientación Educativa",
      "receptionDate": "11/20/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "19",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "varios",
      "comprobation": "N/A",
      "teachersCapture": "N/A",
      "requestToControl": "N/A",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/29/21",
      "constDelivered": "4/15/21"
  },
  {
      "number": "16",
      "curseName": "Primeros Auxilios Psicológicos para profesores",
      "curseKey": "8872",
      "controlKey": "20605",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1608",
      "department": "Psicología",
      "receptionDate": "11/23/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "20",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "119465",
      "comprobation": "Cancelado no se comprobó",
      "teachersCapture": "Cancelado no se comprobó",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "17",
      "curseName": "Métodos cualitativos en ciencias Sociales",
      "curseKey": "8873",
      "controlKey": "20606",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1608",
      "department": "Psicología",
      "receptionDate": "11/23/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "12",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "2668",
      "comprobation": "Cancelado no se comprobó",
      "teachersCapture": "Cancelado no se comprobó",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "18",
      "curseName": "Estrategias pedagógicas para la enseñanza de la lengua y la literatura en el contexto de la contingencia",
      "curseKey": "8874",
      "controlKey": "20607",
      "centerKey": "18",
      "center": "C del Arte y de la Cultura",
      "departmentKey": "1802",
      "department": "Letras",
      "receptionDate": "11/23/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "13",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "14726",
      "comprobation": "2/15/21",
      "teachersCapture": "2/15/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/19/21"
  },
  {
      "number": "19",
      "curseName": "Taller de Labview",
      "curseKey": "8875",
      "controlKey": "20608",
      "centerKey": "19",
      "center": "C de la Ingeniería",
      "departmentKey": "1904",
      "department": "Ing Biomédica",
      "receptionDate": "11/24/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "11",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "27329",
      "comprobation": "2/16/21",
      "teachersCapture": "2/17/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "20",
      "curseName": "Planeación didáctica basada en la práctica estomatológica, para las materias de Fisiología y Farmacología",
      "curseKey": "8876",
      "controlKey": "20609",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1203",
      "department": "Fisiología y Farmacología",
      "receptionDate": "11/25/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "5",
      "curseCredits": "5",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "11/26/20",
      "responId": "286838",
      "comprobation": "2/8/21",
      "teachersCapture": "2/8/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/18/21"
  },
  {
      "number": "21",
      "curseName": "Educación Artística y Ámbito Cultural para docentes",
      "curseKey": "8882",
      "controlKey": "20648",
      "centerKey": "18",
      "center": "C del Arte y de la Cultura",
      "departmentKey": "1801",
      "department": "Arte y Gestión Cultural",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "Si",
      "participantsNumber": "16",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "2696",
      "comprobation": "2/16/21",
      "teachersCapture": "2/16/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/19/21"
  },
  {
      "number": "22",
      "curseName": "Grabación y edición de videos",
      "curseKey": "8883",
      "controlKey": "20649",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1206",
      "department": "Microbiología",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Si",
      "participants": "-",
      "participantsNumber": "11",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "98440",
      "comprobation": "2/5/21",
      "teachersCapture": "2/8/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "23",
      "curseName": "Curso básico de Solid Works",
      "curseKey": "8884",
      "controlKey": "20650",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1403",
      "department": "Diseño Industrial",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "8",
      "curseCredits": "4",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "34864",
      "comprobation": "2/11/21",
      "teachersCapture": "2/11/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "24",
      "curseName": "Taller de bordado con Istmeño (Oaxaca)",
      "curseKey": "8885",
      "controlKey": "20651",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1405",
      "department": "Diseño de Moda en Ind y Text",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "21",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "9045",
      "comprobation": "2/26/21",
      "teachersCapture": "3/3/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "25",
      "curseName": "Consideraciones etnográficas a favor del Diseño",
      "curseKey": "8886",
      "controlKey": "20652",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1406",
      "department": "Diseño Gráfico",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "6",
      "curseCredits": "1",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "4376",
      "comprobation": "2/8/21",
      "teachersCapture": "2/9/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "26",
      "curseName": "Excel para Ingenieros",
      "curseKey": "8702",
      "controlKey": "20653",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1410",
      "department": "Ingeniería Civil",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "22",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "147919",
      "comprobation": "2/15/21",
      "teachersCapture": "2/15/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "27",
      "curseName": "Software para expresión de diseño arquitectónico conceptual, evaluación de proyectos de alumnos de Arquitectura a distancia",
      "curseKey": "8887",
      "controlKey": "20654",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1408",
      "department": "Arquitectura",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "9",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/1/20",
      "responId": "67894",
      "comprobation": "2/18/21",
      "teachersCapture": "2/18/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "28",
      "curseName": "Estructura y modelo metodológico de configuración en el diseño de interiores de la UAA",
      "curseKey": "-",
      "controlKey": "-",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1409",
      "department": "Diseño de Interiores",
      "receptionDate": "12/2/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "14",
      "curseCredits": "4",
      "curseStart": "6/7/21",
      "curseEnd": "8/8/21",
      "autorization": "5/4/21",
      "responId": "-",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "29",
      "curseName": "Herramientas tecnológicas para fomentar el aprendizaje activo",
      "curseKey": "8889",
      "controlKey": "20656",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1407",
      "department": "Urbanismo",
      "receptionDate": "12/2/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "No",
      "participantsNumber": "17",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/3/20",
      "responId": "30624",
      "comprobation": "2/18/21",
      "teachersCapture": "2/18/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "30",
      "curseName": "Programación modular",
      "curseKey": "8890",
      "controlKey": "20657",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1209",
      "department": "Sist. de Información",
      "receptionDate": "12/3/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "16",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/3/20",
      "responId": "9094",
      "comprobation": "2/16/21",
      "teachersCapture": "2/16/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "31",
      "curseName": "Introducción a la aplicación Teams A",
      "curseKey": "8891",
      "controlKey": "20658",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1209",
      "department": "Sist. de Información",
      "receptionDate": "12/3/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "31",
      "curseCredits": "2",
      "curseStart": "7/13/20",
      "curseEnd": "7/24/20",
      "autorization": "12/3/20",
      "responId": "7444",
      "comprobation": "3/30/21",
      "teachersCapture": "3/30/21",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "4/5/21",
      "constDelivered": "4/15/21"
  },
  {
      "number": "32",
      "curseName": "Introducción a la aplicación Teams B",
      "curseKey": "8891",
      "controlKey": "20659",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1209",
      "department": "Sist. de Información",
      "receptionDate": "12/3/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "15",
      "curseCredits": "2",
      "curseStart": "7/13/20",
      "curseEnd": "7/24/20",
      "autorization": "12/3/20",
      "responId": "7444",
      "comprobation": "3/30/21",
      "teachersCapture": "3/30/21",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "4/5/21",
      "constDelivered": "4/15/21"
  },
  {
      "number": "33",
      "curseName": "Ética profesional",
      "curseKey": "8895",
      "controlKey": "20660",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1604",
      "department": "Filosofía",
      "receptionDate": "12/7/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "12",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/24/21",
      "autorization": "12/7/20",
      "responId": "9945",
      "comprobation": "2/10/21",
      "teachersCapture": "2/10/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/24/21"
  },
  {
      "number": "34",
      "curseName": "Problemas y perspectivas filosóficas",
      "curseKey": "8896",
      "controlKey": "20661",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1604",
      "department": "Filosofía",
      "receptionDate": "12/7/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "21",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/24/21",
      "autorization": "12/7/20",
      "responId": "43478",
      "comprobation": "2/15/21",
      "teachersCapture": "2/16/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/24/21"
  },
  {
      "number": "35",
      "curseName": "Diseño de cuestionarios en Aula Virtual",
      "curseKey": "8770",
      "controlKey": "20662",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1603",
      "department": "Educación",
      "receptionDate": "12/7/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "14",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/24/21",
      "autorization": "12/7/20",
      "responId": "8959",
      "comprobation": "2/2/21",
      "teachersCapture": "2/3/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "36",
      "curseName": "Diseño de instrumentos de evaluación de los aprendizajes",
      "curseKey": "8899",
      "controlKey": "20666",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1603",
      "department": "Educación",
      "receptionDate": "12/7/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "13",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/24/21",
      "autorization": "12/8/20",
      "responId": "14433",
      "comprobation": "2/2/21",
      "teachersCapture": "2/3/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "37",
      "curseName": "Introducción a la simulación clínica de alta fidelidad",
      "curseKey": "8900",
      "controlKey": "20667",
      "centerKey": "13",
      "center": "C de la Salud",
      "departmentKey": "1302",
      "department": "Enfermería",
      "receptionDate": "4/15/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "17",
      "curseCredits": "2",
      "curseStart": "6/21/21",
      "curseEnd": "7/4/21",
      "autorization": "4/16/21",
      "responId": "32888",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "38",
      "curseName": "Manejo de TICs en el aula y en clases en línea",
      "curseKey": "8901",
      "controlKey": "20668",
      "centerKey": "20",
      "center": "C Empresariales",
      "departmentKey": "2003",
      "department": "Comercio Electrónico",
      "receptionDate": "12/8/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "8",
      "curseCredits": "1",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/9/20",
      "responId": "33299",
      "comprobation": "2/17/21",
      "teachersCapture": "2/17/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/12/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "39",
      "curseName": "Herramientas didácticas para el aprendizaje basado en proyectos",
      "curseKey": "8902",
      "controlKey": "20669",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1603",
      "department": "Educación",
      "receptionDate": "12/9/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "7",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/9/20",
      "responId": "138280",
      "comprobation": "2/2/21",
      "teachersCapture": "2/3/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "40",
      "curseName": "Formación a distancia: Claves para actualizar la metodología de enseñanza",
      "curseKey": "8903",
      "controlKey": "20670",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1615",
      "department": "Centro",
      "receptionDate": "12/10/20",
      "request": "Sí",
      "cursePlan": "No",
      "participants": "Si",
      "participantsNumber": "13",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "12/14/20",
      "responId": "9818",
      "comprobation": "2/26/21",
      "teachersCapture": "3/4/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/8/21",
      "constDelivered": "3/10/21"
  },
  {
      "number": "41",
      "curseName": "Biocombustibles",
      "curseKey": "8925",
      "controlKey": "20707",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1204",
      "department": "Ing Bioquímica",
      "receptionDate": "12/16/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "6",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/11/21",
      "responId": "8269",
      "comprobation": "2/8/21",
      "teachersCapture": "2/9/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/18/21"
  },
  {
      "number": "42",
      "curseName": "Manejo de software de apoyo para ingeniería",
      "curseKey": "8926",
      "controlKey": "20708",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1204",
      "department": "Ing Bioquímica",
      "receptionDate": "12/16/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Si",
      "participantsNumber": "7",
      "curseCredits": "2",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/11/21",
      "responId": "15406",
      "comprobation": "2/8/21",
      "teachersCapture": "2/9/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/17/21"
  },
  {
      "number": "43",
      "curseName": "Taller Wiris",
      "curseKey": "8922",
      "controlKey": "20698",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1205",
      "department": "Matemáticas",
      "receptionDate": "12/15/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "24",
      "curseCredits": "4",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/6/21",
      "responId": "8706",
      "comprobation": "2/26/21",
      "teachersCapture": "2/26/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/18/21",
      "constDelivered": "3/22/21"
  },
  {
      "number": "44",
      "curseName": "Construcción de espacios académicos sobre Wordpress",
      "curseKey": "8923",
      "controlKey": "20699",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1210",
      "department": "Sist Electrónicos",
      "receptionDate": "12/14/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "14",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/6/21",
      "responId": "8646",
      "comprobation": "3/19/21",
      "teachersCapture": "3/19/21",
      "requestToControl": "3/29/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "3/29/21",
      "constDelivered": "-"
  },
  {
      "number": "45",
      "curseName": "Diseño de circuitos integrados digitales",
      "curseKey": "8924",
      "controlKey": "20700",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1210",
      "department": "Sist Electrónicos",
      "receptionDate": "12/14/20",
      "request": "Sí",
      "cursePlan": "No",
      "participants": "Sí",
      "participantsNumber": "9",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/6/21",
      "responId": "7151",
      "comprobation": "2/8/21",
      "teachersCapture": "2/8/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/18/21"
  },
  {
      "number": "46",
      "curseName": "Introducción al Python",
      "curseKey": "8666",
      "controlKey": "20701",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1210",
      "department": "Sist Electrónicos",
      "receptionDate": "12/14/20",
      "request": "Sí",
      "cursePlan": "No",
      "participants": "Sí",
      "participantsNumber": "21",
      "curseCredits": "3",
      "curseStart": "1/4/21",
      "curseEnd": "1/22/21",
      "autorization": "1/6/21",
      "responId": "10194",
      "comprobation": "2/8/21",
      "teachersCapture": "2/8/21",
      "requestToControl": "2/17/21",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "2/24/21",
      "constDelivered": "3/18/21"
  },
  {
      "number": "47",
      "curseName": "Metodologías de investigación en lo interdisciplinar de la actuación y los informes académicos de un propyecto teatral",
      "curseKey": "-",
      "controlKey": "-",
      "centerKey": "18",
      "center": "C del Arte y de la Cultura",
      "departmentKey": "1805",
      "department": "Artes Escénicas y Audiovisuales",
      "receptionDate": "12/14/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "No",
      "participantsNumber": "-",
      "curseCredits": "-",
      "curseStart": "-",
      "curseEnd": "-",
      "autorization": "Cancelado",
      "responId": "-",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "48",
      "curseName": "Escalas del espacio interior III",
      "curseKey": "8938",
      "controlKey": "20725",
      "centerKey": "14",
      "center": "C del Diseño y de la Construcción",
      "departmentKey": "1409",
      "department": "Diseño de Interiores",
      "receptionDate": "11/30/20",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "14",
      "curseCredits": "3",
      "curseStart": "6/21/21",
      "curseEnd": "8/8/21",
      "autorization": "4/14/21",
      "responId": "23755",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "49",
      "curseName": "Fisiología Clínica de la Visión III",
      "curseKey": "8939",
      "controlKey": "20726",
      "centerKey": "13",
      "center": "C de C de la Salud",
      "departmentKey": "1305",
      "department": "Optometría",
      "receptionDate": "3/24/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "12",
      "curseCredits": "2",
      "curseStart": "7/26/21",
      "curseEnd": "8/6/21",
      "autorization": "4/14/21",
      "responId": "18056",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "50",
      "curseName": "Acciones preventivas y de promosión de la salud (Trabajo comunitario)",
      "curseKey": "8683",
      "controlKey": "20727",
      "centerKey": "13",
      "center": "C de C de la Salud",
      "departmentKey": "1309",
      "department": "Cultura Física y Salud Pública",
      "receptionDate": "4/6/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "14",
      "curseCredits": "2",
      "curseStart": "6/21/21",
      "curseEnd": "7/4/21",
      "autorization": "4/14/21",
      "responId": "57309",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "51",
      "curseName": "Procedimiento laboral bajo el nuevo sistema de justicia",
      "curseKey": "8940",
      "controlKey": "20728",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1602",
      "department": "Derecho",
      "receptionDate": "4/5/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "36",
      "curseCredits": "2",
      "curseStart": "6/7/21",
      "curseEnd": "6/18/21",
      "autorization": "4/14/21",
      "responId": "8641",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "52",
      "curseName": "Regimen jurídico del agua",
      "curseKey": "8941",
      "controlKey": "20729",
      "centerKey": "16",
      "center": "C de C Sociales y Humanidades",
      "departmentKey": "1602",
      "department": "Derecho",
      "receptionDate": "4/5/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "36",
      "curseCredits": "2",
      "curseStart": "7/20/21",
      "curseEnd": "8/8/21",
      "autorization": "4/14/21",
      "responId": "26127",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  },
  {
      "number": "53",
      "curseName": "Introducción a Wiris como herramienta para evaluar contenidos de los cursos básicos de probabilidad y estadística",
      "curseKey": "8942",
      "controlKey": "20730",
      "centerKey": "12",
      "center": "C de C Básicas",
      "departmentKey": "1203",
      "department": "Estadística",
      "receptionDate": "4/9/21",
      "request": "Sí",
      "cursePlan": "Sí",
      "participants": "Sí",
      "participantsNumber": "24",
      "curseCredits": "3",
      "curseStart": "6/21/21",
      "curseEnd": "8/8/21",
      "autorization": "4/14/21",
      "responId": "8644",
      "comprobation": "-",
      "teachersCapture": "-",
      "requestToControl": "-",
      "controlReception": "-",
      "fullRequestReceive": "-",
      "constMade": "-",
      "constDelivered": "-"
  }
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
    if (parseInt(a.number) > parseInt(b.number)) {
      return 1;
    }
    if (parseInt(a.number) < parseInt(b.number)) {
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
    console.log(courses[i].center);
    if (
      curseselected !== "" &&
      courses[i].center !== curseselected &&
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
        <td class="year">2021</td>
        <td class="curseName">${curseInformation.curseName}</td>
        <td class="curseKey">${curseInformation.curseKey}</td>
        <td class="controlKey">${curseInformation.controlKey}</td>
        <td class="centerKey">${curseInformation.centerKey}</td>
        <td class="center">${curseInformation.center}</td>
        <td class="departmentKey">${curseInformation.departmentKey}</td>
        <td class="department">${curseInformation.department}</td>
        <td class="receptionDate">${curseInformation.receptionDate}</td>
        <td class="request">${curseInformation.request}</td>
        <td class="cursePlan">${curseInformation.cursePlan}</td>
        <td class="participants">${curseInformation.participants}</td>
        <td class="participantsNumber">${curseInformation.participantsNumber}</td>
        <td class="curseCredits">${curseInformation.curseCredits}</td>
        <td class="curseStart">${curseInformation.curseStart}</td>
        <td class="curseEnd">${curseInformation.curseEnd}</td>
        <td class="autorization">${curseInformation.autorization}</td>
        <td class="responId">${curseInformation.responId}</td>
        <td class="comprobation">${curseInformation.comprobation}</td>
        <td class="teachersCapture">${curseInformation.teachersCapture}</td>
        <td class="requestToControl">${curseInformation.requestToControl}</td>
        <td class="controlReception">${curseInformation.controlReception}</td>
        <td class="fullRequestReceive">${curseInformation.fullRequestReceive}</td>
        <td class="constMade">${curseInformation.constMade}</td>
        <td class="constDelivered">${curseInformation.constDelivered}</td>

    `;
  acreditationList.appendChild(row);
  if (curseInformation.requestToControl === "-") {
    row.classList.add("redRow");
  }
}

function filterKey(key) {
  let found = [];
  let not_res = document.querySelector(".not-res");
  console.log(key)
  not_res.classList.add("not-shown");
  if (key.length >= 1) {
    for (let i = 0; i < curseInformation.length; i++) {
      if (typeof curseInformation[i] == "undefined") {
        continue;
      }
      console.log(curseInformation[i].curseKey,i)
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

function setScrollHeight(flag = false) {
  if (!flag) {
    $(window).scroll(function () {
      let initTopPosition = $(".table-wrap").offset().top;
      let lineamentsPosition = $("#lineamiento").offset().top;
      if ($(window).scrollTop() > lineamentsPosition)
        $(".scrollTop").css({
          opacity: "0",
        });
      else
        $(".scrollTop").css({
          opacity: "1",
        });

      if ($(window).scrollTop() > initTopPosition)
        $(".scrollTop").css({
          position: "fixed",
          top: "0px",
        });
      else
        $(".scrollTop").css({
          position: "static",
        });
    });
  } else {
    console.log("entro");
    let initTopPosition = $(".table-wrap").offset().top;
    $(".scrollTop").css({
      position: "static",
    });
  }
}
