import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ListenCardClose, ListenCardOpen } from "../../redux/reducers/openCard";
import {
  BoxFooter,
  BoxPrice,
  BoxProductBuy,
  BoxShoppinCard,
  BoxTitleIcon,
  ButtonBuy,
  ButtonFinish,
  ButtonSelectQuantity,
  H1,
  H1NomeProduct,
  Image,
  InputQuantity,
  SelectQuantity,
  TitleQuantity,
} from "./styleShoppingCard";
import ToastAnimated, { showToast } from "../../assessts/ui-lib";
import { LessQuantity, MoreQuantity, RemoveAllProducts, RemoveProductCard } from "../../redux/reducers/buyProducts";
import IStateShoppingCard from "./interface";

const ShoppingCard = () => {
  const dispatch = useDispatch();
  const { isOpenCard, buyNewProduct } = useSelector((state: IStateShoppingCard) => ({
    isOpenCard: state?.openCard?.isOpen,
    buyNewProduct: state?.buyProducts?.buyProducts,
  }));
  const [ values, setValues ] = useState([])

  const messageSuccess = () => {
    showToast({ type: "success", message: "Compra realizada com Sucesso!!" });
    dispatch(RemoveAllProducts())
  };

  const addQuantityCar = (id) => {
    dispatch(MoreQuantity(id))
  };

  const removeQuantityCar = (id) => {
    dispatch(LessQuantity(id))
  };

  const priceByProducts = () => {
    const filterProducts = values.filter((product) => product);
    return filterProducts.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price,
      0
    );
  };

  const removeProductCard = (id) => {
    dispatch(RemoveProductCard(id))
  }

  useEffect(() => {
    setValues(buyNewProduct)
  }, [buyNewProduct])

  return (
    <React.Fragment>
      <ToastAnimated />
      {isOpenCard ? (
        <BoxShoppinCard>
          <BoxTitleIcon>
            <H1>Carrinho de Compras</H1>
            <AiFillCloseCircle
              onClick={() => dispatch(ListenCardClose())}
              style={{ marginRight: "40px", cursor: "pointer" }}
              size={38}
            />
          </BoxTitleIcon>
          <div>
            {values
              .map((dataProduct) => {
                return (
                  <div key={dataProduct.id}>
                    <AiFillCloseCircle
                      onClick={() =>
                        removeProductCard(dataProduct.id)
                      }
                      style={{
                        cursor: "pointer",
                        width: "5%",
                        right: "0",
                        position: "absolute",
                        margin: "-5 20px 0 0",
                      }}
                      size={30}
                    />
                    <BoxProductBuy>
                      <Image
                        alt={`Imagem representando o produto da ${dataProduct.brand}`}
                        src={dataProduct.photo}
                      />
                      <H1NomeProduct>{dataProduct.name}</H1NomeProduct>
                      <div>
                        <TitleQuantity>Qtd:</TitleQuantity>
                        <SelectQuantity>
                          <ButtonSelectQuantity
                            onClick={() => removeQuantityCar(dataProduct.id)}
                          >
                            -
                          </ButtonSelectQuantity>
                          <InputQuantity value={dataProduct.quantity} />
                          <ButtonSelectQuantity
                            onClick={() => addQuantityCar(dataProduct.id)}
                          >
                            +
                          </ButtonSelectQuantity>
                        </SelectQuantity>
                      </div>
                      <BoxPrice>R$ {dataProduct.price}</BoxPrice>
                    </BoxProductBuy>
                  </div>
                );
              })}
          </div>
          <BoxFooter>
            <BoxTitleIcon>
              <H1>Total: </H1>
              <H1>R$ {priceByProducts()}</H1>
            </BoxTitleIcon>
            <ButtonFinish onClick={messageSuccess}>
              Finalizar Compra
            </ButtonFinish>
          </BoxFooter>
        </BoxShoppinCard>
      ) : (
        <ButtonBuy onClick={() => dispatch(ListenCardOpen())}>
          <FaShoppingCart style={{ marginRight: "10px", width: "20px" }} />
          {values.length}
        </ButtonBuy>
      )}
    </React.Fragment>
  );
};

export default ShoppingCard;
