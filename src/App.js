import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const arr = [
    {
      img: "./assets/images/img-1.jpg",
      id: 1,
      activeImage: true,
    },
    {
      img: "./assets/images/img-2.jpg",
      id: 2,
      activeImage: false,
    },
    {
      img: "./assets/images/img-3.jpg",
      id: 3,
      activeImage: false,
    },
    {
      img: "./assets/images/img-4.jpg",
      id: 4,
      activeImage: false,
    },
    {
      img: "./assets/images/img-5.jpg",
      id: 5,
      activeImage: false,
    },
    {
      img: "./assets/images/img-6.jpg",
      id: 6,
      activeImage: false,
    },
    {
      img: "./assets/images/img-7.jpg",
      id: 7,
      activeImage: false,
    },
    {
      img: "./assets/images/img-8.jpg",
      id: 8,
      activeImage: false,
    },
    {
      img: "./assets/images/img-9.jpg",
      id: 9,
      activeImage: false,
    },
    {
      img: "./assets/images/img-10.jpg",
      id: 10,
      activeImage: false,
    },
  ];

  const [image, setImage] = useState("");
  const [imageArr, setImageArr] = useState(arr);

  const activeImageHandler = (item) => {
    setImage(item.img);
    let temp = [...imageArr];
    temp.map((d, i) => {
      if (d.id == item.id) {
        return (d.activeImage = true);
      } else {
        return (d.activeImage = false);
      }
    });
    setImageArr(temp);
  };

  useEffect(() => {
    setImage(arr[0].img);
  }, []);

  return (
    <div className="App">
      <div>
        <img src={image} style={{ height: 400, width: 400 }} />
      </div>

      <div style={{ display: "flex" }}>
        {imageArr.map((d, i) => {
          return (
            <div
              onClick={() => activeImageHandler(d)}
              onMouseEnter={() => activeImageHandler(d)}
            >
              <img
                src={d.img}
                style={{ height: 100, width: 100, margin: 5 }}
                className={`borderColor ${d.activeImage ? "bg1" : ""}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
