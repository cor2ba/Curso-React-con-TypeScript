import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      ></div>
      {products.map((product) => (
        <ProductCard
          product={product}
          className="bg-white text-white"
          key={product.id}
          onChange={onProductCountChange}
          value={ shoppingCart[product.id]?.count || 0 } 
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custon-buttons" />
        </ProductCard>
      ))}

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            style={{ width: "100px" }}
            product={product}
            className="bg-white text-white"
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons
              className="custon-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>

      {/* <ProductCard product={product1} className="bg-dark text-white">
        <ProductCard.Image className="custom-image"/>
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product2} className="bg-white text-white">
        <ProductImage className="custom-image"/>
        <ProductTitle className="text-white" />
        <ProductButtons className="custon-buttons"/>
      </ProductCard>

      <ProductCard product={product1} style={{backgroundColor:"#70D1F8"}}>
        <ProductImage style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"}}/>
        <ProductTitle style={{fontWeight:"bold"}}/>
        <ProductButtons style={{display:"flex", justifyContent:"end"}}/>
      </ProductCard> */}
    </div>
  );
};
