import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

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

const LinkCustom = styled.div`
    margin: 5px 0px;
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
    margin-top: 15px;
`;


const Register = ({ loggedIn, setLoggedIn }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const signup = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            body: JSON.stringify({
                fullName: `${firstName} ${lastName}`,
                userName: username,
                email: email,
                password: password,
            }),
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
            });
        
            const res_data = await signup.json();
            console.log("res_data", res_data);
            setLoggedIn(true);
            setIsSuccess(true);
        } catch (error) {
            console.error(`error in Register: ${error}`);
        }
    };

    if (isSuccess) {
        return <Redirect to="/" />;
    }

    return loggedIn ? (
            <Redirect to="/" />
        ) 
    : 
    (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                    <Input 
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input 
                        placeholder="Your Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input  />
                    <Agreement>By creating an account. I agree to the processing of my personal data in accordance with the PRIVACY POLICY!</Agreement>
                    <Button onClick={() => handleSubmit()}>CREATE</Button>
                </Form>
                <LinkCustom>
                    <Link to='/login'>HAVE AN ACCOUNT? LOGIN</Link>
                </LinkCustom>
            </Wrapper>
        </Container>
    )
}

export default Register
