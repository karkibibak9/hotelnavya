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
            <h1>Our Accommodations</h1>
          </div>
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
      <section></section>
      <section></section>
    </Fragment>
  )
}
