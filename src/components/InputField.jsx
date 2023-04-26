import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({ type, val, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log("Clickaste un campo!");
  };

  const handleChange = () => {
    console.log(val);
  };

  return (
    <input
      className="relative w-[368px] h-[56px] text-base text-[#413E4D] text-left border border-solid border-[#ABB9C780] rounded-md cursor-pointer placeholder:px-4 placeholder:py-[18px] focus:outline-none"
      type={type}
      placeholder={placeholder}
      value={clicked && inputValue.user}
      onClick={handleClick}
      onChange={handleChange}
    />
    /*  placeholder:absolute placeholder:top-2 placeholder:left-4 placeholder:text-[#ABB9C7] placeholder:text-xs placeholder:text-left px-4 pt-7 py-2*/
    /* New values for placeholder and normal text after writing inside input. Animation pending. */
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  val: PropTypes.string,
};

export default InputField;
