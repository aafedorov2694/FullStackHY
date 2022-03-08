const Filter = (props) => {

    const {
  
      filter,
      setFilter
    } = props;
  
    const onChangeFilter = (event) => {
      setFilter(event.target.value)
    }
  
    return (
      <div>
  
        search: <input value={filter} onChange={onChangeFilter} />
  
      </div>
    )
  }

  export default Filter