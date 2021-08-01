import React, { Fragment } from 'react'
import PageHeader from '../components/pageHeader';

const About = () => {
    return (
        <Fragment>
            <PageHeader title={'About Us'} />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Welcome to Harbor Lights Hotel</span>
                            <h3 className="mb-4 mt-2">You'll Never Want To Leave</h3>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md pr-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fas fa-concierge-bell "></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Friendly Service</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services active py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fas fa-coffee"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Get Breakfast</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-sel Searchf-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fas fa-car"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Transfer Services</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md px-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fas fa-spa"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Suits &amp; SPA</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md pl-md-1 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fas fa-bed"></span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading mb-3">Cozy Rooms</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;
