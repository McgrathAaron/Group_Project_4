import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
filter: drop-shadow(3px 3px 0.2rem #111111);

`
export const InnerCard = styled.img`
background-color: gray;
height: 14rem;
width: 10rem;
border-radius: 1rem;

`
export const MovieGrid = styled.div`
display: flex;
align-items: center;
margin: 1rem;

`

export const Recommended = styled.h2`
color: #FF6D08;
font-family: Varela Round;
`