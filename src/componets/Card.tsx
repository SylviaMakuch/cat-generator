import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';

const Card = styled.div`
    backdrop-filter: blur(25px) saturate(200%);
    -webkit-backdrop-filter: blur(25px) saturate(200%);
    background-color: #b206d42b;
    border: 2px solid hsla(0, 0%, 100%, 0.125);
    height: 450px;  
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    margin: 20px;
    padding: 20px;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  &:hover{
    transform: translateY(-20px)
    }
    @media (max-width: 740px) {
        height: 350px;
    }
`;

const Image = styled.img`
    width: 300px;
    height: 320px;
    border-radius: 8%;
    @media (max-height: 740px) {
    width: 230px;
    height: 200px;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
   &:hover {
    background-position: right center; /* change the direction of the change here */
    background-color: rgba(255,255,255,0.2);
}
@media (max-height: 740px) {
    padding: 18px 32px;
  }
`;

export default function CardComponent() {
    const [cards, setCards] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState();

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
                    setIsLoading(true);
                })
                    .catch(error => setIsError(error))
                    .finally(() => setIsLoading(true));
            })

    }

    useEffect(() => {
        fetchData();
    }, [])

    if (isError) {
        return <div>Error: {isError}</div>;
    }
    return (
        <Card>
            {isLoading ? (<Image src={cards} />) : (<Preloader />)}
            <Button onClick={(fetchData)}>
                New Kitty
            </Button>
        </Card>

    )
}