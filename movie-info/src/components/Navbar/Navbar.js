import React from 'react';
import Netflix from '../../assets/images/netflix.png';
import {BiSearchAlt} from 'react-icons/bi';
import styled from 'styled-components';


export default function Navbar(props) {
  return (
     <Navigation>
    <div className='navContainer'>
     <div className='logo'>
          <img src={Netflix} alt="" />
     </div>
     <div className='navSearch'>
          <BiSearchAlt className='iconSearch'/>
          <input type="text" placeholder='Input title, genres,people'/>
     </div>
     </div>
     </Navigation>
  )
}


const Navigation = styled.div`
     width: 100%;
     height: 80px;
     position : fixed;
     top : 0;
     transition-tining-function: ease-in;
     transition: all 1s;

     @media only screen and (max-width: 600px){
          flex-direction: column;
          height: 100px;
     }

     .navContainer {
          background-color : var(--color-background);
          display: flex;
          align-items : center;
          flex-direction: row;
          justify-content : flex-start;
          height: 100%; 

          @media only screen and (max-width: 600px){
               flex-direction: column;
          }
          .logo {
               width: 120px;
               curson: pointer;
               img {
                    width: 100px
               }
          }

          .navSearch {
               color: white;
               padding-right: 20px;
               display: flex;
               justify-content: flex-end;

               &:hover .iconSearch {
                    color: var(--color-white);
               }

               .iconSearch {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    transform: translateX(24px) translateY(10px);
                    color : #bbb;
               }

               input {
                    font-size : 14px;
                    border: 1px solid #fff;
                    color : var(--color-white);
                    outline : none;
                    width: 0;
                    padding :10px;
                    cursor : pointer;
                    opacity: 0;
                    background: var(--color-background);
                    transition: width 0.5s;

                    &:focus {
                         padding-left: 26px;
                         width: 300px;
                         cursor: text;
                         opacity: 1;
                         border-radius: 4px;
                    }
               }
          }
     }

`;