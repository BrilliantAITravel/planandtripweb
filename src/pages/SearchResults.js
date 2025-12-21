import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample destinations data (in real app, this would come from API)
  const allDestinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      description: 'City of lights, famous for Eiffel Tower and food tours',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      price: 1200,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Seoul',
      country: 'South Korea',
      description: 'A vibrant mix of modern skyscrapers and traditional temples',
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800',
      price: 950,
      rating: 4.7
    },
    {
      id: 3,
      name: 'Singapore',
      country: 'Singapore',
      description: 'A futuristic city with stunning architecture',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
      price: 1100,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Tokyo',
      country: 'Japan',
      description: 'Experience traditional temples and modern technology',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      price: 1300,
      rating: 4.8
    },
    {
      id: 5,
      name: 'Rome',
      country: 'Italy',
      description: 'Ancient history and amazing Italian food',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      price: 1050,
      rating: 4.6
    }
  ];

  useEffect(() => {
    // Get search query from URL parameter
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);

    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      // Filter destinations based on search query
      const filtered = allDestinations.filter(dest =>
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.country.toLowerCase().includes(query.toLowerCase()) ||
        dest.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 500);
  }, [location.search]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Background style
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/search.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="search-results-page" style={backgroundStyle}>
      <div className="search-results-header">
        <h1>Search Results</h1>
        
        <form onSubmit={handleNewSearch} className="search-results-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search destinations..."
            className="search-results-input"
          />
          <button type="submit" className="search-results-btn">
            Search
          </button>
        </form>
      </div>

      <div className="search-results-container">
        {isLoading ? (
          <div className="loading">Loading results...</div>
        ) : results.length > 0 ? (
          <>
            <p className="results-count">Found {results.length} results for "{searchQuery}"</p>
            <div className="results-grid">
              {results.map((destination) => (
                <div key={destination.id} className="result-card">
                  <img src={destination.image} alt={destination.name} />
                  <div className="result-card-content">
                    <h3>{destination.name}</h3>
                    <p className="result-country">{destination.country}</p>
                    <p className="result-description">{destination.description}</p>
                    <div className="result-footer">
                      <span className="result-price">From ${destination.price}</span>
                      <span className="result-rating">⭐ {destination.rating}</span>
                    </div>
                    <button className="result-book-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <h2>No results found for "{searchQuery}"</h2>
            <p>Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
