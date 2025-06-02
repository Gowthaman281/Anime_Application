import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import AnimeCard from './AnimeCard';

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');
 useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      const url = query
        ? `https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=${query}`
        : `https://anime-db.p.rapidapi.com/anime?page=1&size=100&sortBy=ranking&sortOrder=asc`;

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'Enter your API Key',
          'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setAnimeList(data.data);
      } catch (err) {
        setError('Failed to fetch anime');
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [query]);
  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
        {animeList.map(anime => (
          <AnimeCard key={anime._id || index} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;