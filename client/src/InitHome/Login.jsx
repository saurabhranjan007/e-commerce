import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: 
        linear-gradient(rgba(255,255,255,0.4) , rgba(255,255,255,0.4)),
        url("https://images.wallpaperscraft.com/image/single/cat_muzzle_profile_black_background_118788_1600x900.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;  
    ${'' /* margin-top: 15px;   */}
    background-size: cover;
    overflow: hidden;
`;

const Wrapper = styled.div`
    padding: 40px;
    width: 25%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 45%;
    border: none;
    padding: 20px 15px;
    background-color: teal;
    opacity: 0.8;
    color: white;
    cursor: pointer;
    margin: 5px 0px 10px 0px;
`;

const LinkCustom = styled.a`
    margin: 5px 0px;
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
`;


const Login = ({ loggedIn, setLoggedIn }) => {

    const [login, setLogin] = useState(false)

    // const navigate = useNavigate();
    const handleSubmit = async() => {
        setLogin(true)
        setLoggedIn(true)
        // navigate("/");
    }
  
    return (
        <div>
            {
                login === false ? 
                    (
                        <Container>
                            <Wrapper>
                                <Title>LOG IN</Title>
                                <Form>
                                    <Input placeholder="Username" />
                                    <Input placeholder="Password" />
                                    <Button>
                                        <Link onClick={() => {handleSubmit()}}>LOGIN</Link>
                                    </Button>
                                    <LinkCustom>
                                        <Link to='/signup'>CREATE A NEW ACCOUNT</Link>
                                    </LinkCustom>
                                </Form>
                            </Wrapper>
                        </Container>
                    ) : <Redirect to='/' />
            }
        </div>
  )
}

export default Login