/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ destinations: [], crew: [], technology: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
