import React from 'react'
import { IItem } from '../../../data/type'
import { ItemContainer, ItemData, ItemImage, ItemPrice1, ItemTitle, ItemPrice2 } from './styles'

interface ItemProps {
    item: IItem
}


const Item:React.FC<ItemProps> = (props:ItemProps) => {
  const {item} = props
  
  return (
    <ItemContainer>
        <ItemImage src={item.imageUrl}/>
        <ItemData>
            <ItemTitle> {item.name} </ItemTitle>
            <ItemPrice1> R${item.sellingPrice / 100} </ItemPrice1>
            <ItemPrice2> R${item.price / 100} </ItemPrice2>
        </ItemData>
    </ItemContainer>
  )
}

export default Item
