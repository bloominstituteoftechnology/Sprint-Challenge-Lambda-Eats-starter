import React from 'react';
import styled from 'styled-components';
import PizzaHero from '../components/images/Pizza.jpg'
import {Route, Link} from 'react-router-dom'





            const HeroContainer = styled.div`
            background-image: url(${PizzaHero});
            min-height: 30rem;
            display: flex;
            align-items: center;
            justify-content: center;
            `

            const HeroContainerInner = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center`

            const HeroMessage = styled.p`
            
            color: white;
            font-size: 2rem;
            text-shadow: 5px 5px 5px black;
            font-weight: 700;
            
            `

            const HeroButton = styled.button`
            background-color: #aa1229;
            box-shadow: 3px 3px 5px black;
            color: white;
            font-weight: 900;
            font-size: 1.1rem;
            height: 3rem;
            width: 12rem;
            margin: 0 auto;
            border-radius: .35rem;
            border: 0;

                &:hover {
                    background-color: white;
                    color: #aa1229;
                    transform: translateY(5%);
                    box-shadow: 1px 1px 3px black;
                    
                }

            `
            //end header styling

            const ComingSoon = styled.div`
            background-color: #3d3d3d;
            min-height: 60vh;`

            const ComingSoonH2 = styled.h2`
            padding-top: 10rem;
            color: white;
            margin: 0 auto;
            text-align: center;
            `





const CTA = () => {
    return (
        <>
    <HeroContainer>

      <HeroContainerInner>

        <Route exact path="/">

        <HeroMessage>
            Your favorite food, delivered while coding    
        </HeroMessage>

        <Link to="/pizza">
            <HeroButton>
                Pizza?
            </HeroButton>
        </Link>

        </Route>

      </HeroContainerInner>

    </HeroContainer>

    <Route exact path="/">

    <ComingSoon>
        
        <ComingSoonH2>Featured in VSCode Magazine</ComingSoonH2>


    </ComingSoon>



    </Route>


    </>
    

)
}

export default CTA