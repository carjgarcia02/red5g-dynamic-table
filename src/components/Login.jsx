import { useState } from "react";
/* Components */
import SubmitBtn from "./SubmitBtn";
/* SVG images */
import SufiLogo from "../assets/Grupo-258.svg";
import Grupo32966 from "../assets/Grupo-32966.svg";
import Grupo32967 from "../assets/Grupo-32967.svg";
import Elipse197 from "../assets/Elipse-197.svg";
import Elipse216 from "../assets/Elipse-216.svg";
import Grupo36052 from "../assets/Grupo-36052.svg";
import Grupo36075 from "../assets/Grupo-36075.svg";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    user: "",
    pass: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setInputValues({
      ...inputValues,
      user: "mail@usermail.com",
      pass: "111111111111",
    });
    console.log("ambos inputs deberán llenarse solos");
  };

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }; */

  return (
    <main className="relative w-[1280px] h-[804px] bg-[#ffffff] flex items-center font-openSans overflow-hidden">
      <img
        className="absolute -left-[148px] -bottom-[345px] z-10"
        src={Grupo32966}
        alt="Group image 32966"
      />
      <img
        className="absolute -top-[116px] -right-[300px] z-10"
        src={Grupo32967}
        alt="Group image 32967"
      />
      <img
        className="absolute top-[415px] left-[280px] z-10"
        src={Elipse197}
        alt="Elipse 197"
      />
      <img
        className="absolute bottom-[205px] right-[285px] z-10"
        src={Elipse216}
        alt="Elipse 216"
      />
      <img
        className="absolute top-[280px] left-[330px] z-10"
        src={Grupo36052}
        alt="Group image 36052"
      />
      <img
        className="absolute bottom-[120px] right-[300px] z-10"
        src={Grupo36075}
        alt="Group image 36075"
      />
      <section className="w-[400px] h-[476px] flex flex-col items-center m-auto z-20">
        <header className="w-[368px] h-[164px] text-center mb-[32px]">
          <img
            className="m-auto cursor-pointer"
            src={SufiLogo}
            alt="Sufi logo"
          />
          <p className="font-bold text-[40px] text-[#413E4D] mt-[12px] h-[48px]">
            Sufipay
          </p>
          <p className="text-base text-[#413E4D] mt-[8px] h-[20px]">
            Administrador comercial
          </p>
        </header>

        <section className="">
          <form>
            <div className="flex flex-col items-center w-[400px] h-[156px] p-4 mt-[32px] rounded-xl shadow-customShadow gap-y-3 mb-[32px]">
              <input
                className="relative w-[368px] h-[56px] text-base text-[#413E4D] text-left border border-solid border-[#ABB9C780] rounded-md cursor-pointer placeholder:px-4 placeholder:py-[18px] focus:outline-none"
                style={clicked ? { padding: "28px 16px 8px" } : null}
                type="email"
                placeholder="Usuario"
                name="user"
                value={clicked ? inputValues.user : ""}
                onClick={handleClick}
              />
              <input
                className="relative w-[368px] h-[56px] text-base text-[#413E4D] text-left border border-solid border-[#ABB9C780] rounded-md cursor-pointer placeholder:px-4 placeholder:py-[18px] focus:outline-none"
                style={clicked ? { padding: "28px 16px 8px" } : null}
                type="password"
                placeholder="Contraseña"
                name="pass"
                value={clicked ? inputValues.pass : ""}
                onClick={handleClick}
              />
            </div>
            <SubmitBtn
              val="INGRESAR"
              cursor={clicked ? "pointer" : "auto"}
            />
            <p className="text-center text-xs underline">
              No recuerdo mi contraseña
            </p>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Login;
