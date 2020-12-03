import { productService } from "../product-service";
import Product, { IProduct } from "../components/Product";

type Props = {
  products: IProduct[];
};

export default function Index(props: Props) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {props.products.map((p, index) => (
          <Product product={p} key={index} />
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await productService.getProducts();
  return {
    props: {
      products,
    },
  };
}
