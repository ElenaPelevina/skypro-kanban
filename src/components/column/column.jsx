import Card from "../card/card"
import { cardList } from "../../data";
import { SColumnTitle, SColumnTitleP, SCards } from "./column.styled";

const Column = ({status}) => {
  return (<div className="main__column column">
    <SColumnTitle>
        <SColumnTitleP>{status}</SColumnTitleP>
    </SColumnTitle>
    <SCards>
        {cardList.filter((card) => card.status === status).
        map((card, id) => (
            <Card card = {card} key = {id}
            theme = {card.theme}
            title = {card.title}
            date = {card.date}
            />
        ))}
        
    
    </SCards>
 </div>	
  )
}

export default Column;


