import Card from "../card/card"
import { cardList } from "../../data";

const Column = ({status}) => {
  return (<div className="main__column column">
    <div className="column__title">
        <p>{status}</p>
    </div>
    <div className="cards">
        {cardList.filter((card) => card.status === status).
        map((card, id) => (
            <Card card = {card} key = {id}
            theme = {card.theme}
            title = {card.title}
            date = {card.date}
            />
        ))}
        
    
    </div>
 </div>	
  )
}

export default Column;


