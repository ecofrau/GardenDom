import React, { useEffect, useState } from 'react';

const fetchProducts = async () => {
   
    const response = await fetch('https://github.com/HaykInanc/telran_project_backend/blob/main/db.json'); 
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <a href={`/products/${product.id}`}>Get more information</a>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;