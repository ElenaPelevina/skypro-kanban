import { SPopUserSetButton, SPopUserSetButtonA  } from "./user.styled"


const User = ({isOpen, onClose}) => {
    if (!isOpen) return null
    return (
        <div className ="header__pop-user-set pop-user-set" onClick = {onClose}   id="user-set-target">
        {/* <a href="">x</a>  */}
        <p  className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox"></input>
        </div>
        <SPopUserSetButton type="button" className="_hover03"><SPopUserSetButtonA to="/exit">Выйти</SPopUserSetButtonA></SPopUserSetButton>
    </div>
    )
}

export default User