import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DayWisePlan.css';

const DayWisePlan = () => {
    const navigate = useNavigate();

    const itinerary = [
        {
            date: '12 APR 25',
            city: 'Tokyo',
            activities: [
                {
                    time: '8:00 AM',
                    title: 'Breakfast at a traditional Japanese café',
                    location: 'Shibuya',
                    description: 'Try sushi, tamago, or miso soup.',
                    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500'
                },
                {
                    time: '9:00 AM',
                    title: 'Explore Senso-ji Temple',
                    location: 'Asakusa',
                    description: 'Walk around Nakamise for souvenirs.',
                    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=500'
                },
                {
                    time: '11:00 AM',
                    title: 'Visit Tokyo Skytree or Asakusa Culture Center',
                    location: 'Asakusa',
                    description: 'Walk around Nakamise for souvenirs.',
                    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=500'
                },
                {
                    time: '1:00 PM',
                    title: 'Lunch at Tsukiji Outer Market',
                    location: 'Tsukiji',
                    description: 'Fresh sushi and seafood experience.',
                    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500'
                },
                {
                    time: '3:00 PM',
                    title: 'Shopping in Ginza',
                    location: 'Ginza',
                    description: 'Luxury shopping and entertainment district.',
                    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
                },
                {
                    time: '5:00 PM',
                    title: 'Visit Tokyo Tower',
                    location: 'Minato',
                    description: 'Iconic landmark with city views.',
                    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500'
                },
                {
                    time: '7:00 PM',
                    title: 'Dinner at Izakaya Restaurant',
                    location: 'Shinjuku',
                    description: 'Traditional Japanese pub dining experience.',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'
                }
            ]
        },
        {
            date: '13 APR 25',
            city: 'Harajuku',
            activities: [
                {
                    time: '8:00 AM',
                    title: 'Breakfast at a traditional Japanese café',
                    location: 'Harajuku',
                    description: 'Try sushi, tamago, or miso soup.',
                    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
                },
                {
                    time: '9:00 AM',
                    title: 'Explore Meiji Shrine',
                    location: 'Shibuya',
                    description: 'Historic Shinto shrine in forested area.',
                    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500'
                },
                {
                    time: '11:00 AM',
                    title: 'Harajuku Fashion Street',
                    location: 'Harajuku',
                    description: 'Trendy shopping and street fashion.',
                    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=500'
                },
                {
                    time: '1:00 PM',
                    title: 'Lunch at Kawaii Monster Café',
                    location: 'Harajuku',
                    description: 'Colorful and quirky themed dining.',
                    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500'
                },
                {
                    time: '3:00 PM',
                    title: 'Visit Yoyogi Park',
                    location: 'Shibuya',
                    description: 'Relax in Tokyo\'s largest city park.',
                    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=500'
                },
                {
                    time: '5:00 PM',
                    title: 'Shibuya Crossing Experience',
                    location: 'Shibuya',
                    description: 'World\'s busiest pedestrian crossing.',
                    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500'
                },
                {
                    time: '7:00 PM',
                    title: 'Dinner at Ramen Street',
                    location: 'Tokyo Station',
                    description: 'Best ramen restaurants in one location.',
                    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500'
                }
            ]
        },
        {
            date: '14 APR 25',
            city: 'Shinjuku',
            activities: [
                {
                    time: '8:00 AM',
                    title: 'Breakfast at a traditional Japanese café',
                    location: 'Shinjuku',
                    description: 'Try sushi, tamago, or miso soup.',
                    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'
                },
                {
                    time: '9:00 AM',
                    title: 'Shinjuku Gyoen National Garden',
                    location: 'Shinjuku',
                    description: 'Beautiful Japanese landscape garden.',
                    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500'
                },
                {
                    time: '11:00 AM',
                    title: 'Tokyo Metropolitan Government Building',
                    location: 'Shinjuku',
                    description: 'Free observation deck with panoramic views.',
                    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500'
                },
                {
                    time: '1:00 PM',
                    title: 'Lunch at Omoide Yokocho',
                    location: 'Shinjuku',
                    description: 'Historic alley with small eateries.',
                    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500'
                },
                {
                    time: '3:00 PM',
                    title: 'Shopping at Takashimaya Times Square',
                    location: 'Shinjuku',
                    description: 'Modern shopping and entertainment complex.',
                    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500'
                },
                {
                    time: '5:00 PM',
                    title: 'Robot Restaurant Show',
                    location: 'Kabukicho',
                    description: 'Unique entertainment experience.',
                    image: 'https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500'
                },
                {
                    time: '7:00 PM',
                    title: 'Dinner at Golden Gai',
                    location: 'Shinjuku',
                    description: 'Tiny bars and restaurants in narrow alleys.',
                    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500'
                }
            ]
        }
    ];

    const handleBookTrip = () => {
        navigate('/checkout');
    };

    const handleBack = () => {
        navigate(-1);
    };

    // Background styles
    const backgroundStyle = {
        backgroundImage: 'url(/daybg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(26, 35, 50, 0.85), rgba(45, 62, 80, 0.85))',
        zIndex: 0
    };

    return (
        <div className="daywise-plan" style={backgroundStyle}>
            {/* Dark Overlay */}
            <div style={overlayStyle}></div>

            {/* Timeline Container */}
            <div className="timeline-wrapper">
                <div className="timeline-container">
                    {/* Time Labels Column */}
                    <div className="time-column">
                        <div className="time-header">Time</div>
                        {['8:00 AM', '9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'].map((time, idx) => (
                            <div key={idx} className="time-slot">
                                <div className="time-circle">
                                    🕐
                                </div>
                                <div className="time-label">{time}</div>
                            </div>
                        ))}
                    </div>

                    {/* Days Columns */}
                    <div className="days-scroll-container">
                        {itinerary.map((day, dayIdx) => (
                            <div key={dayIdx} className="day-column">
                                {/* Day Header */}
                                <div className="day-header">
                                    <div className="day-date">{day.date}</div>
                                    <div className="day-city">{day.city}</div>
                                </div>

                                {/* Activities */}
                                {day.activities.map((activity, actIdx) => (
                                    <div key={actIdx} className="activity-card">
                                        {/* Expand Button */}
                                        <button className="activity-expand">
                                            ▼
                                        </button>

                                        {/* Menu Button */}
                                        <button className="activity-menu">
                                            ⋮
                                        </button>

                                        {/* Activity Content */}
                                        <div className="activity-info">
                                            <h3 className="activity-title">{activity.title}</h3>
                                            <p className="activity-location">{activity.location}</p>
                                            <p className="activity-description">{activity.description}</p>
                                        </div>

                                        {/* Activity Image */}
                                        <div className="activity-image">
                                            <img src={activity.image} alt={activity.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Book Trip Button */}
            <button className="book-trip-button" onClick={handleBookTrip}>
                Book Trip
            </button>

            {/* Floating Action Buttons */}
           
            <button className="fab fab-chat">
                💬
            </button>
            <button className="fab fab-menu">
                ☰
            </button>
        </div>
    );
};

export default DayWisePlan;
