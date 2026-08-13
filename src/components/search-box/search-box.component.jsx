export const SearchBox = (props) => {
  const { searchText, onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={className}
      type='search'
      placeholder={placeholder}
      value={searchText}
      onChange={onChangeHandler}
    />
  );
};
