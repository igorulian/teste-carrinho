import React from 'react'
import { TipContainer, TipText } from './styles'
import { FaRegLightbulb } from 'react-icons/fa'
import { IconContext } from 'react-icons'


const Tip:React.FC = () => {


    return (
        <TipContainer>
            <IconContext.Provider value={{ color: "#fff"}}>
                <FaRegLightbulb/>
            </IconContext.Provider>
            <TipText> Atualize a página para ver as variações do layout </TipText>
        </TipContainer>
    )
}


export default Tip