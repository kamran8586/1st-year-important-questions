import React from "react";
import { useEffect } from "react";
import Cards from "./Cards";
export default function Home() {
  const [data, setData] = React.useState([]);
  function getData() {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="">
          <h1 className="text-xl font-bold my-5">{item.Subject}</h1>
          <div className="flex lg:flex-row flex-col lg:items-center items-center lg:space-x-14 space-y-10 lg:space-y-0">
            {item.subjectData.map((e, i) => (
              <>
                {" "}
                <Cards key={i} dataObj={e} />
              </>
            ))}{" "}
          </div>
        </div>
      ))}
    </>
  );
}
