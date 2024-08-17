import React, { useState, useEffect } from 'react';
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch } from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind } from 'react-icons/bs';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';
import WeatherDisplay from './components/WeatherDisplay';
import { WeatherForm } from './components/WeatherForm';

const APIKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Addis Ababa');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue !== '') {
      setLocation(inputValue);
    }

    const input = document.querySelector('input');

    if (input.value === '') {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    input.value = '';
    e.preventDefault();
  };

  useEffect(() => {
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
          if (res.cod === 200) {
            setData(res);
            setLoading(false);
          } else {
            setLoading(false);
            setErrorMsg(res.message);
          }

      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.message);
      });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [errorMsg]);

  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-white" />
        </div>
      </div>
    );
  }

  let icon;

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy className="text-[#31cafb]" />;
      break;
    case 'Clear':
      icon = <IoMdSunny className="text-[#ffde33]" />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className="text-[#31cafb]" />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
    default:
      icon = <IoMdCloudy />;
      break;
  }

  return (
    <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0 ">
      <div className='w-[600px] '>
      <WeatherForm 
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        animate={animate}/>
        {loading ? (
            <div className="w-full h-full flex justify-center items-center">
                <ImSpinner8 className="text-white text-5xl animate-spin" />
            </div>
            ) : (
          <WeatherDisplay data={data} icon={icon} loading={loading} errorMsg={errorMsg} />  )}
      </div>
    </div>
  );
};

export default App;
