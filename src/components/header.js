import React from 'react';
import styled from 'styled-components';
import PizzaLogo from '../components/images/pizza.svg';
import {Route, Link} from 'react-router-dom';
import '../components/fonts/fonts.css';

        const MainHeader = styled.div `
                  
         background-color: #d81833;
         box-shadow: 0 0 1rem 0 rgba(0,0,0,.9);

        `

            const HeaderLogo = styled.div`
            
            display: flex;
            align-items: space-between;
            justify-content: center;   
            
            `

            const BrandName = styled.h1`
            
            color: white;
            margin-left: 1rem;
            text-shadow: 4px 4px 0px black;
            font-family: 'Exo', sans-serif;
            
            `

            const HeaderNav = styled.div`
            `

            const HeaderInner = styled.div `
                    
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0rem 2rem;
            height: 4.75rem;

            .logo {
                height: 4rem;
                position: relative;
                margin-top: 1rem;

                &:hover {

                    /* This timing applies on the way OUT */
                    transition-timing-function: ease-in;
                  
                    /* Quick on the way out */
                    transition: .2s;
                  
                    /* Hide thing by pushing it outside by default */
                    transform: translateY(10%)rotate(35deg);
                  
                  }    
     
            }
            `

            const HomeButton = styled.button`
            min-width: 6rem;
            height: 4.75rem;
            border: 0px solid transparent;
            background-color: #aa1229;
            border-right: 1px solid #931023;
            color: white;
            font-weight: 600;
            font-size: 1.5rem;

                &:hover {
                    background-color: white;
                    color: #3d3d3d;
                }

            `

            const HelpButton = styled.button`
            min-width: 6rem;
            height: 4.75rem;
            border: 0px solid transparent;
            background-color: #aa1229;
            font-weight: 600;
            font-size: 1.5rem;
            color: white;

                &:hover {
                    background-color: white;
                    color: #3d3d3d;
                }

            `

            const OrderNow = styled.div`
            padding-right: 8rem;
            color: white;

            `

            //end header styling

const Header = () => {
    return (

        <MainHeader>
       
            <HeaderInner>

            <Link to="/" style={{ textDecoration: 'none' }}>

                <HeaderLogo>

                    <img className="logo" src= {PizzaLogo} />
                    <BrandName>Lambda Eats</BrandName>

                </HeaderLogo>
                
            </Link>

                <Route path="/pizza">

                    <OrderNow>

                <h2>Build Your Own Pizza</h2>


                </OrderNow>

                </Route>

                <HeaderNav>

                    <Link to="/" style={{ textDecoration: 'none' }}>

                        <HomeButton>Home</HomeButton>

                    </Link>

                    <HelpButton>Help</HelpButton>

                </HeaderNav>


            </HeaderInner>


            
            </MainHeader>



    )
}

export default Header