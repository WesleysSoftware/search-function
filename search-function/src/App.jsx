import { useState, useEffect } from 'react';

function App() {
  const clothes = ['shirt-short', 'shirt-long', 'pants-short', 'pants-long'];
  
  const [clothesJSON, setclothesJSON] = useState([])

    useEffect(() => {
      const FetchJSON = () => {
        fetch('/clothes.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP ERROR")
          }
          return response.json()
        })
        .then((data) => {
          setclothesJSON(data)
        })
        .catch((error) => {
          console.log('error fetching data')
        })
      } 
      FetchJSON()}, [])


  // State to store the user's input and the filtered clothes
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredClothes, setFilteredClothes] = useState([]);

  // Function to handle filtering when the button is clicked
  const handleFilter = () => {
    const filtered = clothesJSON.filter((item) => item.name.includes(searchQuery));
    setFilteredClothes(filtered);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update searchQuery when user types
          placeholder="Search clothes..."
        />
        <button onClick={handleFilter}>Filter Clothes</button>
      </div>

      <div>
        {filteredClothes.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>

      <div>
        {clothesJSON.map((data) => {
          <p>{data.name}</p>
        })}
      </div>
    </>
  );
}

export default App;