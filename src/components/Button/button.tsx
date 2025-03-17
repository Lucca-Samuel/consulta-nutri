import "./style.css";

const Button = ({ texto, estilo, funcao }) => {
  return (
    <div>
      <button
        className={`bg-laranja ${estilo} mt-10 h-14 w-40 rounded-3xl text-center text-lg font-bold text-white`}
        onClick={funcao}
      >
        {texto}
      </button>
    </div>
  );
};

export default Button;
