import './search-box.styles.css';

export const SearchBox = (props) => {
  const { searchText, onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      value={searchText}
      onChange={onChangeHandler}
    />
  );
};
