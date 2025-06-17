
import Column from "../column/column"
import { SContainer } from "../header/header.styled"
import { SMain, SMainBlock, SMainContent } from "./maincontent.styled"
import { useEffect, useState, useCallback } from "react"
import { fetchTasks } from "../../services/api"


const MainContent = () => {
	const [loading, setLoading] = useState(false)
    const [tasks, setTasks] = useState([])
    const [error, setError] = useState("")

    const getTasks = useCallback(async () => {
      try {
        setLoading(true)
        const data = await fetchTasks({
          token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck'
        })
        if (data) setTasks(data)
      } catch (err) {
    setError(err.message)
      } finally {
        setLoading(false)
      }
    }, [])

    useEffect(() => {
      getTasks()
    }, [getTasks])

	if (loading === true) {
		return <p style = {{fontSize: "30px", display: "flex", justifyContent: "center"}}>Идет загрузка...</p>
	} else return (
        <SMain>
			<SContainer>
				<SMainBlock>
					<SMainContent>
						
						<Column tasks = {tasks} error = {error} loading = {loading} status = 'Без статуса' /> 

                        <Column tasks = {tasks} error = {error} loading = {loading} status = 'Нужно сделать' />

                        <Column tasks = {tasks} error = {error} loading = {loading} status = 'В работе' />

                        <Column tasks = {tasks} error = {error} loading = {loading} status = 'Тестирование' />

                        <Column tasks = {tasks} error = {error} loading = {loading} status = 'Готово'/>

						<p>{error}</p>
						
					</SMainContent>
				
				</SMainBlock>
			</SContainer>
		</SMain>
    )
}

export default MainContent;

