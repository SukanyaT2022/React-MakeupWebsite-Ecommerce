import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDeail = ({onHandleCart}) => {
  const [data,setData] = useState('')
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>

        <div className="h-[400px] border-2 border-green-600 p-10">
            <img
              src={data.image}
              className="h-[50%] w-[50%] mx-auto object-contain"
            />
            <div className="textdiv h-[50%] flex flex-col justify-center items-center text-center space-y-5">
              <p>{data.title}</p>
              <p>{data.price}</p>
              <button className="bg-green-600" onClick={()=>onHandleCart(data)}>Add to cart</button>
            </div>
          </div>
    </div>
  )
}

export default ProductDeail
