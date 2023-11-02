const formaterarDinero = (valor) => {
  const formatear = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  });
  return formatear.format(valor);
};

const calcularTotalPagar = (cantidad, plazo) => {
  let total;

  //mientras mas plazo menos interes
  if (cantidad < 5000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }

  //calcular el plazo
  if (plazo === 6) {
    total *= 1.05;
  } else if (plazo === 12) {
    total *= 1.1;
  } else if (plazo === 18) {
    total *= 1.15;
  } else {
    total *= 1.2;
  }
  return total;
};

export { formaterarDinero, calcularTotalPagar };
