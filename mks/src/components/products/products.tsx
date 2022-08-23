/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { GetProducts } from "../../redux/reducers/products";
import "react-loading-skeleton/dist/skeleton.css";
import {
  BoxProduct,
  BoxPrice,
  BuyBuntton,
  ContainerProducts,
  Description,
  Image,
  NamePrice,
  TitleProducts,
  ReciveShoppingCard,
} from "./styleProducts";
import ShoppingCard from "../shoppingCard/shoppingCard";
import Header from "../header";
import Footer from "../footer";
import { AddProductCard } from "../../redux/reducers/buyProducts";
import { Skeleton } from "@mui/material";
import IStateProducts from "./interface";

const Products = () => {
  const dispatch = useDispatch();
  const { products, openCard, buyNewProduct } = useSelector((state: IStateProducts) => ({
    products: state?.products?.products?.products,
    openCard: state?.openCard?.isOpen,
    buyNewProduct: state?.buyProducts?.buyProducts,
  }));

  const buyProduct = (dataProducts) => {
    const filter = buyNewProduct.filter((data) => data.id === dataProducts.id);

    if (filter.length < 1) {
      return dispatch(AddProductCard(dataProducts));
    }
  };

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  return (
    <ReciveShoppingCard>
      <div>
        <Header />
        <ContainerProducts
          style={{
            gridTemplateColumns: openCard ? "1fr 1fr 1fr" : null,
          }}
        >
          {products?.length ? (
            products?.map((dataProducts) => {
              return (
                <BoxProduct key={dataProducts.id}>
                  <Image
                    alt={`Imagem representando o produto da ${dataProducts.brand}`}
                    src={dataProducts.photo}
                  />
                  <NamePrice>
                    <TitleProducts>{dataProducts.name}</TitleProducts>
                    <BoxPrice>R$ {dataProducts.price}</BoxPrice>
                  </NamePrice>

                  <Description>{dataProducts.description}</Description>
                  <BuyBuntton onClick={() => buyProduct(dataProducts)}>
                    <FaShoppingBag
                      color="white"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    Comprar
                  </BuyBuntton>
                </BoxProduct>
              );
            })
          ) : (
            <Skeleton variant="rectangular" width={1200} height={600} />
          )}
        </ContainerProducts>
        <Footer />
      </div>
      {openCard && <ShoppingCard />}
    </ReciveShoppingCard>
  );
};

export default Products;
