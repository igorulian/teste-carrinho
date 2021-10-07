import styled from 'styled-components'

interface IListProps {
    length: number
}


export const Page = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #a1c4fd;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const ItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1px 3px #cdc6c6;
    align-items: center;
    @media (max-width: 500px){
        width: 100%;
        height: 100%;
    }
    @media (max-height: 700px){
        height: 100%;
    }
`

export const ItensHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    min-height: 50px;
    border-radius: 15px 15px 0px 0px;
    width: 100%;
`

export const ItensTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 23px;
    font-weight: bold;
    margin-left: 10px;
`

export const ItensList = styled.ul<IListProps>`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    max-height: 500px;
    ${props => (props.length > 3 && `overflow-y: scroll;`)}
`

export const TotalContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const TotalText = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 0px 20px;
`

export const EndButton = styled.button`
    border-style: none;
    background-color: #3b74f2;
    color: #fff;
    width: 80%;
    min-height: 50px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: bold;
    margin: 20px;
    border-radius: 17px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const FreeDelivery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    background-color: #c7ffa6;
    border-radius: 15px;
    margin: 10px 0px;
`
export const FreeDeliveryText = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #217a00;
`