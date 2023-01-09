const SearchBox = (props) => {
    return <input
    className={props.className}
    type="search"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChangeHandler}
  />;
};

export default SearchBox;