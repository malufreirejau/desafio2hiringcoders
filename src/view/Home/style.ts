import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    background-color: #000;
    color: #f7df0b;
    font-size: 25px;
    align-items: center;
    
    .box {                
        display: flex;
        justify-content: space-around;
    }

    section {
        margin-top: 50px;
        height: 100vh;
        width: 100%;        
        display: flex;
        justify-content: space-around;
    }

    
    .product-content {
        display: grid;
        text-align: center;
        height: 300px;
        background: #fff;
        border-radius: 12px;
        padding: 16px;
        color: #000;
        font-size: 14px;
        align-items: center;
       
    }
/* 
    .cadastro {
        height: 100px;
        color: #f7df0b;
    }

    .content {
        display: flex;
    }

    .teste {
        color: #f7df0b;
    } */
`;