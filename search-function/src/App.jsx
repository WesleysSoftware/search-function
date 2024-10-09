import { useState } from 'react';

function App() {
  const clothes = ['shirt-short', 'shirt-long', 'pants-short', 'pants-long'];
  
  // State to store the user's input and the filtered clothes
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredClothes, setFilteredClothes] = useState([]);

  // Function to handle filtering when the button is clicked
  const handleFilter = () => {
    const filtered = clothes.filter((item) => item.includes(searchQuery));
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
    </>
  );
}

export default App;