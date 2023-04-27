/* Components */
import SubmitBtn from "./SubmitBtn";
import InputField from "./InputField";
/* Custom Hook */
import useForm from "../../hooks/useForm";

const Form = () => {
  const { inputValues, handleClick, clicked, handleSubmit } = useForm();

  return (
    <form className="select-none" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center w-[400px] h-[156px] p-4 mt-[32px] rounded-xl shadow-customShadow gap-y-3 mb-[32px]">
        <InputField
          type="email"
          placeholder="Usuario"
          inputValue={inputValues.user}
          handleClick={handleClick}
          clicked={clicked}
        />
        <InputField
          type="password"
          placeholder="Contraseña"
          inputValue={inputValues.pass}
          handleClick={handleClick}
          clicked={clicked}
        />
      </div>
      <SubmitBtn val="INGRESAR" cursor={clicked ? "pointer" : "auto"} />
      <p className="text-center text-xs underline">No recuerdo mi contraseña</p>
    </form>
  );
};

export default Form;
