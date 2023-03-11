import './search-box.styles.css';

const SearchBox = (props) => {
  const {className, placeholder, value, onChangeHandler} = props;
  const classes = 'search-box ' + className;
  return (
    <input
      className={classes}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
