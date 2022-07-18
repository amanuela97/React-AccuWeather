export const structureData = (data, type) => {
  const [weatherDetails, cityDetails] = data;
  const forecast = weatherDetails.DailyForecasts[0];
  const dynamicData = getDynamicData(forecast, type);
  const extraInfo = Object.entries(dynamicData);
  const half = Math.ceil(extraInfo.length / 2);
  const extraInfoFirst = extraInfo.slice(0, half);
  const extraInfoSecond = extraInfo.slice(-half);
  const generalData = {};
  generalData.Type = type;
  generalData.Icon = forecast[type].Icon;
  generalData.IconPhrase = forecast[type].IconPhrase;
  generalData.Date = forecast.Date;
  generalData.EpochDate = forecast.EpochDate;
  generalData.Temperature = forecast.Temperature;
  generalData.Link = forecast.Link;
  generalData.City = cityDetails.EnglishName;
  generalData.CountryId = cityDetails.Country.ID;
  return { generalData, extraInfoFirst, extraInfoSecond };
};

export const getDynamicData = (forecast, type) => {
  const data = {};
  if (forecast[type].HasPrecipitation) {
    data.PrecipitationType = forecast[type].PrecipitationType;
  } else {
    data.RainProbability = forecast[type].RainProbability + '%';
  }
  data.PrecipitationProbability = forecast[type].PrecipitationProbability + '%';
  data.ThunderstormProbability = forecast[type].ThunderstormProbability + '%';
  data.SnowProbability = forecast[type].SnowProbability + '%';

  data.Wind =
    forecast[type].Wind.Direction.English +
    ' ' +
    forecast[type].Wind.Speed.Value +
    ' ' +
    forecast[type].Wind.Speed.Unit;
  data.WindGust =
    forecast[type].WindGust.Direction.English +
    ' ' +
    forecast[type].WindGust.Speed.Value +
    ' ' +
    forecast[type].WindGust.Speed.Unit;
  data.Rain = forecast[type].Rain.Value + ' ' + forecast[type].Rain.Unit;
  data.Snow = forecast[type].Snow.Value + ' ' + forecast[type].Snow.Unit;

  return data;
};
