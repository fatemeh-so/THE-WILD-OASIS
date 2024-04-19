import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyleHeader = styled.header`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  display: flex;
  gap: 2.4rem;
  text-align: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyleHeader>
      <HeaderMenu />
      <UserAvatar/>
    </StyleHeader>
  );
}

export default Header;
