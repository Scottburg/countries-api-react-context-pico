import React, { useState, useEffect, createContext } from 'react';

interface Data {
  [key: string]: any;
}

const MyContext = createContext<{
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}>({
  data: null,
  setData: () => {},
});

function MyContextProvider(props: { children: React.ReactNode }) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
