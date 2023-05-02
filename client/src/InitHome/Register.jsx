import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: 
        linear-gradient(rgba(255,255,255,0.2) , rgba(255,255,255,0.4)),
        url("https://mcdn.wallpapersafari.com/medium/76/4/AqpdFO.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;  
    background-size: cover; 
`;

const Wrapper = styled.div`
    padding: 40px;
    width: 40%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 20px 15px;
    background-color: teal;
    opacity: 0.8;
    color: white;
    cursor: pointer;
`;

const LinkCustom = styled.a`
    margin: 5px 0px;
    cursor: pointer;
    font-size: 12px;
    // background: #90EE90; 
    opacity: 70%;
    text-decoration: underline;
    font-weight: bold;
    padding-top: 10px; 
`;


const Register = ({ loggedIn, setLoggedIn }) => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Your Email" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />

                    <LinkCustom>
                        <Link to='/'>Have an Account? LOGIN!</Link>
                    </LinkCustom>
                    <Agreement>By creating an account. I agree to the processing of my personal data in accordance with the PRIVACY POLICY!</Agreement>
                    <Button onClick={() => setLoggedIn(true)}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Register
