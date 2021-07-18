import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <main className='hero_section'>
        <div className="hero-container mb-5">
          <h3>3 Star Family Friendly Hotel</h3>
          <button type="button" className="btn btn-outline-secondary btn-lg my-3">
            Book A Room
          </button>
        </div>
      </main>
      <section className='two_halves_content'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex align-items-center ">
              <div className="fist_content d-flex align-items-center  mb-3 mb-md-0">

                <div>
                  <h2 className=''>YOUR HOME AWAY FROM HOME. </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia nihil odit blanditiis repellendus eligendi, tempora consequuntur sint officiis exercitationem aut rem inventore quod, obcaecati, illum a laborum ducimus incidunt!
                  </p>
                </div>
              </div>


            </div>
            <div className="col-12 col-md-7">
              <div className="about_thumb d-flex">
                <div className="img_1">
                  <img src="./img/foods.jpg" className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />
                </div>
                <div className="img_2">
                  <img src="img/foods2.jpg" className='img-fluid img-thumbnail rounded-0 border-0 p-0' height='250' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='our_accommodations'>
        <div className="container">
          <div className="heading text-center">
            <h2 className=' text-wrap'>Our Accommodations</h2>
          </div>
          <div className="rooms_here">
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="img/rooms/1.png" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Superior Room</h3>
                  </div>
                  <a href="#" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="img/rooms/2.png" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Deluxe Room</h3>
                  </div>
                  <a href="#" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="img/rooms/3.png" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Signature Room</h3>
                  </div>
                  <a href="#" className="line-button">book now</a>
                </div>
              </div>
            </div>
            <div className="single_rooms">
              <div className="room_thumb">
                <img src="img/rooms/4.png" alt="" />
                <div className="room_heading d-flex justify-content-between align-items-center">
                  <div className="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Couple Room</h3>
                  </div>
                  <a href="#" className="line-button">book now</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* <section className='book_a_table'>
        <div className="row">
          <div className="col-12 col-md-6">

          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </section> */}
      {/* <section className='cards'>
        <div className="cards-list">

          <div className="card 1">
            <div className="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 2">
            <div className="card_image">
              <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
            </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card_image">
              <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
            </div>
            <div className="card_title">
              <p>Card Title</p>
            </div>
          </div>

          <div className="card 4">
            <div className="card_image">
              <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>

        </div>
      </section> */}
      <div className="video_area video_bg overlay">
        <div className="video_area_inner text-center">
          <span>Hotel Navya</span>
          <h3>Relax and Enjoy your <br />
            Vacation </h3>
          <a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" className="video_btn popup-video">
            <i className="fa fa-play"></i>
          </a>
        </div>
      </div>
      <section id="services">
        <div className="container">
          <div className="heading text-center">
            <h2 className=' text-wrap'>Facilities</h2>
            <h3 className="pb-4">अतिथिदेवो भव</h3>
          </div>
          <div className="row py-2">

            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-utensils text-secondary"></i>
                  <h4 className="text-capitalize">Resturant</h4>
                  <p>Delicious and Nutritious food.</p>
                </div>
              </div>
              
            </div>
            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-rss text-secondary"></i>
                  <h4 className="text-capitalize">Free WiFi</h4>
                  <p>Business center with high speed internet acess.</p>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-child text-secondary"></i>
                  <h4 className="text-capitalize">Children activities</h4>
                  <p>Kid/Family Friendly environment.</p>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-car text-secondary"></i>
                  <h4 className="text-capitalize ">Valet Parking</h4>
                  <p>Spacious area for your vehicles.</p>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-concierge-bell text-secondary"></i>
                  <h4 className="text-capitalize">Room service</h4>
                  <p>24 hours room service.</p>
                </div>
              </div>

            </div>
            <div className="col-12 col-md-4 my-2 text-center">
              <div className="service-item rounded text-center">
                <div>
                  <i className="fas fa-paw text-secondary"></i>
                  <h4 className="text-capitalize ">Pets allowed</h4>
                  <p>Dog/Pet Friendly.</p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </section>

    </Fragment>
  )
}
