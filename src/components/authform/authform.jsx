import { useNavigate } from "react-router-dom"
import { SAWrapper, SContainerSignUp, SModal, SModalBlock, SModalTtl, SModalTtlH2, SModalFormLogin, SModalInput, SModalBtnSignUpEnt, SModalBtnSignUpentA, SModalFormGroup, SModalFormGroupA, SModalFormGroupP  } from "./authform.styled"

const AuthForm = ({isSignUp, setIsAuth}) => {
	const navigate = useNavigate()
	const handleLogin = (e) => {
		e.preventDefault()
		setIsAuth(true)
		navigate("/")
	}
    return (
    <SAWrapper>
        <SContainerSignUp>
            <SModal>
				<SModalBlock>
					<SModalTtl>
						<SModalTtlH2>{isSignUp ? "Регистрация" : "Вход"}</SModalTtlH2>
					</SModalTtl>
					<SModalFormLogin id="formLogUp" action="#">
                        {isSignUp && (
						<SModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
                        )}
						<SModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<SModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<SModalBtnSignUpEnt onClick={handleLogin} id="SignUpEnter"><SModalBtnSignUpentA>{isSignUp ? "Зарегистрироваться" : "Войти"}</SModalBtnSignUpentA> </SModalBtnSignUpEnt>
						<SModalFormGroup>
							{isSignUp && (
                                <SModalFormGroupP>Уже есть аккаунт?  <SModalFormGroupA to="/login">Войдите здесь</SModalFormGroupA></SModalFormGroupP>
                            )}
                            {!isSignUp && (
                                <SModalFormGroupP>Нужно зарегистрироваться? <SModalFormGroupA to="/registration">Регистрируйтесь здесь</SModalFormGroupA></SModalFormGroupP>
                            )}
						</SModalFormGroup>
					</SModalFormLogin>
				</SModalBlock> 
			</SModal>
        </SContainerSignUp>
    </SAWrapper>  
    )
}

export default AuthForm