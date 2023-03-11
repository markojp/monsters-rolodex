import './card.styles.css';

const Card = (props) => {
  const {name, email, id} = props.item;
  const altText = 'monster ' + name;
  const srcUrl = `https://www.robohash.org/${id}?set=set2&size=180x180`;
  return (
    <div className='card-container'>
      <img src={srcUrl} alt={altText} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
