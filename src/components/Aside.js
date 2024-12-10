import React, { useState } from 'react';
import './Aside.css';

const Aside = () => {
  const [showWeather, setShowWeather] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [showMap, setShowMap] = useState(true);

  const toggleWeather = () => setShowWeather(prev => !prev);
  const toggleVideo = () => setShowVideo(prev => !prev);
  const toggleMap = () => setShowMap(prev => !prev);

  return (
    <aside className="aside_section">
      <h2>Extra Information</h2>
      
      <div className="weather-widget">
        <h3>Weather Forecast</h3>
        {showWeather && (
          <iframe
            title="Weather Widget"
            src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=36.712&lon=138.655&detailLat=36.717971509608496&detailLon=138.6405944824219&marker=true" 
            width="100%" 
            height="200" 
            frameBorder="0"
          ></iframe>
        )}
        <button onClick={toggleWeather}>
          {showWeather ? 'Hide Weather' : 'Show Weather'}
        </button>
      </div>
      
      <div className="youtube-video">
        <h3>Watch This Video</h3>
        {showVideo && (
          <iframe
            title="YouTube Video"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/eCtb_ylVDvU?si=DIUisYw8VnSzoGKz" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        )}
        <button onClick={toggleVideo}>
          {showVideo ? 'Hide Video' : 'Show Video'}
        </button>
      </div>

      <div className="access-map">
        <h3>Our Location</h3>
        {showMap && (
          <iframe
            title="Access Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12800.941944061124!2d138.5157803469882!3d36.66883871788153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601defaedf639119%3A0xff59ca32cae14c94!2sYokoteyama!5e0!3m2!1sen!2sau!4v1733741502877!5m2!1sen!2sau"
            width="100%" 
            height="300" 
            frameBorder="0"
            style={{ border: 0 }} 
            allowFullScreen=""
            aria-hidden="false" 
            tabIndex="0"
          ></iframe>
        )}
        <button onClick={toggleMap}>
          {showMap ? 'Hide Map' : 'Show Map'}
        </button>
      </div>
    </aside>
  );
};

export default Aside;
