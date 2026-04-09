function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{props.name}</h3>
      <p style={{ color: "#27ae60", fontWeight: "bold" }}>{props.price}</p>
      <button className="button">Add to Cart</button>
    </div>
  );
}
export default ProductCard;