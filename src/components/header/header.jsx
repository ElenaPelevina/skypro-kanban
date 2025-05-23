import User from "../popuser/user";
import { useState } from "react";
import { SHeader, SContainer, SHeaderBlock, SHeaderNav, SHeaderBtnMainNew, SHeaderBtnMainNewA, SHeaderUser, SHeaderLogoLight,SHeaderLogoDark,SHeaderLogoImg
 } from "./header.styled";

const Header = () => {
    const [open, setOpen] = useState(false)
    const toClose = () => {
        setOpen(false)
    }
    const toOpen = () => {
        setOpen(true)
    }
    return (
        <SHeader>
        <SContainer>
            <SHeaderBlock>
                <SHeaderLogoLight>
                    <a href="" target="_self"><SHeaderLogoImg src="images/logo.png" alt="logo"></SHeaderLogoImg></a>
                </SHeaderLogoLight>
                <SHeaderLogoDark>
                    <a href="" target="_self"><SHeaderLogoImg src="images/logo_dark.png" alt="logo"></SHeaderLogoImg></a>
                </SHeaderLogoDark>
                <SHeaderNav>
                    <SHeaderBtnMainNew id="btnMainNew"><SHeaderBtnMainNewA href="#popNewCard">Создать новую задачу</SHeaderBtnMainNewA></SHeaderBtnMainNew>
                    <SHeaderUser href="#user-set-target" onClick={(!open? toOpen : toClose)} >Ivan Ivanov</SHeaderUser>
                    <User isOpen = {open} onClose = {toClose} /> 
                </SHeaderNav>					
            </SHeaderBlock>
        </SContainer>			
    </SHeader>
    )
}

export default Header;