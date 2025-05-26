import { SAWrapper, SContainerSignUp, SModal, SModalBlock, SModalTtl, SModalTtlH2, SModalFormLogin, SModalInput, SModalBtnSignUpEnt, SModalBtnSignUpentA, SModalFormGroup, SModalFormGroupA, SModalFormGroupP  } from "./authform.styled"

const AuthForm = ({isSignUp}) => {
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
						<SModalBtnSignUpEnt id="SignUpEnter"><SModalBtnSignUpentA to ="/">{isSignUp ? "Зарегистрироваться" : "Войти"}</SModalBtnSignUpentA> </SModalBtnSignUpEnt>
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