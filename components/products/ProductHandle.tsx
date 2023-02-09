import {
  getProductByHandle,
  getProductResult,
} from "@lib/shopify/graphql/product/getProductByHandle";
import { useEffect, useState } from "react";

const ProductHandle = () => {
  const [prd, setPrd] = useState<getProductResult>({});

  async function fetchProduct() {
    return (await getProductByHandle(
      "titan-evo-2022-series"
    )) as getProductResult;
  }

  useEffect(() => {
    fetchProduct().then((item) => setPrd(item));
  }, []);

  if (JSON.stringify(prd) === "{}") {
    return null;
  }

  return (
    <>
      <h1 className="center">{prd.product.title}</h1>
      <div className="">
        <img src={prd.product.images[0].src} />
      </div>
    </>
  );
};

export default ProductHandle;
