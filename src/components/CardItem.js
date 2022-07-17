const CardItem = ({ data }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="p-2">{data.generalData.Type}</h2>
          <p className="p-2">{new Date(data.generalData.Date).toDateString()}</p>
        </div>
        <div className="flex flex-col items-center justify-between p-2 gap-2">
          <div className="flex items-center justify-center p-2">
            <img
              src={`/weather-icons/${data.generalData.Icon}.svg`}
              alt="weather icon"
              className="h-25 w-25"
            />
            <p className="font-Oxygen-Mono text-4xl">
              {data.generalData.Temperature.Minimum.Value} -{' '}
              {data.generalData.Temperature.Maximum.Value}°
              {data.generalData.Temperature.Maximum.Unit}
            </p>
          </div>
          <p className="p-2">{data.generalData.IconPhrase}</p>
        </div>
        <div className="flex  items-center justify-around">
          <div className="flex items-center justify-center">
            <p className="p-2">{data.generalData.City}</p>
            <p className="text-xs relative bottom-2 bg-slate-400 dark:bg-orange-500 px-2 rounded-lg">
              {data.generalData.CountryId}
            </p>
          </div>
          <a
            target="_blank"
            href={data.generalData.Link}
            className="underline text-blue-500 hover:text-blue-200 visited:text-purple-500">
            More info
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <ul className="w-full divide-y-2 p-2">
          {data.extraInfoFirst.map((detail, index) => (
            <li className="flex justify-between p-2" key={index}>
              <p>{detail[0]}</p>
              <p>{detail[1]}</p>
            </li>
          ))}
        </ul>
        <ul className="w-full divide-y-2 p-2">
          {data.extraInfoSecond.map((detail, index) => (
            <li className="flex justify-between p-2" key={index}>
              <p>{detail[0]}</p>
              <p>{detail[1]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
