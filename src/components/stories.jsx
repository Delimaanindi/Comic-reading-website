import React, {useState} from "react";

export default function Stories() {
    const [data, setData] = useState(Comics);

    const filterstory = (titleData) => {
        const filteredData = Comics.filter((curProps) => {
          return curProps.title === titleData;
        });
  
        setData(filteredData);
    };


}