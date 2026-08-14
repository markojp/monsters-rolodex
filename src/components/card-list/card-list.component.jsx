import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
  const { itemlist } = props;
  return (
    <div className='card-list'>
      {itemlist.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};
