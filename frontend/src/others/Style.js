import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    overflow:visible;
    }
`;

export const NavContainer = styled.nav`
    width: 100vw;
    height: 50px;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        color: white;
        font-size: 16px;
        text-decoration: underline;
        padding: 0 20px;
        margin: 0 3vw;
        @media (min-width: 300px){
            font-size: calc(1rem + ((1vw - 3px) * 1.6));
        }
        @media (min-width: 800px){
            font-size: 24px;
        }
    }
    div{
        height: 50px;
        width: 5px;
        background-color: white
    }
`;

export const UserViewX = styled.div`
    background-color: pink;
    width: 100vw;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: purple;
        text-align: center;
    }
    h3{
        color: red;
    }
    form{
        background-color: pink;
        border: 5px solid purple;
        border-radius: 35px;
        margin: 25px 0;
        padding: 20px;
        input[type=text]{
            height: 40px;
            width: 200px;
            padding: 0 10px;
            border-radius: 20px 0 0 20px;
            border-color: white;
            background-color: white;
            color: purple;
            font-weight: bolder;
            &::placeholder{
                color: purple;
            }
        }
        input[type=submit]{
            height: 40px;
            padding: 0 10px;
            border-radius: 0 20px 20px 0;
            background-color: purple;
            color: white;
            font-weight: bolder;
            border-color: purple;
        }
    }
    div.map{
        width: 80vmin;
        height: 80vmin;
        @media (orientation: landscape){
            width: 50vh;
            height: 50vh;
        }
    }
`;

export const BodyX = styled.div`
    width: 100vw;
    div{
        h1{
            text-align: center;
            color: purple;
            margin: 25px 0;
        }
    }
`;

export const Card = styled.div`
    width: 100vw;
    margin: 10px;
    padding: 20px;
    background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    @media (min-width: 300px){
        font-size: calc(1rem + ((1vw - 3px) * 1.6));
        line-height: calc(1.25rem + ((1vw - 3px) * 2));
    }
    @media (min-width: 600px){
        flex-direction: row;
    }
    @media (min-width: 800px){
        font-size: 24px;
        line-height: 30px;
    }
    div{
        width: 95vw;
        max-width: 400px;
        height: 95vw;
        max-height: 400px
    }
    div.info{
        background-color: blue;
        padding: 20px;
        background-color: purple;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    div.map{
    }
`;

export const GoogleMarker = styled.div`
    img{
        width: 20px;
    }

`;