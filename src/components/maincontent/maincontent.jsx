
import Column from "../column/column"
import { SContainer } from "../header/header.styled"
import { SMain, SMainBlock, SMainContent } from "./maincontent.styled"

const MainContent = ({loading}) => {
	if (loading === true) {
		return <p style = {{fontSize: "30px", display: "flex", justifyContent: "center"}}>Идет загрузка...</p>
	} else return (
        <SMain>
			<SContainer>
				<SMainBlock>
					<SMainContent>
						
						<Column status = 'Без статуса' /> 

                        <Column status = 'Нужно сделать' />

                        <Column status = 'В работе' />

                        <Column status = 'Тестирование' />

                        <Column status = 'Готово'/>

						
					</SMainContent>
				
				</SMainBlock>
			</SContainer>
		</SMain>
    )
}

export default MainContent;

