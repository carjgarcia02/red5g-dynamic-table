/* Components */
import Header from "./Header";
import Form from "./Form";
/* SVG images used for background */
import Grupo32966 from "../assets/Grupo-32966.svg";
import Grupo32967 from "../assets/Grupo-32967.svg";
import Elipse197 from "../assets/Elipse-197.svg";
import Elipse216 from "../assets/Elipse-216.svg";
import Grupo36052 from "../assets/Grupo-36052.svg";
import Grupo36075 from "../assets/Grupo-36075.svg";

const Login = () => {
  return (
    <main className="relative w-[1280px] h-[804px] bg-[#ffffff] flex items-center font-openSans overflow-hidden">
      {/* Background images */}
      <img
        className="absolute -left-[148px] -bottom-[345px] z-10 select-none"
        src={Grupo32966}
        alt="Group image 32966"
      />
      <img
        className="absolute -top-[116px] -right-[300px] z-10 select-none"
        src={Grupo32967}
        alt="Group image 32967"
      />
      <img
        className="absolute top-[415px] left-[280px] z-10 select-none"
        src={Elipse197}
        alt="Elipse 197"
      />
      <img
        className="absolute bottom-[205px] right-[285px] z-10 select-none"
        src={Elipse216}
        alt="Elipse 216"
      />
      <img
        className="absolute top-[280px] left-[330px] z-10 select-none"
        src={Grupo36052}
        alt="Group image 36052"
      />
      <img
        className="absolute bottom-[120px] right-[300px] z-10 select-none"
        src={Grupo36075}
        alt="Group image 36075"
      />

      <section className="w-[400px] h-[476px] flex flex-col items-center m-auto z-20">
        <Header />
        <Form />
      </section>
    </main>
  );
};

export default Login;
