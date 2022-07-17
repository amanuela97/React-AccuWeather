import React, { useEffect } from 'react';
import { structureData } from '../utils/helper';
import CardItem from './CardItem';

const Card = ({ error, data }) => {
  if (error) {
    return (
      <div
        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
        role="alert">
        <span className="font-medium">
          ⚠️ Failed to load weather information. maybe try a new city
        </span>
      </div>
    );
  }

  useEffect(() => {}, [data, error]);

  return (
    <>
      {data ? (
        <div className="flex flex-col justify-center items-center w-full">
          <p className="p-2 m-2 w-4/5 md:w-[600px] text-center italic">{data[0].Headline.Text}</p>
          <div className="flex flex-col lg:flex-row w-full gap-6 p-4">
            <CardItem data={structureData(data, 'Day')} />
            <CardItem data={structureData(data, 'Night')} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full">
          <p className="p-2 m-2 w-4/5 md:w-[600px] text-center italic">
            Enter a city to get weather information
          </p>
        </div>
      )}
    </>
  );
};

export default Card;
