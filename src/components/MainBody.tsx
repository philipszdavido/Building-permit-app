import React from "react";
import {useState, useEffect} from "react";



 type Permit = {
    "id": string,
    "permit_": string,
    "permit_type": string,
    "review_type": string,
    "application_start_date": string,
    "issue_date": string,
    "processing_time": string,
    "street_number": string,
    "street_direction":string,
    "street_name": string
 }

function MainBody() {
     
    const [allPermits, setAllPermits] = useState([]);
    const [permits, setPermits] = useState([]);
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
        setPageOptions({
            index: index + 10,
            limit: index + 20
        })
    }

    return (
        <div className="main__content">
            <div className="main__post">
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
            </div>
        </div>

    )
}

export default MainBody;