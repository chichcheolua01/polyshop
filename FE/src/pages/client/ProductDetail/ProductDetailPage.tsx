// import { useParams } from "react-router-dom";

// import Container from "../../../components/client/Container";
// import ProductInfo from "../../../components/client/Product/ProductInfo";
// import ProductList from "../../../components/client/Product/ProductList";

// import { products } from "../../../data/products";
// import ProductTab from "../../../components/client/Product/ProductTab";

// const ProductDetailPage = () => {
//   const { id } = useParams<string>();

//   const product = products.find((prod) => prod._id === id);

//   const productSimilar = products.filter(
//     (prod) => prod.category === product?.category
//   );

//   return (
//     <>
//       <Container>
//         <div className="max-w-screen-lg mx-auto">
//           <div className="flex flex-col gap-6">
//             <ProductInfo product={product} />

//             <ProductList products={productSimilar} />

//             <div className="order-first mb-10 md:order-last md:col-span-3">
//               <ProductTab description= />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default ProductDetailPage;

import { useParams } from "react-router-dom";

import Container from "../../../components/client/Container";
import ProductInfo from "../../../components/client/Product/ProductInfo";
import ProductList from "../../../components/client/Product/ProductList";

import { products } from "../../../data/products";
import ProductTab from "../../../components/client/Product/ProductTab";

const ProductDetailPage = () => {
  const { id } = useParams<string>();

  const product = products.find((prod) => prod._id === id);

  const productSimilar = products.filter(
    (prod) => prod.category._id === product?.category._id
  );

  return (
    <>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />

            <ProductList products={productSimilar} />

            <ProductTab description={product?.description} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetailPage;
