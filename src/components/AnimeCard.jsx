import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime._id}`} className="bg-white rounded-lg overflow-hidden shadow hover:scale-105 transition">
      <img src={anime.image} alt={anime.title} className="w-full h-64 object-fill" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{anime.title}</h2>
        <h2>Total episodes: {anime.episodes}</h2>
      </div>
    </Link>
  );
};

export default AnimeCard;