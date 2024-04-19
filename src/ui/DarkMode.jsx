import { useDarkMode } from "../contexts/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function DarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // console.log(toggleDarkMode);
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkMode;
