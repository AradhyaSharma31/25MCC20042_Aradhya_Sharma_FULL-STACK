import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const apiUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    handleSearch();
  }, [btn])

  useEffect(() => {
    handleCategoryFilter();
  }, [category])

  useEffect(() => {
    const fetchProducts = async () => {
    try {
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          data.map(product => {
            setProducts(prevProducts => [...prevProducts, product]);
          })
      } catch (error) {
          console.error('Fetch error: ', error);
      }
    }

    fetchProducts();
  }, []);

  function handleSearch(event) {
    setProducts(prevProducts => prevProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  function handleCategoryFilter(event) {
    setProducts(prevProducts => prevProducts.filter(product => product.category.toLowerCase().includes(category.toLowerCase())));
  }

  return (
  <>
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex flex-col md:flex-row items-center gap-4 shadow-md">
        <h3 className="text-2xl font-bold flex-1">
          Product Explorer Dashboard
        </h3>

        <input
          type="text"
          value={searchTerm}
          placeholder="Search products..."
          onChange={() => setSearchTerm(event.target.value)}
          className="px-4 py-2 rounded-lg text-black border bg-white w-full md:w-80"
        />

        <button
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium"
          onClick={() => {
            setBtn((prev) => !prev);
          }}
        >
          Search
        </button>
      </nav>

      <section className="p-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white shadow-sm"
        >
          <option value="">All Categories</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </section>

      <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, key) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-52 object-contain mb-4"
              />

              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                {product.title}
              </h3>

              <p className="text-green-600 font-semibold text-xl mb-2">
                ${product.price}
              </p>

              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {product.description}
              </p>

              <p className="text-sm text-blue-600 mb-1">
                Category: {product.category}
              </p>

              <p className="text-sm text-yellow-600">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          ))}
        </div>

        <div
          id="loading-indicator"
          className="flex justify-center items-center py-8"
        ></div>

        <div id="empty-state" className="text-center py-8 text-gray-500">
          <p>No products found.</p>
        </div>
      </section>
    </div>
  </>
);
}

export default App
