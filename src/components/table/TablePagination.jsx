/* Font Awesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLessThan } from "react-icons/fa";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const TablePagination = () => {
  return (
    <section className="w-[508px] h-20 px-3 py-4 rounded-tl-3xl rounded-tr-3xl shadow-navShadow font-lato flex justify-center items-center">
      <div className="w-[204px] h-12 flex items-center">
        <div className="w-12 h-12 p-3 mr-1 flex justify-center items-center cursor-pointer">
          <FaLessThan className="h-3.5 w-3.5 text-[#DD3542]" />
        </div>
        <div className="w-12 h-12 p-3 border border-[#ABB9C780] mr-2 flex justify-center items-center">
          1
        </div>
        <div className="w-11 h-5 flex justify-center items-center">
          <p>de 10</p>
        </div>
        <div className="w-12 h-12 p-3 flex justify-center items-center cursor-pointer">
          <FaLessThan className="h-3.5 w-3.5 text-[#DD3542] rotate-180" />
        </div>
      </div>
      <div className="relative w-[268px] h-14 rounded-md border border-[#ABB9C780] flex justify-end items-center">
        <div className="absolute w-40 h-4 top-2 left-4 text-xs text-[#ABB9C7]">
          <p>Registros por página</p>
        </div>
        <div className="absolute w-40 h-5 bottom-2 left-4 text-base text-[#414141]">
          <p>16</p>
        </div>
        <div className="w-12 h-12 p-3 flex justify-center items-center">
          <FontAwesomeIcon
            className="h-3.5 w-3.5 p-2 text-[#DD3542] hover:text-white hover:bg-[#DD3542] hover:rounded-full cursor-pointer"
            icon={faPlus}
          />
        </div>
        <div className="w-12 h-12 p-3 flex justify-center items-center">
          <FontAwesomeIcon
            className="h-3.5 w-3.5 p-2 text-[#DD3542] hover:text-white hover:bg-[#DD3542] hover:rounded-full cursor-pointer"
            icon={faMinus}
          />
        </div>
      </div>
    </section>
  );
};

export default TablePagination;
