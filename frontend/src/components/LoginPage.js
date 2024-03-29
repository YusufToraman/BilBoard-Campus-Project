import React, {useEffect, useState} from "react";
import axios from "axios";
import './assets/bootstrap/css/bootstrap.min.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import AOS from 'aos';

function LoginPage() {

    const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const check = urlParams.get('check');

    // User variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(null);
    const [checked, setChecked] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);



    useEffect(() => {
        AOS.init();

        if(token){
            verifyUser();
        }
        if(check==="not_verified"){
            setChecked("Check your email to activate your account");
        }

    }, []);

    const verifyUser = async () => {
        try {
            const {data} = await axios.get('http://127.0.0.1:8000/api/user/verify/'+ "?token="+ token);
            setVerified(data.email);

        }
        catch (error) {

            if (error.response) {
                if (error.response.status === 400) {
                    setError(`Activation Expired or Invalid Token`);
                } else {
                    setError(`Server responded with status code ${error.response.status}`);
                }

            } else if (error.request) {
                setError('No response received from the server.');
            } else {
                setError('An error occurred while setting up the request.');
            }
        }

    }


    // Submit method
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const user = {
            email: email,
            password: password
        };

        try {
            // Create the POST request
            const {data} = await axios.post('http://127.0.0.1:8000/api/user/token/', user);

            if (!data.is_verified) {
                setError('Email is not verified');
                setLoading(false);
            } else {
                localStorage.clear();
                localStorage.setItem('expiry_date', Date.now() + 3600000); //this sets the expiration time to be 1 hour
                localStorage.setItem('last_refresh', Date.now() + 10800000);
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                localStorage.setItem('authorization', `Bearer ${data['access']}`)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
                navigate("/main_page/secondhand");

            }

        } catch (error) {
            setLoading(false);
            if (error.response) {
                if (error.response.status === 401) {
                    setError(`Your email or password is wrong`);
                }
                else if(error.response.status === 400) {
                    setError(`Email should be verified`);
                }
                else {
                    setError(`Server responded with status code ${error.response.status}`);
                }

            } else if (error.request) {
                setError('No response received from the server.');
            } else {
                setError('An error occurred while setting up the request.');
            }

        }

    }

    const turnBack = () => {
        setIsForgotPassword(false);
    }

    const forgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (isForgotPassword) {
            try {
                const forgotData = {
                    email: email
                }
                const {data} = await axios.post('http://127.0.0.1:8000/api/user/forget-password/', forgotData);
                setIsForgotPassword(false);

            } catch (error) {

            }

            setLoading(false);
        } else {
            setIsForgotPassword(true)
            setLoading(false);
        }

    };

    return (
        <section className="d-flex flex-column justify-content-center align-items-center py-4 py-xl-5 position-relative"
                 style={{background: '#edf0f7', height: '90.5vh'}}>
            <div className="container" data-aos="fade-up" data-aos-duration="600">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4 d-flex justify-content-center align-items-center"
                         style={{width: '500px'}}>
                        <div className="card mb-5"
                             style={{borderStyle: 'none', borderRadius: '10px', paddingTop: '20px', width: '450px'}}>

                            {isForgotPassword ?
                                <div>
                                    <div className="d-flex flex-column align-items-center">
                                        <h2 style={{
                                            fontSize: '24px',
                                            fontFamily: 'Inter, sans-serif',
                                            color: 'rgb(0,0,0)',
                                            marginTop: '5px'
                                        }}>Enter Your Email to Reset Password</h2>
                                    </div>
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <form className="text-center" onSubmit={forgotPassword}
                                              style={{width: '300px'}}>
                                            <div className="mb-3">
                                                <input className="form-control" type="email" name="email"
                                                       placeholder="Email" style={inputStyle}
                                                       value={email}
                                                       onChange={e => setEmail(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="mb-3"> {!loading
                                                ?
                                                <button className="btn btn-primary d-block w-100" type="submit" style={{
                                                    marginBottom: '-13px',
                                                    background: '#2d3648',
                                                    borderStyle: 'none',
                                                    fontFamily: 'Inter, sans-serif',
                                                    height: '40px'
                                                }}>Send Email</button>
                                                :
                                                <button className="btn btn-primary d-block w-100" type="button" style={{
                                                    marginBottom: '-13px',
                                                    background: '#2d3648',
                                                    borderStyle: 'none',
                                                    fontFamily: 'Inter, sans-serif',
                                                    height: '40px'
                                                }} disabled>
                                                    <span className="spinner-border spinner-border-sm"
                                                          aria-hidden="true"></span>
                                                    <span role="status"> Loading...</span>
                                                </button>}
                                            </div>


                                            <a href="#" className="text-muted" onClick={turnBack}
                                               style={{textDecoration: 'underline', fontFamily: 'Inter, sans-serif'}}>Turn
                                                Back</a>
                                        </form>

                                    </div>
                                </div>

                                :
                                <>
                                    <div className="d-flex flex-column align-items-center">
                                        <h2 style={{
                                            fontFamily: 'Inter, sans-serif',
                                            color: 'rgb(0,0,0)',
                                            marginTop: '5px'
                                        }}>Login</h2>
                                    </div>

                                    <div className="card-body d-flex flex-column align-items-center">
                                        <form className="text-center" onSubmit={submit} style={{width: '300px'}}>
                                            <div className="mb-3">
                                                <input className="form-control" type="email" name="email"
                                                       placeholder="Email" style={inputStyle}
                                                       value={email}
                                                       onChange={e => setEmail(e.target.value)}
                                                       required/>
                                            </div>
                                            <div className="mb-3">
                                                <input className="form-control" type="password" name="password"
                                                       placeholder="Password" style={inputStyle}
                                                       value={password}
                                                       onChange={e => setPassword(e.target.value)}
                                                       required/>
                                            </div>
                                            <div
                                                className="d-flex flex-row justify-content-center align-items-center mb-3">
                                                <input type="checkbox" style={{
                                                    width: '18px',
                                                    height: '18px',
                                                    borderStyle: 'solid',
                                                    borderColor: 'rgb(0,0,0)'
                                                }}/>
                                                <h2 style={{
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontSize: '16px',
                                                    margin: '0px',
                                                    color: 'rgb(0,0,0)',
                                                    paddingLeft: '10px'
                                                }}>Remember me</h2>
                                            </div>

                                            <div className="mb-3"> {!loading
                                                ? <button className="btn btn-primary d-block w-100" type="submit"
                                                          style={{
                                                              marginBottom: '-13px',
                                                              background: '#2d3648',
                                                              borderStyle: 'none',
                                                              fontFamily: 'Inter, sans-serif',
                                                              height: '40px'
                                                          }}>Login</button>
                                                : <button className="btn btn-primary d-block w-100" type="button"
                                                          style={{
                                                              marginBottom: '-13px',
                                                              background: '#2d3648',
                                                              borderStyle: 'none',
                                                              fontFamily: 'Inter, sans-serif',
                                                              height: '40px'
                                                          }} disabled>
                                                    <span className="spinner-border spinner-border-sm"
                                                          aria-hidden="true"></span>
                                                    <span role="status"> Loading...</span>
                                                </button>}
                                            </div>


                                            <a href="#" className="text-muted" onClick={forgotPassword}
                                               style={{textDecoration: 'underline', fontFamily: 'Inter, sans-serif'}}>Forgot
                                                your password?</a>
                                        </form>
                                        <div className="d-flex justify-content-center align-items-center"
                                             style={{width: '300px'}}>
                                            <p style={{textAlign: 'center', fontFamily: 'Inter, sans-serif'}}>Don't have
                                                an account yet?

                                                <Link to={'/register'} style={{
                                                    fontFamily: 'Inter, sans-serif',
                                                    color: 'rgb(0,0,0)',
                                                    fontWeight: 'bold',
                                                    marginLeft: '10px'
                                                }}>Register</Link></p>
                                        </div>

                                        <div>
                                            {error && <div className="alert alert-danger" role="alert" style={{
                                                fontSize: '12px',
                                                margin: '0px',
                                                padding: '10px',
                                                textAlign: 'center',
                                                fontFamily: 'Inter, sans-serif',
                                                marginRight: '5px'
                                            }}>{error}</div>}

                                            {verified && <div className="alert alert-success" role="alert"  style={{
                                                fontSize: '12px',
                                                margin: '0px',
                                                padding: '10px',
                                                textAlign: 'center',
                                                fontFamily: 'Inter, sans-serif',
                                                marginRight: '5px'
                                            }}>{verified}</div>}

                                            {check && <div className="alert alert-info" role="alert"  style={{
                                                fontSize: '12px',
                                                margin: '0px',
                                                padding: '10px',
                                                textAlign: 'center',
                                                fontFamily: 'Inter, sans-serif',
                                                marginRight: '5px'
                                            }}>{checked}</div>}

                                        </div>

                                    </div>
                                </>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};


const inputStyle = {
    background: '#a0abc0',
    fontFamily: 'Inter, sans-serif',
    height: '45px',
    borderStyle: 'none'
};

export default LoginPage;