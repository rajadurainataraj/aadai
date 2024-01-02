import { useEffect, useState } from "react";

function useCustom(URL) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(URL);
    const datas = await response.json();
    setData(datas);
  }
  return {
    data,
    setData,
  };
}

export default useCustom;
