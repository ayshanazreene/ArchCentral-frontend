import React, { useState } from 'react'

function Search(type) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const { data } = await axios.get(
    //         `https://dummyjson.com/products/search?q=${value}`
    //       );
  
    //       setSuggestions(data.products);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [value]);
  
    return (
      <div >
        <input
          type="text"
          className='textbox w-50 m-5 rounded-5 p-4'
          placeholder={`Search ${type.type}`}
          value={value}
        style={{height:'60px',fontSize:'1.2rem'}}
          onChange={(e) => {
            setValue(e.target.value);
            
          }}
        />
      </div>
    );
}

export default Search