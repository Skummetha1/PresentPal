import React, { useState, useEffect } from 'react';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    useEffect(() => {
        // Fake data for products
        const fakeProducts = [
            {
                id: 1,
                title: 'Purple T-shirt',
                description: 'A stylish purple t-shirt made of 100% cotton.',
                price: 19.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 2,
                title: 'Purple Mug',
                description: 'A ceramic mug in a beautiful shade of purple.',
                price: 9.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 3,
                title: 'Purple Backpack',
                description: 'A durable backpack with multiple compartments in purple.',
                price: 49.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 4,
                title: 'Purple Headphones',
                description: 'Wireless headphones with high-quality sound in purple.',
                price: 99.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 5,
                title: 'Purple Sneakers',
                description: 'Comfortable and stylish sneakers in purple.',
                price: 79.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 6,
                title: 'Purple Water Bottle',
                description: 'A reusable water bottle with a purple finish.',
                price: 14.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 7,
                title: 'Purple Notebook',
                description: 'A hardcover notebook with lined pages in purple.',
                price: 12.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 8,
                title: 'Purple Scarf',
                description: 'A cozy scarf in a beautiful purple shade.',
                price: 19.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 9,
                title: 'Purple Sunglasses',
                description: 'Stylish sunglasses with purple frames.',
                price: 29.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 10,
                title: 'Purple Hat',
                description: 'A trendy hat in purple.',
                price: 15.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 11,
                title: 'Purple Blanket',
                description: 'A soft and warm blanket in purple.',
                price: 39.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 12,
                title: 'Purple Phone Case',
                description: 'A protective phone case in purple.',
                price: 9.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 13,
                title: 'Purple Pillow',
                description: 'A comfortable pillow with a purple cover.',
                price: 24.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 14,
                title: 'Purple Lamp',
                description: 'A stylish lamp with a purple shade.',
                price: 49.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 15,
                title: 'Purple Watch',
                description: 'A sleek wristwatch with a purple strap.',
                price: 59.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 16,
                title: 'Purple Wallet',
                description: 'A leather wallet in purple.',
                price: 19.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 17,
                title: 'Purple Pen',
                description: 'A premium pen with purple ink.',
                price: 5.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 18,
                title: 'Purple Chair',
                description: 'A comfortable office chair in purple.',
                price: 89.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 19,
                title: 'Purple Desk Organizer',
                description: 'A desk organizer with multiple compartments in purple.',
                price: 14.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 20,
                title: 'Purple Mouse Pad',
                description: 'A smooth mouse pad in purple.',
                price: 7.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 21,
                title: 'Purple Cushion',
                description: 'A decorative cushion in purple.',
                price: 12.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 22,
                title: 'Purple Candle',
                description: 'A scented candle in a purple jar.',
                price: 14.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 23,
                title: 'Purple Backpack',
                description: 'A durable backpack with multiple compartments in purple.',
                price: 39.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 24,
                title: 'Purple Keychain',
                description: 'A stylish keychain with a purple charm.',
                price: 7.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 25,
                title: 'Purple Yoga Mat',
                description: 'A high-quality yoga mat in purple.',
                price: 29.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 26,
                title: 'Purple Earrings',
                description: 'Elegant earrings with purple stones.',
                price: 19.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 27,
                title: 'Purple Bracelet',
                description: 'A fashionable bracelet with purple beads.',
                price: 14.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 28,
                title: 'Purple Ring',
                description: 'A beautiful ring with a purple gem.',
                price: 29.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 29,
                title: 'Purple Socks',
                description: 'Comfortable and stylish socks in purple.',
                price: 9.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            },
            {
                id: 30,
                title: 'Purple Tie',
                description: 'A sophisticated tie in purple.',
                price: 24.99,
                image: 'https://via.placeholder.com/150',
                url: '#'
            }
        ];

        setProducts(fakeProducts);

        // Fake categories
        const fakeCategories = ['all', 'apparel', 'accessories', 'home', 'electronics'];
        setCategories(fakeCategories);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        // Filter products based on category (for simplicity, this example assumes all products are in all categories)
        if (category === 'all') {
            setProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            setProducts(filteredProducts);
        }
    };

    const addToWishlist = (product) => {
        if (!loggedInUser) {
            alert('Please log in to add items to your wishlist.');
            return;
        }
        // Add to wishlist logic here (e.g., update user data in the database)
        console.log('Added to wishlist:', product);
    };

    const purchaseItem = (product) => {
        if (!loggedInUser) {
            alert('Please log in to purchase items.');
            return;
        }
        // Redirect to the product URL
        window.location.href = product.url;
    };

    const showDescription = (product) => {
        setSelectedProduct(product);
    };

    const closeDescription = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="category-filter">
                <label htmlFor="category">Filter by category:</label>
                <select id="category" onChange={(e) => handleCategoryChange(e.target.value)}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>${product.price}</p>
                        <div className="buttons">
                            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
                            <button onClick={() => purchaseItem(product)}>Purchase</button>
                            <button onClick={() => showDescription(product)}>Description</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeDescription}>&times;</span>
                        <h2>{selectedProduct.title}</h2>
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;
