import React from 'react'
import { ItemContainer, ItemData, ItemImage, ItemPrice1, ItemTitle, ItemPrice2 } from './styles'

interface ItemProps {
    item: object
}


const Item:React.FC = () => {
  
  return (
    <ItemContainer>
        <ItemImage/>
        <ItemData>
            <ItemTitle> Trufa de morango </ItemTitle>
            <ItemPrice1> R$1,34 </ItemPrice1>
            <ItemPrice2> R$1,23 </ItemPrice2>
        </ItemData>
    </ItemContainer>
  )
}

export default Item
