const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
export const getCity = async (city) => {
  try {
    const cityParam = city.trim().toLowerCase();
    const URI = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${cityParam}`;
    const result = await fetch(URI, requestOptions);
    const response = await result.json();
    return response[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDailyForecast = async (key) => {
  try {
    const URI = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`;
    const result = await fetch(URI, requestOptions);
    const response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCityFromGeoLocation = async (latitude, longitude) => {
  try {
    const URI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    const result = await fetch(URI, requestOptions);
    const response = await result.json();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
