const Button = (props) => {
  const click = () => {
    if (props.digit === "C") {
      props.setResultado("0");
    } else if (props.digit === "=") {
      try {
        const resultadoFinal = eval(props.resultado);
        props.setResultado(String(resultadoFinal));
      } catch {
        props.setResultado("Erro");
      }
    } else if (props.resultado.length > 18) {
      return;
    } else if (props.resultado === "0") {
      if (["/", "*", "+", "-"].includes(props.digit)) {
        return;
      } else {
        props.setResultado(props.digit);
      }
    } else if (["/", "*", "+", "-"].includes(props.digit)) {
      const ultimoChar = props.resultado.slice(-1);
      if (!["/", "*", "+", "-"].includes(ultimoChar)) {
        props.setResultado(props.resultado + props.digit);
      }
    } else {
      props.setResultado(props.resultado + props.digit);
    }
  };

  const isSpecialChar = ["/", "*", "+", "-"].includes(props.digit);

  return (
    <button
      onClick={() => click()}
      className={`flex-1 font-semibold h-14 rounded-md shadow transition-all
        ${
          isSpecialChar
            ? "bg-orange-400/50 text-white hover:bg-orange-500/50 active:bg-orange-600/50 max-w-15"
            : "bg-stone-700 text-stone-300 hover:bg-stone-600 active:bg-stone-700"
        }`}
    >
      {props.digit}
    </button>
  );
};

export default Button;
