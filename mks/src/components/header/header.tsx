import React from "react";
import { useSelector } from "react-redux";
import ShoppingCard from "../shoppingCard/shoppingCard";
import { ContainerHeader, DivContainerText, H1, Subtitle } from "./styleHeader";

const Header = () => {
  const { openCard } = useSelector(
    (state) => ({
      openCard: state.openCard.isOpen,
    })
  );
  
  return (
    <ContainerHeader style={{minWidth: openCard ? '75vw' : '100vw'}}>
      <DivContainerText>
        <H1>MKS </H1>
        <Subtitle>Sistemas</Subtitle>
      </DivContainerText>
      {openCard ? null :  <ShoppingCard/> }
    </ContainerHeader>
  );
};

export default Header;
