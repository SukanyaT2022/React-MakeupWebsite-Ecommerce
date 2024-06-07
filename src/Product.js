import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="wrapper grid lg:grid-cols-4 md:grid-cols-2  gap-2 w-[80%] mx-auto">
        {data &&
          data.map((val) => (
            <Link to = {`/detail/${val.id}`}>
                <div
                  className="h-[400px] border-2 border-green-600 p-10 "
                  key={val.id}
                >
                  <img
                    src={val.image}
                    className="h-[50%] w-[50%] mx-auto object-contain"
                  />
                  <div className="textdiv h-[50%] flex flex-col justify-center items-center text-center space-y-5">
                    <p>Title{val.title}</p>
                    <p>Price{val.price}</p>
                    
                  </div>
                </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Product;
