import { SPopExit, SPopExitBlock, SPopExitContainer, SPopExitForm, SPopExitFormGroup, SPopExitNo, SPopExitNoA, SPopExitTtl, SPopExitTtlH2, SPopExitYes, SPopExitYesA } from "./popExit.Styled";

const PopExit = () => {
    return (
        <SPopExit id="popExit">
				<SPopExitContainer>
					<SPopExitBlock>
						<SPopExitTtl>
							<SPopExitTtlH2>Выйти из аккаунта?</SPopExitTtlH2>
						</SPopExitTtl>
						<SPopExitForm id="formExit" action="#">
							<SPopExitFormGroup>
								<SPopExitYes id="exitYes"><SPopExitYesA to="/login">Да, выйти</SPopExitYesA> </SPopExitYes>
								<SPopExitNo id="exitNo"><SPopExitNoA to="/">Нет, остаться</SPopExitNoA> </SPopExitNo>
							</SPopExitFormGroup>
						</SPopExitForm>
					</SPopExitBlock>
				</SPopExitContainer>
		</SPopExit>
    )
}

export default PopExit;