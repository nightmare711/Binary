import React, {useState,useContext,useEffect} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import Data from '../../data/context'

import './Auth.css'
function Auth() {
    const [account,setAcc]= useState([]);
    useEffect(()=>
    {
        fetch('https://wokiee-acd4f.firebaseio.com//account.json')
        .then(res =>res.json())
        .then(resData => {
            console.log(resData);
            const allAcc=[];
            for(const key in resData) {
                allAcc.push(
                        {
                            id:key,
                            email:resData[key].email,
                            password:resData[key].password
                        }
                    )
                }
                setAcc(allAcc);
            
        })
    },[])
    const data = useContext(Data);
    const [isAuthEmail,setAuthEmail] = useState(true);
    const [isAuthPass, setAuthPass] = useState(true);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Login = (e) => {
        e.preventDefault();
        const isAuth1 = account.filter(acc=> {
            return acc.email===email && acc.password === password;
        })
        const checkEmail = account.filter(acc=> {
            return acc.email === email;
        })
        const checkPass= account.filter(acc => {
            return acc.password.toString() === password;
        })
        if(checkEmail.length === 0) {
            setAuthEmail(false);
            setEmail('');
        }
        if(checkPass.length ===0) {
            setAuthPass(false);
            setPassword('');
        }
        if(isAuth1.length !== 0){
            data.setLogin(true);
            data.setAcc({
                email:email,
                password:password
            })
        } 
    }
    const Email = (e) => {
        setEmail(e.target.value);
    }
    const Password = (e) => {
        setPassword(e.target.value);
    }
    const checkPass = () => {
        var temp = document.getElementById("pass");
        if(temp.type === "password") {
            document.getElementById("pass").type = "text";
        } else {
            document.getElementById("pass").type = "password";
        }
    }
    if(!data.isLogin) {
        return (
                <div className="Auth">
                    <Form className="AuthForm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={Email} value={email} type="email" placeholder="Enter email" />
                            {
                                (!isAuthEmail&&email === '')? <Alert variant='danger'>
                                                    You entered wrong email
                                                </Alert>:null
                            }
                            <p>
                                <i>We'll never share your email with anyone else.</i>
                            </p>
                            
                        </Form.Group>
        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={Password} id="pass" value={password} type="password" placeholder="Password" />
                            {
                                (!isAuthPass&& password ==='')? <Alert variant='danger'>
                                                    You entered wrong password
                                                </Alert>:null
                            }
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check onClick={checkPass} type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={Login}>
                            Login
                        </Button>
                        </Form>
                </div>
            )
        
    }else {
        return <Redirect to='/'/>
    }
}

export default Auth
