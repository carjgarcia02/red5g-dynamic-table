import PropTypes from "prop-types";

const InputField = ({
  type,
  placeholder,
  inputValue,
  handleClick,
  clicked,
}) => {
  return (
    <input
      className="relative w-[368px] h-[56px] text-base text-[#413E4D] text-left border border-solid border-[#ABB9C780] rounded-md cursor-pointer placeholder:px-4 placeholder:py-[18px] focus:outline-none"
      style={clicked ? { padding: "28px 16px 8px", cursor: "default" } : null}
      type={type}
      placeholder={placeholder}
      value={clicked ? inputValue : ""}
      onClick={handleClick}
      readOnly
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  reference: PropTypes.object,
  inputValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default InputField;
