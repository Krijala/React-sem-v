
import { useEffect, useState } from 'react'
import {useParams} from 'react-router'
const Loading = () => {
    const {id } = useParams()
    const[data,setData] = useState()
    const [loading, setLoading] = useState(false);
    const[error,setError] = useState(null);

    useEffect(() =>{
    const fetchData = async () => {
    setLoading(true)
    try{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if(!res.ok){
        throw new Error("Failed to fetch")
    }
    setData(data);
    }
   catch(e){
    setError(e.message)
   }
   finally{
    setLoading(false)
   }
    
  }
  fetchData();
    }, [])
    if(error) return error
    if(loading) return <div>loading....</div>
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

export default Loading
