import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import { Link, useSearchParams } from 'react-router-dom';

const Materials = ({materials}) => {

  const [param, setParam] = useSearchParams();

  const openHandler = ()=>{
    param.set("modal", "addNewMaterial");
    setParam(param)
  }
  const closeHandler = ()=>{
    param.delete("modal");
    setParam(param)
  }

  return (
   <>
      <div>
        <StyledBtn>
        <Button onClick={openHandler} color="orange" text="Add new material"/>
        </StyledBtn>
        {materials.map((item, index)=>{
            return (
               <div>
               <StyleTitle>
                <li>
                    <h2>{item.title}</h2>
                </li>
                <Link key={index} to={`${item.id}/details/submited`}>
                <StyledButton>
                <Button text="Details"/>
                </StyledButton>
                </Link>
                
               </StyleTitle>
               </div>
            )
        })}

        {param.has("modal") ? (
            <Modal>
                <h2>Add new material</h2>
                <p>Lorem ipsum dolor sit amet consectetur
                   adipisicing elit. Illum, consequatur, ex
                   repellendus esse tenetur placeat eius eaque 
                   laboriosam incidunt odio at, eum dolores suscipit
                   sit alias vel molestias ad quis?
                </p>
                
                <Button onClick={closeHandler} text="Close Modal"/>
            </Modal>
        ) : null}
      </div>
   </>
  )
}

export default Materials;

const Modal = styled.div`
    background-color: #e7bea3;
    width:40vw;
    height:40vh;
    margin: 0 auto;
    position:absolute;
    top: 40%;
    left:30%;
    border-radius: 9px;
    z-index: 100;

    p{
      padding:10px 20px;
      margin-bottom: 1rem;
    }
`
const StyledBtn = styled.div`
    margin: 2rem 0 1rem 63rem;
`
const StyleTitle = styled.div`
    background-color: white;
    width: 890px;
    height:14vh;
    margin-left:25rem;
    border-radius: 11px;
    list-style: none;
   h2{
    display: flex;
    padding: 20px 0 0 30px;
   }
` 

const StyledButton = styled.div`
    margin-left:44rem;
    margin-top: -3rem;
`
