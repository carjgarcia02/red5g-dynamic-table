import { BiArrowToBottom } from "react-icons/bi";

const HeaderDesembolsos = () => {
  return (
    <section className="w-full h-[88px] px-[72px] py-8 flex justify-between items-center">
      <p className="w-[184px] h-6 font-[#413E4D] font-bold text-xl">
        Mis desembolsos
      </p>
      <button className="relative w-44 h-12 bg-[#DD3542] rounded-3xl flex justify-center items-center p-3">
        <BiArrowToBottom className="absolute w-6 h-6 text-white top-3 left-3" />
        <div className="w-[119] h-5 text-sm text-white font-bold">
          Descargar
        </div>
      </button>
    </section>
  );
};

export default HeaderDesembolsos;
