
  import ProductCard from "./ProductCard";
  function App() {
    return (
      <div className="content-section">
        <h2>Our Latest Products</h2>
        <div className="products-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          <ProductCard 
            name="Classic T-Shirt" 
            price="$25.00" 
            image="../Photos/Classic T-Shirt.webp" 
          />
          
          <ProductCard 
            name="Cool Hoodie" 
            price="$45.00" 
            image="../Photos/Cool Hoodie.webp" 
          />
          
          <ProductCard 
            name="Running Shoes" 
            price="$60.00" 
            image="../Photos/Running Shoes.webp" 
          />
          
          <ProductCard 
            name="Smart Watch" 
            price="$120.00" 
            image="../Photos/Smart Watch.webp" 
          />

        </div>
      </div>
    );
  }

  export default App;