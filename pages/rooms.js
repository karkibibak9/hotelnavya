import React, { Fragment } from 'react'
import PageHeader from '../components/pageHeader';

const RoomsPage = () => {
    return (
        <Fragment>
            <PageHeader title={'Luxury Rooms'} bgclass={'page_header_bg_rooms'} >

            </PageHeader>
            <section className='rooms'>
                <div className="container">
                    <div className="heading text-center">
                        <h2 className=' text-wrap'>Our Accommodations</h2>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img" style={{ background: 'url(img/images/room-6.jpg) center center no-repeat' }}></a>
                            <div className="half left-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">King Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img" style={{ background: "url(img/images/room-1.jpg) center center no-repeat" }}></a>
                            <div className="half left-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">Suite Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img order-md-last" style={{ background: "url(img/images/room-2.jpg) center center no-repeat" }}></a>
                            <div className="half right-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">Family Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img order-md-last" style={{ background: "url(img/images/room-3.jpg) center center no-repeat" }}></a>
                            <div className="half right-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">Deluxe Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img" style={{ background: "url(img/images/room-4.jpg)" }}></a>
                            <div className="half left-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">Luxury Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="room-wrap d-md-flex ftco-animate">
                            <a href="#" className="img" style={{ background: "url(img/images/room-5.jpg) center center no-repeat" }}></a>
                            <div className="half left-arrow d-flex align-items-center">
                                <div className="text p-4 text-center">
                                    <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
                                    <p className="mb-0"><span className="price mr-1">$120.00</span> <span className="per">per night</span></p>
                                    <h3 className="mb-3"><a href="rooms.html">Superior Room</a></h3>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom px-3 py-2 rounded">View Details <span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default RoomsPage;
