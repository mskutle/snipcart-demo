import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { toPlainText } from "../helpers";
import { client } from "../product-service";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export interface IProduct {
  _id: string;
  _type: string;
  title: any[];
  illustration: Record<string, any>;
}

type Props = {
  product: IProduct;
};

export default function Product(props: Props) {
  const { product } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BlockContent blocks={product.title} />
      <button
        className="snipcart-add-item"
        style={{ height: "fit-content", marginLeft: "10px" }}
        data-item-id={product._id}
        data-item-price="99.99"
        data-item-url="/"
        data-item-image={urlFor(product.illustration.image).url()}
        data-item-name={toPlainText(product.title)}
      >
        Add to cart
      </button>
    </div>
  );
}
