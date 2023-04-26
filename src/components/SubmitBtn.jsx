import PropTypes from "prop-types";

const SubmitBtn = ({ val, cursor }) => {
  return (
    <button
      className="w-[174px] h-[48px] flex items-center bg-[#DD3542] font-bold text-white text-base rounded-3xl px-6 py-[14px] mx-auto mb-6"
      style={{ cursor: `${cursor}` }}
      type="submit"
    >
      <div className="w-[126px] h-[20px] flex items-center justify-center font-openSans">
        {val}
      </div>
    </button>
  );
};

SubmitBtn.propTypes = {
  val: PropTypes.string.isRequired,
  cursor: PropTypes.string.isRequired
};

export default SubmitBtn;
