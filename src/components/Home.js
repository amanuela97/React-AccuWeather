import { useState, useEffect } from 'react';
import Card from './Card';
import Loader from './Loader';
import { getCity, getDailyForecast, getCityFromGeoLocation } from '../utils/api';

const Home = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const cityDetails = await getCity(city);
      if (!cityDetails?.Key) {
        setError(true);
        setLoading(false);
        return null;
      }
      console.log('here');
      const weatherDetails = await getDailyForecast(cityDetails.Key);
      setData([weatherDetails, cityDetails]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
      return null;
    }
  };

  const getGeoLocation = () => {
    const success = async (position) => {
      try {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const data = await getCityFromGeoLocation(latitude, longitude);
        const location = data.city || data.countryName;
        if (!location) return;
        setLoading(true);
        const cityDetails = await getCity(location);
        if (!cityDetails?.Key) {
          setError(true);
          setLoading(false);
          return null;
        }
        const weatherDetails = await getDailyForecast(cityDetails.Key);
        setData([weatherDetails, cityDetails]);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        return null;
      }
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, () => null);
    }
  };

  useEffect(() => {
    getGeoLocation();
    () => getGeoLocation();
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-6 px-2">
      <form className="flex w-4/5 sm:w-96" onSubmit={getData}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter the name of a city"
          required={true}
          onInput={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="flex justify-center items-center w-full h-full p-6 mt-4">
        {loading ? <Loader /> : <Card error={error} data={data} />}
      </div>
    </div>
  );
};

export default Home;
