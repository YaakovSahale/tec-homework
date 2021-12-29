import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(getData,[]);

  function getData(){
    fetch(url)
    .then((res) => res.json())
    .then((urlData) => {
      setData(urlData);
      setIsLoading(false);
      console.log(urlData);
    })
    .catch((err) => {
      setError(err);
      setIsLoading(false);
      console.error(err);
      console.dir(err);
    });
}
  


  return [data, isLoading, error];
}
