
import { useEffect, useState } from 'react'
import {useParams} from 'react-router'
const Productdetail = () => {
    const {id } = useParams()
    const[data,setData] = useState()
   

    useEffect(() =>{
    const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setData(data);
    
    console.log(data)
  }
  fetchData();
    }, [id])
    
   
  return (
   <>
   <div className="col-sm-6 col-md-4 col-lg-3">   
            <div className="card h-100 shadow-sm">
              <img
                src={data?.image}
                className="card-img-top p-3"
                alt={data?.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate">{data?.title}</h6>
                <p className="text-muted small">{data?.category}</p>

                <p className="fw-bold text-success mb-1">
                  ${data?.price}
                </p>

                <p
                  className="card-text small text-secondary"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {data?.description}
                </p>

                <button className="btn btn-primary btn-sm mt-auto">
                  View Details
                </button>
              </div>
            </div>
          </div>
   </>
  )
}

export default Productdetail
