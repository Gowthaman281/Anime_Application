import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
  e.preventDefault();
  if (search.trim() === '') {
    navigate('/');
  } else {
    navigate(`/?search=${encodeURIComponent(search.trim())}`);
  }
  setSearch('');
};


  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-xl font-bold">Anime World</Link>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search anime..."
            className="bg-white px-2 py-1 rounded text-black"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 hover:bg-pink-400 hover:text-white px-3 py-1 rounded cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
