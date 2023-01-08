const SearchBox = (props) => {
    return <input
    className="search-box"
    type="search"
    placeholder=""
    value={props.value}
    onChange={props.onChange}
  />;
};

export default SearchBox;