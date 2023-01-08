import Card from "../card/card.component";

const CardList = (props) => {
    console.log("render from CardList", props.items);
    const monsters = props.items.map((monster) => (
        <Card key={monster.id} name={monster.name}/>
      ));
    return <div>
        {monsters}
    </div>;
};

export default CardList;