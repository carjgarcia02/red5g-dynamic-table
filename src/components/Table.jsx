import { useNavigate } from "react-router-dom";
import Grupo175 from "../assets/Grupo-175.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Table = () => {
  const navigate = useNavigate();

  return (
    <main className="w-[1280px] bg-[#ffffff] flex flex-col items-center font-openSans">
      <section className="relative w-full h-[72px] flex justify-center py-3 shadow-tableHeaderShadow">
        <div className="w-32 h-12 px-[22px] py-3 flex justify-center">
          <img src={Grupo175} alt="Small Sufi logo" />
        </div>
        <div className="absolute w-[156px] h-[48px] flex px-3 py-3.5 left-[1112px] self-right">
          <p
            className="w-24 h-5 text-sm text-[#31323F] font-bold mr-3"
            onClick={() => navigate("/")}
          >
            Cerrar sesión
          </p>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </div>
      </section>
      <section className="w-full h-[88px]">
        <p className="w-[184px] h-6">Mis desembolsos</p>
      </section>
      <section>
        <p>Otra sección</p>
      </section>
    </main>
  );
};

export default Table;
