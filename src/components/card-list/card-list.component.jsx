import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = (props) => {
    //console.log("render from CardList", props.items);
    const monsters = props.items.map((monster) => (
        <Card key={monster.id} name={monster.name} id={monster.id} email={monster.email}/>
      ));
    return <div className="card-list">
        {monsters}
    </div>;
};

export default CardList;