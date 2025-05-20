import Card from "../card/card"
import { cardList } from "../../data";
import { SMainColumn, SColumnTitle, SColumnTitleP, SCards } from "./column.styled";

const Column = ({status}) => {
  return (<SMainColumn>
    <SColumnTitle>
        <SColumnTitleP>{status}</SColumnTitleP>
    </SColumnTitle>
    <SCards>
        {cardList.filter((card) => card.status === status).
        map((card, id) => (
            <Card card = {card} 
            key = {id}
            theme = {card.theme}
            title = {card.title}
            date = {card.date}
            />
        ))}
        
    
    </SCards>
 </SMainColumn>	
  )
}

export default Column;


