import React, { useState } from 'react';
import search_icon from '../../assets/search-icon.png';
import '../ToolsItems/ToolsItems.css';

const SearchFilterTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    { name: 'Marketing Tools', lastUpdated: 'Jan 4, 2022', Views: '93', Favorites: '0', Contributors: 'Member' },
    { name: 'Time Management Tools', lastUpdated: 'Jan 4, 2022', Views: '24', Favorites: '0', Contributors: 'Member' }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div className="inputBox">
        <img src={search_icon} alt="" />
        <input
        type="text"
        placeholder="Search 'Files & Folders'..."
        value={searchTerm}
        onChange={handleSearch}
      /></div>
      <table>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Last updated</th>
            <th>Views</th>
            <th>Favorite</th>
            <th>Contributors</th>

          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.lastUpdated}</td>
                <td>{item.Views}</td>
                <td>{item.Favorites}</td>
                <td>{item.Contributors}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilterTable;
