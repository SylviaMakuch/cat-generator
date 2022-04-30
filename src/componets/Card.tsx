import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ButtonComponent from './Button';

const Card = styled.div`
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: #b206d42b;
    border: 2px solid hsla(0, 0%, 100%, 0.125);
    height: 450px;  
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    margin: 20p;
    padding: 20px;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  &:hover{
    transform: translateY(-20px)
    }
`;

const Image = styled.img`
    width: 300px;
    height: 320px;
    border-radius: 8%;
`;


export default function CardComponent() {
    const [cards, setCards] = useState();

    const fetchData = async () => {
        const data = await fetch('https://api.thecatapi.com/v1/images/search');
        
        fetch("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "a1dd61b4-b654-4001-a4f4-5ec7c2386882"
            }
        })
            .then(response => {
                response.json().then(data => {
                    setCards(data[0].url);
                })
                    .catch(error => console.log(error))
            })

    }

    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        <Card>
            <Image src={cards} />
            <ButtonComponent />
        </Card>

    )
}
