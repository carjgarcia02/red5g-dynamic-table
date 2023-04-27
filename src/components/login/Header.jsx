import SufiLogo from "../../assets/Grupo-258.svg";

const Header = () => {
  return (
    <header className="w-[368px] h-[164px] text-center mb-[32px] select-none">
      <img className="m-auto cursor-pointer" src={SufiLogo} alt="Sufi logo" />
      <p className="font-bold text-[40px] text-[#413E4D] mt-[12px] h-[48px]">
        Sufipay
      </p>
      <p className="text-base text-[#413E4D] mt-[8px] h-[20px]">
        Administrador comercial
      </p>
    </header>
  );
};

export default Header;
