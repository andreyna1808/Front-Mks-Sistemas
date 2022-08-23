import styled from "styled-components";

export const ButtonBuy = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 8px;
  border: none;
  margin-right: 88px;
  width: 90px;
  height: 45px;
  cursor: pointer;
`

export const BoxShoppinCard = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  min-width: 550px;
  min-height: 100vh;

  @media (max-width: 520px) {
    min-width: 100vw;
	}
`

export const ButtonFinish = styled.button`
  display: flex;
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  border: none;
  justify-content: center;
  align-items: center;
  background: black;
  cursor: pointer;
  height: 90px;
  width: 550px;

  @media (max-width: 520px) {
    width: 100vw;
    height: 90px;
	}
`

export const BoxTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const H1 = styled.h1`
  font-family: "Montserrat";
  color: white;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  width: 200px;
  margin: 30px;
`
export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  min-width: 450px;
`

export const BoxProductBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 25px;
  padding: 0 20px;
  background: white;
  height: 95px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`

export const Image = styled.img`
  height: 70px;
  width: 70px;
`

export const H1NomeProduct = styled.h1`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  width: 100px;
`

export const SelectQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #BFBFBF;
  border-radius: 4px;
`

export const InputQuantity = styled.input`
  width: 30px;
  border: none;
  text-align: center;
`
export const ButtonSelectQuantity = styled.button`
  width: 15px;
  border: none;
  cursor: pointer;
`

export const BoxPrice = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`

export const TitleQuantity = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 6px;
`

