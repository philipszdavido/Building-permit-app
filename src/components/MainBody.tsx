import {useState, useEffect} from "react";


 type Product = {
    "id": string,
    "permit_": string,
    "permit_type": string,
    "review_type": string,
    "application_start_date": string,
    "issue_date": string,
    "processing_time": string,
    "street_number": string,
    "street_direction":string,
 }

function MainBody() {
     
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
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
        setPageOptions({
            index: index + 10,
            limit: index + 20
        })
    }

    return (
        <div className="main__content">
            <div className="main__post">
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

            </div>
        </div>

    )
}

export default MainBody;