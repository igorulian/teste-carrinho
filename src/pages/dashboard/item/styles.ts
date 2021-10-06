import styled from 'styled-components'


export const ItemContainer = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: flex-start;
    min-height: 110px;
    margin-top: 10px;
`

export const ItemImage = styled.img`
    display: flex;
    background-color: #faa;
    height: 100%;
    min-width: 110px;
`

export const ItemData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding-left: 20px;
`

export const ItemTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
`
export const ItemPrice1 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: bold;
    color: #ccc;
    margin-top: 12px;
    margin-bottom: 6px;
    text-decoration: line-through;
    
`
export const ItemPrice2 = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: bold;
`