import styled from "styled-components"
import Logo from '../ui/Logo'
import MainNav from '../ui/MainNav'
import Uploader from "../data/Uploader"

const StyleSidebar=styled.aside`
    padding: 3.2rem 2.4rem;
    background-color: var(--color-grey-50);
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
`
function Sidebar() {
    return (
        <StyleSidebar>
            <Logo/>
            <MainNav/>
        </StyleSidebar>
    )
}

export default Sidebar
