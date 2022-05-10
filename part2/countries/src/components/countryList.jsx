

const CountryList = (props) => {
  const {
        foundCountries,
    } = props;
    
    if(foundCountries.length <= 10) {
        return (
            <div>
                {foundCountries.map(e => 
                    <ul>
                        <li>
                           {e}
                        </li>
                    </ul>
                )}
            </div>
        )
    } else {
        return (
            <div>
                <p>Too many options</p>
            </div>
        )
    }
        
    
    }
   

export default CountryList;