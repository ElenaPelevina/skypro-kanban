
import { SPopUserSetButton } from "./user.styled"
import { useNavigate } from "react-router-dom"


const User = ({isOpen, onClose}) => {
     const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault
        navigate('/exit')
    }
    
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
        <SPopUserSetButton onClick={handleClick} type="button" className="_hover03">Выйти</SPopUserSetButton>
    </div>
    )
}

export default User