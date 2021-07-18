import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <main>

      </main>
      <section className='two_halves_content'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex align-items-center ">
              <div className="fist_content d-flex align-items-center  mb-3 mb-md-0">

                <div>
                  <h2 className=''>YOUR HOME AWAY FROM HOME. </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus aut soluta, quis aliquid autem quo aspernatur facere voluptas! Dicta laudantium ex fuga laborum voluptatem hic molestiae neque facere fugiat.
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
          <div class="rooms_here">
            <div class="single_rooms">
              <div class="room_thumb">
                <img src="img/rooms/1.png" alt="" />
                <div class="room_heading d-flex justify-content-between align-items-center">
                  <div class="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Superior Room</h3>
                  </div>
                  <a href="#" class="line-button">book now</a>
                </div>
              </div>
            </div>
            <div class="single_rooms">
              <div class="room_thumb">
                <img src="img/rooms/2.png" alt="" />
                <div class="room_heading d-flex justify-content-between align-items-center">
                  <div class="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Deluxe Room</h3>
                  </div>
                  <a href="#" class="line-button">book now</a>
                </div>
              </div>
            </div>
            <div class="single_rooms">
              <div class="room_thumb">
                <img src="img/rooms/3.png" alt="" />
                <div class="room_heading d-flex justify-content-between align-items-center">
                  <div class="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Signature Room</h3>
                  </div>
                  <a href="#" class="line-button">book now</a>
                </div>
              </div>
            </div>
            <div class="single_rooms">
              <div class="room_thumb">
                <img src="img/rooms/4.png" alt="" />
                <div class="room_heading d-flex justify-content-between align-items-center">
                  <div class="room_heading_inner">
                    <span>From $250/night</span>
                    <h3>Couple Room</h3>
                  </div>
                  <a href="#" class="line-button">book now</a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <div className="card-wrapper">
                <img src="http://bit.ly/2tMBBTd" alt="" />
                <div className="card-body">
                  <div className="product-text">
                    <h1>Harvest Vase</h1>
                    <h2>by studio and friends</h2>
                    <p>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces appear to be sliced and pulled aside, allowing room for growth. </p>
                    <div className="product-price-btn">
                      <p><span>78</span>$</p>
                      <button type="button">buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>


      </section>
      <section className='book_a_table'>
        <div className="row">
          <div className="col-12 col-md-6">

          </div>
          <div className="col-12 col-md-6">

          </div>
        </div>
      </section>
      <section className='cards'>
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
      </section>
      <section></section>
    </Fragment>
  )
}
