import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Pagination from './Pagination';
import RestaurantData from './RestaurantData';

const Restraurants = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);

    const getProducts = ({ page }) => {
        return fetch(`http://localhost:8080/products?_page=${page}&_limit=8`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setData(res);
            });
    };

    useEffect(() => {
        getProducts({ page });
    }, [page]);

    return (
        <div>
            <Navbar/>
            <div className="container divider">
                <div className="cards">
                    {data.map((p) => (
                        <RestaurantData data={p} key={p.id} />
                    ))}
                </div>
            </div>
            <Pagination page={page} setPage={setPage} />
        </div>

    )
}

export default Restraurants;