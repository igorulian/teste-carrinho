import styled from 'styled-components'


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
    min-width: 450px;
    height: 700px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1px 3px #cdc6c6;
    align-items: center;
`

export const ItensHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    border-radius: 15px 15px 0px 0px;
    width: 100%;
`

export const ItensTitle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 23px;
    font-weight: bold;
`

export const ItensList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const TotalContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const TotalText = styled.p`    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin: 0px 25px;
`

export const EndButton = styled.button`
    border-style: none;
    background-color: #3b74f2;
    color: #fff;
    width: 80%;
    height: 80px;
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