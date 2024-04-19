import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import useLogout from "../features/authentication/useLogout";
import SpinnerMini from './SpinnerMini'
function Logout() {
    const{isLoading,mutate:logout}=useLogout()
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
     {isLoading? <SpinnerMini/> :<HiArrowLeftOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
