import React, {useEffect} from 'react';
import './assets/bootstrap/css/bootstrap.min.css'; // Import Bootstrap CSS
import './assets/css/aos.min.css';
import './assets/css/animate.min.css';
import AOS from 'aos';
import Sıla from './assets/img/sıla.png'
import Dilara from './assets/img/dilara2.png'
import Yusuf from './assets/img/yusuf.png'
import Burak from './assets/img/burak.png'
import Eren from './assets/img/eren.png'
import Secondhand from './assets/landingPage/secondhand.jpeg'
import Borrow from './assets/landingPage/borrow.jpeg'
import LostFound from './assets/landingPage/lost&found.jpeg'
import Donation from './assets/landingPage/donation.jpeg'
import Complaint from './assets/landingPage/compliant.jpeg'

import { NavLink } from 'react-router-dom';


const WelcomeSection = () => (


    <section className="py-4 py-xl-5" style={{ background: '#edf0f7'}}>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-md-10 col-xl-8 text-center d-flex align-items-center mx-auto" data-aos="zoom-in-down" data-aos-duration="700">
                    <div>
                        <h2 className="text-uppercase fw-semibold mb-3" style={{ fontFamily: 'Inter' }}>
                            <strong>WELCOME TO BILBOARD</strong>
                        </h2>
                        <p className="mb-4" style={{ fontFamily: 'Inter' }}>
                            A place where Bilkent University members can buy or sell secondhand goods, borrow or donate stuff,
                            post about the lost items they found, and write their complaints.
                        </p>
                        {/** should we remove these?? */}
                        <NavLink to={'/login'} className="btn btn-primary fs-6 fw-semibold me-2 py-2 px-4" role="button" style={{ background: '#2d3648', borderWidth: '2px', borderColor: '#2d3648' }} href="product_page.html">Login</NavLink>
                        <NavLink to={"/register"} className="btn btn-outline-primary fs-6 fw-semibold py-2 px-4" role="button" style={{ borderWidth: '2px', borderColor: '#2d3648', color: '#2d3648', background: '#ffffff' }} href="product_add_2.html">Register</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ServicesSection = () => (
    <section className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '45px 0 40px', background: '#2d3648' }}>
        <div className="row mb-5" style={{ width: '100%' }}>
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2 style={{ color: '#eef0f7' }}>About our services</h2>
                <p className="w-lg-50" style={{ color: '#eef0f7' }}>BilBoard is a web application created only for Bilkent members.</p>
            </div>
        </div>
        <div className="row gy-4 row-cols-2 row-cols-md-4 d-flex justify-content-center" style={{ padding: '0', width: '100%' }}  data-aos="fade-up" data-aos-duration="700">
            {/* You can create another component for the individual card or simply map through a data array if they have similar structure */}
            {/*{[...Array(4)].map((_, index) => (
                <div className="col" style={{ maxWidth: '200px' }} key={index}>
                    <div className="card border-0 shadow-none">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0" style={{ background: '#A0ABC0' }}>
                            index
                        </div>
                    </div>
                </div>
            ))}*/}

            <div
                className="col d-sm-flex justify-content-center align-items-center justify-content-sm-end justify-content-md-center
                        justify-content-lg-center justify-content-xl-center justify-content-xxl-center"
                        style={{padding: '0px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '200px',}}>
                <div className="card" style={{ borderRadius: '10px', background: '#A0ABC0', maxWidth: '200px', height: '190px' }}>
                    <div className="card-body" style={{ padding: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="d-block" src={Secondhand} style={{ borderRadius:'8px', width: '100%', height: '100%', objectFit: 'cover' }}></img>
                    </div>
                    <h1 style={{marginTop:'5px', fontFamily:'Inter, sans-serif', fontSize:'16px'}}>Second-hand</h1>
                </div>

            </div>

            <div
                className="col d-sm-flex justify-content-center align-items-center justify-content-sm-end justify-content-md-center
                        justify-content-lg-center justify-content-xl-center justify-content-xxl-center"
                style={{padding: '0px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '200px',}}>
                <div className="card" style={{ borderRadius: '10px', background: '#A0ABC0', maxWidth: '200px', height: '190px' }}>
                    <div className="card-body" style={{ padding: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="d-block" src={Borrow} style={{ borderRadius:'8px', width: '100%', height: '100%', objectFit: 'cover' }}></img>
                    </div>
                    <h1 style={{marginTop:'5px', fontFamily:'Inter, sans-serif', fontSize:'16px'}}>Borrow</h1>
                </div>

            </div>


            <div
                className="col d-sm-flex justify-content-center align-items-center justify-content-sm-end justify-content-md-center
                        justify-content-lg-center justify-content-xl-center justify-content-xxl-center"
                style={{padding: '0px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '200px',}}>
                <div className="card" style={{ borderRadius: '10px', background: '#A0ABC0', maxWidth: '200px', height: '190px' }}>
                    <div className="card-body" style={{ padding: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="d-block" src={Donation} style={{ borderRadius:'8px', width: '100%', height: '100%', objectFit: 'cover' }}></img>
                    </div>
                    <h1 style={{marginTop:'5px', fontFamily:'Inter, sans-serif', fontSize:'16px'}}>Donation</h1>
                </div>

            </div>
            <div
                className="col d-sm-flex justify-content-center align-items-center justify-content-sm-end justify-content-md-center
                        justify-content-lg-center justify-content-xl-center justify-content-xxl-center"
                style={{padding: '0px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '200px',}}>
                <div className="card" style={{ borderRadius: '10px', background: '#A0ABC0', maxWidth: '200px', height: '190px' }}>
                    <div className="card-body" style={{ padding: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="d-block" src={LostFound} style={{ borderRadius:'8px', width: '100%', height: '100%', objectFit: 'cover' }}></img>
                    </div>
                    <h1 style={{marginTop:'5px', fontFamily:'Inter, sans-serif', fontSize:'16px'}}>Lost & Found</h1>
                </div>

            </div>

            <div
                className="col d-sm-flex justify-content-center align-items-center justify-content-sm-end justify-content-md-center
                        justify-content-lg-center justify-content-xl-center justify-content-xxl-center"
                style={{padding: '0px', paddingLeft: '20px', paddingRight: '20px', maxWidth: '200px',}}>
                <div className="card" style={{ borderRadius: '10px', background: '#A0ABC0', maxWidth: '200px', height: '190px' }}>
                    <div className="card-body" style={{ padding: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="d-block" src={Complaint} style={{ borderRadius:'8px', width: '100%', height: '100%', objectFit: 'cover' }}></img>
                    </div>
                    <h1 style={{marginTop:'5px', fontFamily:'Inter, sans-serif', fontSize:'16px'}}>Complaint</h1>
                </div>

            </div>

        </div>
    </section>
);

const WhyUseSection = () => (
    <section className="py-4 py-xl-5" style={{ background: '#717D96' }}>
        <div className="container h-100">
            <div className="row h-100" style={{ padding: '25px 0' }}>
                <div className="col-md-10 col-xl-8 text-center d-flex justify-content-center align-items-center mx-auto" data-aos="zoom-in-up" data-aos-duration="700">
                    <div style={{ borderColor: '#eef0f7' }}>
                        <h2 className="text-uppercase fw-bold mb-3" style={{ fontFamily: 'Inter', color: '#eef0f7' }}>WHY SHOULD YOU USE BILBOARD?</h2>
                        <p className="mb-4" style={{ fontFamily: 'Inter', color: '#eef0f7' }}>
                            This application was made especially for solving a couple of similar problems. As you might have noticed,
                            there is no official media for Bilkent students to exchange stuff or write their complaints. Students use
                            other social media platforms for these purposes. With BilBoard, we created a secure place for those exchanges
                            and added a complaint system so the students' complaints could be heard. We believe BilBoard will benefit most
                            of the Bilkent members.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Sıla",
            image: Sıla,
            linkedin: "https://www.linkedin.com/in/s%C4%B1la-%C3%B6zel-0b9625242/"
        },
        {
            name: "Dilara",
            image: Dilara,
            linkedin: "https://www.linkedin.com/in/dilara-mand%C4%B1rac%C4%B1-1bb8b8207/"
        },
        {
            name: "Yusuf",
            image: Yusuf,
            linkedin: "https://www.linkedin.com/in/yusuf-toraman-582216252/"
        },
        {
            name: "Burak",
            image: Burak,
            linkedin: "https://www.linkedin.com/in/mburakdemirel/"
        },
        {
            name: "Eren",
            image: Eren,
            linkedin: "https://www.linkedin.com/in/erenarim/"
        }
    ];

    return (
        <section style={{ background: '#2d3648', paddingBottom: '30px' }}>
            <div className="container py-4 py-xl-5">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 data-aos="zoom-in-up" style={{ color: '#ffffff', fontFamily: 'Inter' }}>Team</h2>
                    </div>
                </div>
                <div className="row gy-4 row-cols-2 row-cols-md-4 justify-content-center" data-aos="zoom-in-up" data-aos-duration="700">
                    {teamMembers.map(member => (
                        <div key={member.name} className="col" style={{ maxWidth: '200px' }}>
                            <div className="card border-0 shadow-none">
                                <div className="card-body text-center d-flex flex-column align-items-center p-0" style={{ background: '#2d3648' }}>
                                    <a href={member.linkedin} target='_blank'>
                                        <img className="rounded-circle mb-3 fit-cover" data-bss-hover-animate="pulse" width="130" height="130" src={member.image} alt={`Team Member ${member.name}`} style={{ width: '160px', height: '160px' }} />
                                    </a>
                                    <h5 className="fs-5 fw-light text-white card-title mb-0" style={{ fontFamily: 'Inter' }}>{member.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




function LandingPage() {
    useEffect(() => {
        AOS.init();
    }, []);


    return (

        <div>

        <WelcomeSection/>
        <ServicesSection/>
        <WhyUseSection/>
        <TeamSection/>

        </div>
    );
};

export default LandingPage;
