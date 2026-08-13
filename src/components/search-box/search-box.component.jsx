export const SearchBox = (props) => {
  const { searchText, onChangeHandler, placeholderValue, className } = props;
  return (
    <input
      className={className}
      type='search'
      placeholder={placeholderValue}
      value={searchText}
      onChange={onChangeHandler}
    />
  );
};
