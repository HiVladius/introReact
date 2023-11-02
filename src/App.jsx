import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import Button from "./componentes/button";
import { formaterarDinero, calcularTotalPagar } from "./utils/index";

function App() {
  const [monto, setMonto] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    // const resultadoTotalAPagar = calcularTotalPagar(monto, meses);
    setTotal(calcularTotalPagar(monto, meses));
  }, [monto, meses, total]);

  useEffect(() => {
    // calculo de pago mensual
    setPago(total / meses);
  }, [total]);

  const Min = 0;
  const Max = 20000;
  const Step = 100;

  function handleChange(e) {
    setMonto(e.target.value);
  }

  function handleClickDecrease() {
    const newValue = monto - Step;
    if (newValue < Min) {
      alert("No puedes disminuir más");
      return;
    }
    setMonto(newValue);
  }

  function handleClickIncrease() {
    const otherValue = monto + Step;
    if (otherValue > Max) {
      alert("No puedes aumentar más");
      return;
    }
    setMonto(otherValue);
  }

  return (
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow-xl p-10">
        <Header />
        <div className="flex justify-between my-6">
          <Button operador="-" fn={handleClickDecrease} />
          <Button operador="+" fn={handleClickIncrease} />
        </div>
        <input
          type="range"
          className="mt-3 w-full h-6 bg-gray-600 accent-orange-500 hover:accent-orange-600"
          onChange={handleChange}
          min={Min}
          max={Max}
          step={Step}
          value={monto}
        />
        <p className="text-center my-10 text-5xl font-extrabold text-red-400">
          {formaterarDinero(monto)}
        </p>
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Elige un <span className="text-blue-600">monto</span> a solicitar
        </h2>
        <select
          className="mt-5 w-full p-2 bg-white shadow-xl border-gray-300 rounded-lg text-center text-xl font-bold "
          value={meses}
          onChange={(e) => setMeses(+e.target.value)}
        >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="18">18 meses</option>
          <option value="24">24 meses</option>
        </select>
        <div className="my-5 space-x-3 bg-gray-50 p-5">
          <h2 className="text-2xl font-extrabold text-gray-500 text-center">
            Resumen<span className="text-blue-600"> de tu prestamo</span>
          </h2>
          <p className="text-xl text-gray-500 text-center font-bold">
            {meses} Meses
          </p>
          <p className="text-xl text-gray-500 text-center font-bold">
            {formaterarDinero(total)} Total a pagar
          </p>
          <p className="text-xl text-gray-500 text-center font-bold">
            {formaterarDinero(pago)} Pagos mensuales
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
