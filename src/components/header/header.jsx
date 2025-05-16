import User from "../popuser/user";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false)
    const toClose = () => {
        setOpen(false)
    }
    const toOpen = () => {
        setOpen(true)
    }
    return (
        <header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo _show _light">
                    <a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
                </div>
                <nav className="header__nav">
                    <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                    <a href="#user-set-target" className="header__user _hover02" onClick={toOpen}>Ivan Ivanov</a>
                    <User isOpen = {open} onClose = {toClose} /> 
                </nav>					
            </div>
        </div>			
    </header>
    )
}

export default Header;