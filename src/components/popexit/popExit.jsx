import { useNavigate } from "react-router-dom";
import { SPopExit, SPopExitBlock, SPopExitContainer, SPopExitForm, SPopExitFormGroup, SPopExitNo, SPopExitTtl, SPopExitTtlH2, SPopExitYes } from "./popExit.Styled";

const PopExit = ({setIsAuth}) => {
	const navigate = useNavigate()
	const handleLogOut = (e) => {
		e.preventDefault()
		setIsAuth(false)
		navigate("/login")
	}
	const handleNoLogOut = (e) => {
		e.preventDefault()
		navigate("/")
	}
    return (
        <SPopExit id="popExit">
				<SPopExitContainer>
					<SPopExitBlock>
						<SPopExitTtl>
							<SPopExitTtlH2>Выйти из аккаунта?</SPopExitTtlH2>
						</SPopExitTtl>
						<SPopExitForm id="formExit" action="#">
							<SPopExitFormGroup>
								<SPopExitYes onClick={handleLogOut} id="exitYes">Да, выйти </SPopExitYes>
								<SPopExitNo onClick={handleNoLogOut} id="exitNo">Нет, остаться</SPopExitNo>
							</SPopExitFormGroup>
						</SPopExitForm>
					</SPopExitBlock>
				</SPopExitContainer>
		</SPopExit>
    )
}

export default PopExit;