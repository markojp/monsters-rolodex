import { CardItem } from '../card-item/card-item.component';

export const CardList = (props) => {
  const { itemlist } = props;
  return (
    <div>
      {itemlist.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};
