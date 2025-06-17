import Card from "../card/card"
import { cardList } from "../../data";
import { SMainColumn, SColumnTitle, SColumnTitleP, SCards } from "./column.styled";

const Column = ({tasks, status, error}) => {
  return (<SMainColumn>
    <SColumnTitle>
        <SColumnTitleP>{status}</SColumnTitleP>
    </SColumnTitle>
    <SCards>
        {tasks.filter((card) => card.status === status).
        map((card, id) => (
            <Card tasks = {tasks}
            card = {card}
            key = {id}
            topic = {card.topic}
            title = {card.title}
            date = {card.date}
            />
        ))}
        
    
    </SCards>
 </SMainColumn>	
  )
}

export default Column;


