import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [inputValues, setInputValues] = useState({
    user: "",
    pass: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setInputValues({
        user: "mail@usermail.com",
        pass: "111111111111",
      });
    }
  }, [clicked]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues.user.length > 0 && inputValues.pass.length > 0) {
      console.log("Éxito");
      navigate("/table");
    } else {
      console.log("Hay campos vacíos");
    }
  };

  return {
    inputValues,
    handleClick,
    clicked,
    handleSubmit,
    navigate,
  };
};

export default useForm;
