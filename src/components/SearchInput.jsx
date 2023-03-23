const SearchInput = ({ handleSearchText, searchText }) => {
  return (
    <div className='d-flex justify-content-between'>
      <h3 className='mr-4'>Todos</h3>
      <input
        type='text'
        class='form-control'
        aria-label='Small'
        placeholder='Search..'
        value={searchText}
        onChange={(e) => handleSearchText(e.target.value)}
        aria-describedby='inputGroup-sizing-sm'
      />
    </div>
  );
};

export default SearchInput;
