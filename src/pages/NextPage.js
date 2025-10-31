import React, { useState, useEffect } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';


function NextPage() {
const navigate = useNavigate();
  const destinations = [
    { src: '/Ladakh.jpg', name: 'Ladakh, India', caption: 'Discover the land of high passes and breathtaking mountain views.' },
    { src: '/TAIWAN.jpg', name: 'Taipei, Taiwan', caption: 'Known for its markets, Chiang kai-shek Memorial Hall & Taipei 101 skyscraper.' },
    { src: '/Singapore.jpg', name: 'Singapore', caption: 'A futuristic city with stunning architecture and a rich blend of cultures.' },
    { src: '/seoul.jpg', name: 'Seoul, South Korea', caption: 'A vibrant mix of modern skyscrapers, traditional temples, and street markets.' }
  ];

  const fixedCounts = {
    peopleVisited: ['1.2M', '1.2M', '1.2M', '1.2M'],
    attractions: ['50', '50', '50', '50'],
    itinerary: ['15', '15', '15', '15']
  };

  const prevImage = () => {
  setCurrentImage((prev) => (prev - 1 + destinations.length) % destinations.length);
  };
  const nextImage = () => {
  setCurrentImage((prev) => (prev + 1) % destinations.length);
  };


  const [currentImage, setCurrentImage] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);
  const [liked, setLiked] = useState(Array(destinations.length).fill(false));
  const [showInfo, setShowInfo] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
  setAnimateIn(true); 
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % destinations.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [destinations.length]);

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const topRightIconStyle = { width: '55px', height: '45px', cursor: 'pointer' };
  const countStyle = { color: '#fff', fontSize: '14px', marginTop: '4px', fontWeight: 'bold' };
  const leftIconSize = { width: '75px', height: '75px' };

  return (
    <div className={`next-page ${animateIn ? 'slide-in' : ''}`}style={{
      height: '110vh',
      width: '100%',
      backgroundImage: 'url("/next background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      color: 'white',
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: 'white', zIndex: 1000 }}></div>

      {/* Top icons */}
      <img src="/logo.png" alt="Logo" className="logo" />
      <img src="/user.png" alt="Login" style={{ position: 'absolute', top: '20px', right: '30px', width: '35px', height: '40px', cursor: 'pointer', zIndex: 1000 }} />
      <img src="/bell2.png" alt="Notifications" style={{ position: 'absolute', top: '20px', right: '85px', width: '40px', height: '40px', cursor: 'pointer', zIndex: 1000 }} />
      <img src="/star.png" alt="New Icon" style={{ position: 'absolute', top: '20px', right: '140px', width: '40px', height: '40px', cursor: 'pointer', zIndex: 1000 }} />

      {/* Title */}
      <h2 style={{ position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)', fontSize: '50px', fontFamily: '"Fredoka One", cursive', zIndex: 1000, whiteSpace: 'nowrap' }}>
        <span style={{ color: '#f5f5f5' }}>Trending D</span>
        <span style={{ background: 'linear-gradient(90deg, #ff7e5f, #feb47b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>estinations</span>
      </h2>

      {/* Left Arrow */}
      <div style={{
        position: 'fixed',
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        zIndex: 1400,
        bottom: showCategories ? '490px' : '50%',
        transform: showCategories ? 'none' : 'translateY(-50%)',
        transition: 'all 0.3s ease',
      }}>
        <div
          onClick={() => setShowCategories(!showCategories)}
          style={{
            height: '75px',
            width: '40px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '0px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
            transition: 'all 0.3s ease',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          <span>{showCategories ? '<' : '>'}</span>
        </div>
      </div>

      {/* Bottom-left Category Icons */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '15px',
        display: showCategories ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <img src="/mountain.png" alt="Mountains" style={leftIconSize} />
          <span style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>Mountains</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <img src="/desert.png" alt="Deserts" style={leftIconSize} />
          <span style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>Deserts</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <img src="/beach.png" alt="Beaches" style={leftIconSize} />
          <span style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>Beaches</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
          <img src="/city.png" alt="Cities"  style={leftIconSize} />
          <span style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>Cities</span>
        </div>
      </div>

      {/* Main Slideshow */}
      <div style={{ position: 'absolute', top: '200px', left: '50%', transform: 'translateX(-50%)', width: '70%', maxWidth: '900px', height: '450px', overflow: 'hidden', borderRadius: '15px' }}>
        {destinations.map((place, index) => (
          <div key={index} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}>
            <img src={place.src} alt={place.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />

{/* Navigation Buttons Below Slideshow */}
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
  <button
    onClick={prevImage}
    style={{
      fontSize: '24px',
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
  >
    &lt; Previous
  </button>
  <button
    onClick={nextImage}
    style={{
      fontSize: '24px',
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
  >
    Next &gt;
  </button>
</div>
  
            {/* Top-right Buttons with counts */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              zIndex: 2000,
              pointerEvents: 'auto',
            }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.6)', borderRadius: '12px', padding: '4px', background: 'rgba(0,0,0,0.4)' }}>
                  <img src="/people.png" alt="People" title="People Visited" style={topRightIconStyle} />
                  <div style={countStyle}>{fixedCounts.peopleVisited[index]}</div>
                </div>
                <div style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.6)', borderRadius: '12px', padding: '4px', background: 'rgba(0,0,0,0.4)' }}>
                  <img src="/attraction.png" alt="Attractions" title="Attractions" style={topRightIconStyle} />
                  <div style={countStyle}>{fixedCounts.attractions[index]}</div>
                </div>
                <div style={{ textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.6)', borderRadius: '12px', padding: '4px', background: 'rgba(0,0,0,0.4)' }}>
                  <img src="/itinerary.png" alt="Itinerary" title="Itinerary" style={topRightIconStyle} />
                  <div style={countStyle}>{fixedCounts.itinerary[index]}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <img src="/info.png" alt="Info" title="Info" style={{ ...topRightIconStyle, boxShadow: '0 4px 8px rgba(0,0,0,0.6)', borderRadius: '12px', background: 'rgba(0,0,0,0.4)' }} onClick={() => setShowInfo(true)} />
                <img
                  src="/heart.png"
                  alt="Like"
                  title="Like"
                  onClick={() => toggleLike(index)}
                  style={{
                    ...topRightIconStyle,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.6)',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.4)',
                    filter: liked[index]
                      ? 'invert(33%) sepia(88%) saturate(7481%) hue-rotate(343deg) brightness(93%) contrast(100%)'
                      : 'invert(1)',
                  }}
                />
              </div>
            </div>

            {/* Captions */}
            <div style={{ position: 'absolute', bottom: '100px', left: '25px', display: 'flex', alignItems: 'center', background: 'linear-gradient(90deg, rgba(180,95,46,0.85), rgba(255,185,0,0.85))', padding: '8px 20px', borderRadius: '30px', color: '#fff', fontSize: '22px', fontWeight: '600', fontFamily: '"Fredoka One", cursive' }}>
              <img src="/location.png" alt="location icon" style={{ width: '24px', height: '24px', marginRight: '10px', filter: 'invert(1)' }} />
              {place.name}
            </div>

            <div style={{ position: 'absolute', bottom: '40px', left: '25px', background: 'rgba(10,10,10,0.35)', padding: '8px 18px', borderRadius: '15px', color: '#f5f5f5', fontSize: '18px', fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', maxWidth: '80%' }}>
              {place.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
      {showInfo && (
        <div
          onClick={() => setShowInfo(false)}
          style={{
            position: 'fixed',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            maxWidth: '600px',
            backgroundColor: 'rgba(39, 37, 37, 0.8)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '20px',
            borderRadius: '15px',
            zIndex: 2000,
            overflowY: 'auto',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'rgba(20, 19, 19, 0.8)',
              padding: '20px',
              borderRadius: '15px',
              fontSize: '18px',
              lineHeight: '1.5',
              fontFamily: 'Poppins, sans-serif',
              width: '100%',
              textAlign: 'left',
              maxHeight: '75vh',
              overflowY: 'auto',
            }}
          >
            <h2 style={{ fontFamily: '"Fredoka One", cursive', marginBottom: '5px' }}></h2>
            <p>
              Japan, a captivating archipelago, offers a kaleidoscope of experiences that transcend age.From the pulsating heart of Tokyo to the tranquil zen gardens of Kyoto, it's a destination where ancient traditions and futuristic innovations seamlessly coexist. This duality makes Japan a compelling choice for every traveler, from wide-eyed children to seasoned explorers.
            </p>
            <p>
              A Cultural Tapestry: Delve into the rich tapestry of Japanese culture. Participate in a serene tea ceremony, witness the precision of a traditional calligraphy demonstration, or immerse yourself in the captivating world of geisha. Explore centuries-old temples and shrines, each whispering tales of samurai, emperors, and spiritual enlightenment. The meticulously crafted gardens, designed to evoke tranquility, are a testament to Japan's deep connection with nature.
            </p>
            <p>
              A Symphony of Seasons: Japan's distinct four seasons paint the landscape in ever-changing hues. Spring's delicate cherry blossoms, or sakura, create a breathtaking spectacle, while autumn's fiery foliage transforms mountainsides into vibrant canvases. Summers are alive with vibrant festivals, or matsuri, showcasing traditional dances and fireworks. Winters, particularly in the northern regions, offer pristine snowscapes perfect for skiing and snowboarding.
            </p>
            <p>
              A Lifestyle of Harmony: Experience the unique blend of modern efficiency and traditional etiquette that defines Japanese life. The country's renowned politeness and respect for others create a welcoming atmosphere. The efficient and punctual public transportation system makes navigating the country a breeze, allowing you to explore with ease.
            </p>
            
            <button
              onClick={() => setShowInfo(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#ff7e5f',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

{/* Navigation Arrows with Dots and Button */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px', 
  position: 'absolute',
  top: '680px', 
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
}}>

  {/* Arrows & Dots */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
    <button
      onClick={prevImage}
      style={{
        fontSize: '40px',
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      &lt;
    </button>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {destinations.map((_, index) => (
        <span 
          key={index}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: currentImage === index ? 'white' : 'rgba(255, 255, 255, 0.4)',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          }}
        />
      ))}
    </div>
    <button
      onClick={nextImage}
      style={{
        fontSize: '40px',
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      &gt;
    </button>
  </div>
</div>
<button
  onClick={() => navigate('/login')}
  style={{
    display: "inline-flex",
    position: "absolute",
    bottom: "10px",
    transform: "translateX(-50%)",  
    alignItems: "center",
    left: "50%",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "white",
    border: "2px solid",
    borderImage: "linear-gradient(to right, yellow, orange) 1",
    borderRadius: "3px",
    padding: "12px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    zIndex: 1000,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }}
    onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateX(-50%) scale(1.1)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,165,0,0.6)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateX(-50%) scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}

>
  
  <img
    src="/route.png"
    alt="Route Icon"
    style={{
      width: "24px",
      height: "24px",
      filter: "brightness(0) invert(1)", 
    }}
  />
  PLAN YOUR SMART TRIP
</button>

</div>
  );
}

export default NextPage;