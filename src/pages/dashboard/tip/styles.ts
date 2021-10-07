import styled from 'styled-components'


export const TipContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    margin-top: 50px;
    @media (max-height: 900px){
        opacity: 0;
    }
`

export const TipText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    font-family: 'Poppins', sans-serif;
    color: #fff;
    margin-left: 5px;
`