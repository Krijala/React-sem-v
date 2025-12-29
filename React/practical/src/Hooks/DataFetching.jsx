import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const DataFetching = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
  };
    fetchData();
  }, []);

  return (
    <>
    <Link to='/'>GO BACK </Link>    
    
    <div className="container my-4">
      <h2 className="text-center mb-4">Product List</h2>

      <div className="row g-4">
        {data.map((d) => (
          <Link key={d.id} to={`/datafetching/${d.id}`}> 
          <div className="col-sm-6 col-md-4 col-lg-3" key={d.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={d.image}
                className="card-img-top p-3"
                alt={d.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-truncate">{d.title}</h6>
                <p className="text-muted small">{d.category}</p>

                <p className="fw-bold text-success mb-1">
                  ${d.price}
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
                  {d.description}
                </p>

                <button className="btn btn-primary btn-sm mt-auto">
                  View Details
                </button>
              </div>
            </div>
          </div> </Link> 
        ))}
      </div>
    </div>
    </>
  );
};

export default DataFetching;

