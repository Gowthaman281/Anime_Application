import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
      const option = {
        method: 'Get',
        headers: {
          'x-rapidapi-key': 'c3c20349bemsh5910c38fa2ceb4bp1bf938jsn07c745e77d1b',
          'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
      }
      try {
        const res = await fetch(url,option);
        const data = await res.json();
        setAnime(data);
      } catch (err) {
        setError('Failed to load anime details');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <div className="bg-white p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
         {anime.image && (
        <img
          src={anime.image}
          alt={anime.title}
          className="w-70 h-70 max-w-3xl mx-auto rounded shadow-lg "
        />
      )}
        <h1 className="text-4xl font-bold mt-4">{anime.title}</h1>
        <p className="mt-2 text-gray-700">{anime.synopsis}</p>
        <p className="mt-2 text-sm text-gray-500">Episodes: {anime.episodes}</p>
        <p className="mt-2 text-sm text-gray-500">Genres: {anime.genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default AnimeDetails;