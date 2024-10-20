import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { POP, MID, LARGE, LOW } from "../lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;

  // La función debounced
  const debouncedFunction = (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };

  // Función para cancelar el debounce
  debouncedFunction.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debouncedFunction;
};

//Random number generator between 1.000.000 and 10.000.000.000
export const siAthCalculator = (precioEntrada: number, precioAth: number) => {
  return Math.floor(precioAth / precioEntrada) - 1;
};

export const rangeDesigner = (marketCap: number) => {
  if (marketCap <= 99999999) {
    // Less than or equal to 99,999,999
    return POP;
  }
  if (marketCap >= 100000000 && marketCap <= 999999999) {
    // Between 100,000,000 and 999,999,999
    return LOW;
  }
  if (marketCap >= 1000000000 && marketCap <= 9999999999) {
    // Between 1,000,000,000 and 9,999,999,999
    return MID;
  }
  if (marketCap >= 10000000000) {
    // Greater than or equal to 10,000,000,000
    return LARGE;
  }
};

//---- Funcion que calcula el Rendimiento actual ----//
export const rendimientoCalculator = (
  precioEntrada: number,
  precioActual: number,
) => {
  const rendimiento = (precioActual / precioEntrada - 1) * 100;
  return parseFloat(rendimiento.toFixed(2));
};

export const promedioCalculator = (values: number[]) => {
  return values.reduce((acc, curr) => acc + curr) / values.length;
};

//-----Default values---//

//For the :

//Data for default values
export const defaultValuesDashboardForm = {
  nombre: "",
  ticket: "",
  id4e: "1",
  id_decision_proyecto: "1",
  marketCap: 0,
  siAth: 0,
  idExchange: "1",
  sectores: [],
  precioEntrada: "",
  precioActual: 0,
};

//Icons for the form:
export const iconsForm = [
  {
    name: "nombre",
    alt: "nombre",
    icon: "/icons/table/Proyecto.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "nombre",
    alt: "nombre",
    icon: "/dark/icons/form/proyecto-dark.png",
    clasName: "inline dark:hidden",
  },

  // { name: "ticket", alt: "ticker", icon: "/icons/table/Ticker.png",clasName:"dark:inline hidden"},
  // { name: "ticket", alt: "ticker", icon: "/dark/icons/form/Ticker.png",clasName:"dark:inline hidden"},

  {
    name: "id4e",
    alt: "4e",
    icon: "/icons/table/4E.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "id4e",
    alt: "4e",
    icon: "/dark/icons/form/4E.png",
    clasName: "inline dark:hidden",
  },

  {
    name: "id_decision_proyecto",
    alt: "decision",
    icon: "/icons/table/Decision.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "id_decision_proyecto",
    alt: "decision",
    icon: "/dark/icons/form/decision.png",
    clasName: "inline dark:hidden",
  },

  {
    name: "idExchange",
    alt: "exchange",
    icon: "/icons/table/Exchange.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "idExchange",
    alt: "exchange",
    icon: "/dark/icons/form/exchange-dark.png",
    clasName: "inline dark:hidden",
  },

  // { name: "idSector", alt: "sector", icon: "/icons/table/Sector.png", clasName:"dark:inline hidden" },
  // { name: "idSector", alt: "sector", icon: "/dark/icons/form/Sector.png", clasName:"dark:inline hidden" },
  {
    name: "precioEntrada",
    alt: "precio entrada",
    icon: "/icons/table/Precio.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "precioEntrada",
    alt: "precio entrada",
    icon: "/dark/icons/form/moneda.png",
    clasName: "inline dark:hidden",
  },
];
export const iconsFormLeftSide = [
  {
    name: "marketCap",
    alt: "market cap",
    icon: "/icons/table/cap.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "marketCap",
    alt: "market cap",
    icon: "/dark/icons/info/sitio-web.png",
    clasName: "inline dark:hidden",
  },

  {
    name: "siAth",
    alt: "si ath",
    icon: "/icons/table/ATH.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "siAth",
    alt: "si ath",
    icon: "/dark/icons/form/rendimiento.png",
    clasName: "inline dark:hidden",
  },
  {
    name: "precioActual",
    alt: "precio actual",
    icon: "/icons/table/Precio.png",
    clasName: "dark:inline hidden",
  },
  {
    name: "precioActual",
    alt: "precio actual",
    icon: "/dark/icons/form/moneda.png",
    clasName: "inline dark:hidden",
  },
];

export const tableHeaders = [
  { name: "Proyecto", icon: "/icons/table/Proyecto.png", key: "proyecto" },
  { name: "Token", icon: "/icons/table/Ticker.png", key: "ticket" },
  { name: "4E", icon: "/icons/table/4E.png", key: "id4e" },
  {
    name: "Decision",
    icon: "/icons/table/Decision.png",
    key: "id_decision_proyecto",
  },
  { name: "Sectores", icon: "/icons/table/Sector.png", key: "sector" },
  { name: "Exchange", icon: "/icons/table/Exchange.png", key: "idExchange" },
  {
    name: "Precio Entrada",
    icon: "/icons/table/Precio.png",
    key: "precioEntrada",
  },
  {
    name: "Precio Actual",
    icon: "/icons/table/Precio.png",
    key: "precioActual",
  },
  { name: "Rendimiento Actual", icon: "/icons/table/ATH.png", key: "siAth" },
  { name: "Market Cap", icon: "/icons/table/cap.png", key: "marketCap" },
  { name: "Rango", icon: "/icons/table/Rango.png", key: "rango" },
];

export const instructionsSteps = [
  {
    id: 1,
    title: "¡Bienvenido a tu Dashboard de seguimiento de proyectos!",
    description:
      "Aquí podrás darle seguimiento a los proyectos que estás investigando o en los que ya has invertido. \n\n ¡Vamos a descubrirlo!",
    img: "/encontrar.svg",
  },
  {
    id: 2,
    title: "¡Vamos a agregar un proyecto!",
    description: "¿Tienes alguno en mente?",
    img: "/estudiar.svg",
  },
  {
    id: 3,
    title: "¿Tienes alguno en mente?",
    description: "¿Por qué no pruebas con Bitcoin?",
    img: "/ejecutar.svg",
  },
  {
    id: 4,
    title: "Aquí encontrarás el token del proyecto que seleccionaste.",
    description: "(Al igual que en tu dashboard)",
    img: "/evaluar.svg",
  },
  {
    id: 5,
    title:
      "Aquí encontrarás la capitalización de mercado que tiene el proyecto que seleccionaste.",
    description: "(Al igual que en tu dashboard)",
    img: "/encontrar.svg",
  },
  {
    id: 6,
    title: "Coloca el precio de al que adquiriste el token",
    description: "¡Probemos con $10,500!",
    img: "/encontrar.svg",
  },
  {
    id: 7,
    title: " \n ",
    description:
      "En relación a tu precio de entrada y el precio actual del token se calcula el rendimiento que ha tenido tu portafolio",
    img: "/encontrar.svg",
  },
  {
    id: 8,
    title: "¡Metodología 4E!.",
    description:
      "En Kairos Research creamos un método de estudio llamado “4E” para analizar proyectos, con el objetivo guiarte hacia oportunidades de inversión informadas y sostenibles en el cambiante universo de las criptomonedas. \n Encontrar → Descubrimiento y Filtración de Proyectos \n Estudiar → Análisis Fundamental, Técnico y en On-chain \n Ejecutar → Tomar Decisiones y Estrategias \n Evaluar → Comprender y Aprender",
  },
  {
    id: 9,
    title: "Agrega tu decisión",
    description:
      "Puedes agregarlo a tu “Lista de seguimiento” para analizarlo después o puedes seleccionar “Invertir” si ya has invertido o invertirás en el proyecto.",
  },
  {
    id: 10,
    title: "¿En qué exchange lo puedes comprar?",
    description:
      "Agrega el exchange centralizado o descentralizado donde puedes adquirir o ya adquiriste el token.",
  },
  {
    id: 11,
    title: "¿A qué sector pertenece el proyecto?",
    description:
      "Agrega el o los sectores que te interesan del proyecto para investigar.",
  },
  {
    id: 12,
    title: "¡Ya casi está!",
    description: "Ahora solo añádelo a tu dashboard de seguimiento.",
  },
  {
    id: 13,
    title: "¡Has agregado un proyecto exitosamente!",
    description:
      "Da click en el proyecto y descubrirás más información sobre él.",
  },
];

export const errorHandlerAuthForm = (errMessage: string) => {
  if (errMessage === "Credenciales inválidas") {
    return "Credenciales inválidas";
  }
  if (errMessage === "No se pudo guardar la cookie") {
    return "No se pudo guardar la cookie";
  }
  if (errMessage === "Token invalido, no se pudo traer el user data") {
    return "Token invalido, no se pudo traer el user data";
  }
  if (errMessage === "Servidor no responde en ruta de getUser") {
    return "Servidor no responde en ruta de getUser";
  }
  if (errMessage === "Servidor no responde!") {
    return "Servidor no responde!";
  }
};
