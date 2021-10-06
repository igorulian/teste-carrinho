import React from 'react'
import Item from './item'
import { ItensContainer, ItensHeader, ItensList, ItensTitle, TotalContainer, Page, TotalText, EndButton } from './styles'

const App:React.FC = () => {
  
  return (
    <Page>
        <ItensContainer>
          
          <ItensHeader>
            <ItensTitle> Meu Carrinho</ItensTitle>
          </ItensHeader>

          <ItensList>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </ItensList>

          <TotalContainer>
            <TotalText> Total: </TotalText>
            <TotalText> R$9,90 </TotalText>
          </TotalContainer>

          <EndButton> Finalizar Compra </EndButton>
        </ItensContainer>
    </Page>
  )
}

export default App
