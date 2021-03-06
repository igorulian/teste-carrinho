import React, { useEffect, useState } from 'react'
import { getRandomData } from '../../data/api'
import { IItem } from '../../data/type'
import Item from './item'
import { ItensContainer, ItensHeader, ItensList, ItensTitle, TotalContainer, Page, TotalText, EndButton, FreeDelivery, FreeDeliveryText } from './styles'
import { BsCart3 } from 'react-icons/bs'
import Tip from './tip'

const freeDeliveryPrice = 10

const App:React.FC = () => {
  const [data, setData] = useState<IItem[]>([])
  const [total, setTotal] = useState(0)
  const [isFreeDelivery, setFreeDelivery] = useState(false)

  useEffect(() => {
      const rawdata = getRandomData()

      let rawtotal = 0
      rawdata.forEach(item => {
        rawtotal += item.sellingPrice
      })

      setData(rawdata)
      setTotal(rawtotal)
      setFreeDelivery((rawtotal/100) > freeDeliveryPrice)
  },[])
  
  return (
    <Page>
        <Tip/>
        
        <ItensContainer>
          
          <ItensHeader>
            <BsCart3 size={23}/>
            <ItensTitle> Meu Carrinho</ItensTitle>
          </ItensHeader>

          <ItensList length={data.length}>
            {
              data.map(item => <Item item={item}/>)
            }
          </ItensList>

          <TotalContainer>
            <TotalText> Total: </TotalText>
            <TotalText> R$ {total/100} </TotalText>
          </TotalContainer>

          {isFreeDelivery &&
            <FreeDelivery> 
              <FreeDeliveryText> Parabéns! Você ganhou FRETE GRÁTIS!!</FreeDeliveryText>
            </FreeDelivery>
          }

          <EndButton> Finalizar Compra </EndButton>
        </ItensContainer>
    </Page>
  )
}

export default App
