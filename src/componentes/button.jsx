// import { BsPlusLg } from "react-icons/bs";


function Button({ operador, fn }) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-orange-400 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-orange-500"
      onClick={fn}
    >
      {operador}
    </button>
  );
}

export default Button;
