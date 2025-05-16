
import Column from "../column/column"

const MainContent = ({loading}) => {
	if (loading === true) {
		return <p style = {{fontSize: "30px", display: "flex", justifyContent: "center"}}>Идет загрузка...</p>
	} else return (
        <main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
						
						<Column status = 'Без статуса' /> 

                        <Column status = 'Нужно сделать' />

                        <Column status = 'В работе' />

                        <Column status = 'Тестирование' />

                        <Column status = 'Готово'/>

						
					</div>
				
				</div>
			</div>
		</main>
    )
}

export default MainContent;

