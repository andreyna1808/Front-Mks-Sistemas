import styled from "styled-components";

export const ReciveShoppingCard = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
`

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  align-items: center;  
  margin: 100px auto;
  padding: 0 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 800px;
	}
  @media (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
	}
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    max-width: 200px;
    margin: 100px 100px;
    padding: 0;
	}
`

export const BoxProduct = styled.div`
  max-width: 220px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Image = styled.img`
  height: 220px;
  width: 220px;
`

export const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleProducts = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  max-width: 110px;
`

export const BoxPrice = styled.p`
  width: 90px;
  height: 30px;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  background: #373737;
  color: #FFFFFF;
  padding: 7px 5px;
  border-radius: 5px;
`
export const Description = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2C2C2C;
`

export const BuyBuntton = styled.button`
  width: 100%;
  height: 30px;
  background: #0F52BA;
  border-radius: 0px 0px 8px 8px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border: none;
  cursor: pointer;
`