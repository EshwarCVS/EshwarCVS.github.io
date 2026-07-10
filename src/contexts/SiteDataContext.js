import {createContext, useContext, useEffect, useState} from "react";

const SiteDataContext = createContext({data: null, loading: true});

export function SiteDataProvider({children}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.PUBLIC_URL || ""}/site-data.json`;
    fetch(url)
      .then(res => (res.ok ? res.json() : null))
      .then(json => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SiteDataContext.Provider value={{data, loading}}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}
