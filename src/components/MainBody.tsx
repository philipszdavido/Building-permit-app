<<<<<<< HEAD
import React from "react";
import {useState, useEffect} from "react";



 type Permit = {
=======
import {useState, useEffect} from "react";


 type Product = {
>>>>>>> 5f814da98792e321a174d4530d7a4c57421e3a40
    "id": string,
    "permit_": string,
    "permit_type": string,
    "review_type": string,
    "application_start_date": string,
    "issue_date": string,
    "processing_time": string,
    "street_number": string,
    "street_direction":string,
<<<<<<< HEAD
    "street_name": string
=======
>>>>>>> 5f814da98792e321a174d4530d7a4c57421e3a40
 }

function MainBody() {
     
<<<<<<< HEAD
    const [allPermits, setAllPermits] = useState([]);
    const [permits, setPermits] = useState([]);
=======
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
>>>>>>> 5f814da98792e321a174d4530d7a4c57421e3a40
    const [{
        index,
        limit
    }, setPageOptions] = useState({
        index: 0,
        limit: 10
    });
  
    useEffect(() => {
        fetch('https://data.cityofchicago.org/resource/ydr8-5enu.json ')
        .then(res=>res.json())
        .then(json=>{
<<<<<<< HEAD
            setPermits(json.slice(index, limit))
            setAllPermits(json)})
    }, [])

    useEffect(() => {
        console.log(index, limit, allPermits.slice(index, limit), allPermits)
        setPermits(allPermits.slice(index, limit))
    }, [index])

    const viewPermitFn = (id: string) => {
        window.history.pushState({}, '', `/ViewDetails/${id}`);
    }

    console.log(permits);

    const prevFn = () => {
        setPageOptions({
            index: index - 10,
            limit: index - 20
        })
    }

    const nextFn = () => {
=======
            setProducts(json.slice(index, limit))
            setAllProducts(json)})
    }, [])

    useEffect(() => {
console.log(index, limit, allProducts.slice(index, limit), allProducts)
        setProducts(allProducts.slice(index, limit))

    }, [index])

  console.log(products);
  const viewProductFn = (id: string) => {
    window.history.pushState({}, '', `/product/${id}`);
  }

  const prevFn = () => {
      setPageOptions({
            index: index - 10,
            limit: index - 20
        })

  }

  const nextFn = () => {
>>>>>>> 5f814da98792e321a174d4530d7a4c57421e3a40
        setPageOptions({
            index: index + 10,
            limit: index + 20
        })
    }

    return (
        <div className="main__content">
            <div className="main__post">
<<<<<<< HEAD
                <div className="card">
                    <div className="table__responsiveness">
                        <table className="table__style">
                            <tr>
                                <th>Id</th>
                                <th>Permit</th>
                                <th>Permit Type</th>
                                <th>Review Type</th>
                                <th>Application Start Date</th>
                                <th>Issue date</th>
                                <th>Street Direction</th>
                                <th>Street Name</th>
                                <th>Actions</th>
                            </tr>
                            {permits.map((permit: Permit) =>(
                                <tr key={permit.id}>
                                    <td>{permit.id}</td>
                                    <td>{permit.permit_}</td>
                                    <td>{permit.permit_type}</td>
                                    <td>{permit.review_type}</td>
                                    <td>{permit.application_start_date}</td>
                                    <td>{new Date(permit.issue_date).toUTCString()}</td>
                                    <td>{permit.street_direction}</td>
                                    <td>{permit.street_name}</td>
                                    <td>
                                        <button className="view__button" onClick={() => viewPermitFn(permit.id)}>View</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>

                    <div className="pagination__container">
                        <button className="prev__btn"  onClick={prevFn}>Prev</button>
                        <button className="next__btn"  onClick={nextFn}>Next</button>
                    </div>
                </div>
=======
                <div className="card"> 
                    <table>
                        <tr>
                        <th>Permit</th>
                        <th>Permit Type</th>
                        <th>Review Type</th>
                        <th>Application Start Date</th>
                        <th>Issue date</th>
                        <th>Street Direction</th>
                        <th>Actions</th>
                        </tr>
                        {products.map((product: Product) =>(
                            <tr key={product.id}>
                                <td>{product.permit_}</td>
                                <td>{product.permit_type}</td>
                                <td>{product.review_type}</td>
                                <td>{product.application_start_date}</td>
                                <td>{new Date(product.issue_date).toUTCString()}</td>
                                <td>{product.street_direction}</td>
                                <td>
                                    <button onClick={() => viewProductFn(product.id)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div>
                        <button onClick={prevFn}>Prev</button>
                        <button onClick={nextFn}>Next</button>
                    </div>
                </div>

>>>>>>> 5f814da98792e321a174d4530d7a4c57421e3a40
            </div>
        </div>

    )
}

export default MainBody;