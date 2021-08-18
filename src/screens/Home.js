import React from 'react';
import {Link} from 'react-router-dom'
import serviceCard from '../services'

function Home() {
  return (
    <div>
          <div className="flip-card container">
              <div className="flip-card-content">
                  <div className="flip-card-inner">
                      <div className="flip-card-front row">
                          <div className="content col-sm-12 col-lg-6">
                              <h1>We work towards empowering your <span>Bussiness</span> </h1>
                              <p>ShopKpr is one of the most efficient and largest Small-Bussiness finance & supply chain platform and emprowers millions of retailers in Bangladesh.</p>
                              <button className="btn btn-banner">Download</button>
                          </div>
                          <div className="banner-image col-sm-12 col-lg-6 text-center">
                              <img src="image/banner-image1.png" alt="" />
                          </div>
                      </div>
                      <div className="flip-card-back row">
                          <div className="content col-sm-12 col-lg-6">
                              <h1>We work towards empowering your <span>Bussiness</span> </h1>
                              <p>ShopKpr is one of the most efficient and largest Small-Bussiness finance & supply chain platform and emprowers millions of retailers in Bangladesh.</p>
                              <button className="btn btn-banner">Download</button>
                          </div>
                          <div className="banner-image col-sm-12 col-lg-6 text-center">
                              <img src="image/banner-image2.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            <div className="retailer container">
               <div className="content row">
                  <div className="content-item col-sm-12 col-lg-6">
                      <h2>Ensuring the development of commerce through technology or every retailer.</h2>
                  </div>
                  <div className="content-item2 col-sm-12 col-lg-6">
                     <div className='row'>
                          <div className="col-lg-4 col-sm-12 text-center"> <h1>3K</h1></div>
                          <div className="col-lg-4 col-sm-12 text-center"> <h1>10K</h1></div>
                          <div className="col-lg-4 col-sm-12 text-center"> <h1>5</h1></div>
                     </div>
                  </div>
               </div>
            </div>
{/* what is shopKpr  */}
            <div className="what-is-shopKpr p-5">
               <div className="row">
                  <div className="banner col-sm-12 col-lg-6">
                      <h1>What Is ShopKpr</h1>
                      <p>we offer a wide range of products in categories such as FMCG, Books, garments product and so on.</p>

                      <div className="img">
                          <img src="image/what_is_shopKpr.png" alt="" />
                      </div>
                  </div>
                  <div className="shopKpr-cards col-sm-12 col-lg-6">
                      <div className="card-container p-3">
                          <div className="card p-4 m-3">
                              <h3>Company</h3>
                              <p>We work with distributing companies who will send the products to Shopkpr.</p>
                          </div>
                          <div className="card p-4 m-3">
                              <h3>Shopkeeper</h3>
                              <p>We take the products and distribute them according to the retails needs.</p>
                          </div>
                          <div className="card p-4 m-3">
                              <h3>Local Pickup and Delivery</h3>
                              <p>We Deliver all the supplies to our retailers who use our <span><Link className='ancor'>shopKpr-cards</Link></span></p>
                          </div>
                          <div className="card p-4 m-3">
                              <h3>Retailers</h3>
                              <p>The retailor receive the product and access many other services which are offered by shopkpr</p>
                          </div>

                      </div>
                  </div>
               </div>
            </div>

            {/* vision */}
            <div className="vision container mb-5">
               <div className="row">
                  <div className=" col-sm-12 col-lg-6">
                      <div className="content">
                          <h1>Vision to Grow,Everyday.</h1>
                          <p>Our operation is currently based in two towns which enabled us to serve more than 10,000 customers.</p>
                          <br />
                          <p>We plan to expane our dalivery services in Dhaka, Chittagong, Sylhet, Rajshahi, Khulna. Our expantion is planned to target all types of big and small cities.</p>
                          <button className="btn btn-vision">Explore Now</button>
                      </div>

                  </div>
                  <div className="banner col-sm-12 col-lg-6">
                      <div className="img">
                          <img src="image/banner.png" alt="" />
                      </div>
                  </div>
               </div>
            </div>

            {/* our Services */}

            <div className="services">
              <div className="container">
                  <div className="py-5 text-center">
                      <h1>Our Services</h1>
                      <h6>We offer a wide range of products in categories such as
                          FMCG, books garments products and so on.</h6>
                  </div>
                  <div className="row">


                      {
                          serviceCard.map((ele, ind) => (
                              <div className="card col-sm-12 col-lg-4 mb-5">
                                  <i className={ele.icon}></i>
                                  <div key={ind} className="card-body">
                                      <h3>{ele.title}</h3>
                                      <p>{ele.body}</p>
                                      <a href="">Learn More</a>
                                  </div>
                              </div>
                          ))
                      }

                  </div>
              </div>
            </div>


                        {/* Retailer's insight  */}

            <div className="retaler-insight container mb-5">
                 <div className="text-center mt-5 mb-5">
                  <h1> Retailer's Insight</h1>
                  <p>Here are some feedbacks from our valuable retailers about
                      their experience working with Shopkpr</p>
                 </div>
                 <div className="row">
                        <div className="col-sm-12 col-lg-6 img">
                           <img src="image/insight.jpg" alt="" />
                        </div>
                        <div className="crd col-sm-12 col-lg-6 text-center">
                           <div className="img2">
                             <img className="rounded-circle" src="image/nur-alam.jpg" alt="" />
                           </div>
                            <h2>Nur Alom</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis ut perferendis adipisci odio harum, hic reprehenderit, at laboriosam doloremque nemo asperiores architecto modi qui soluta corrupti aperiam, voluptatem labore?</p>

                        </div>
                 </div>
            </div>

            {/* meet our team */}

            <div className="our-team container">
                    
                        <div className="title">
                            <h1>Meet Our Team</h1>
                          <p>Our leaders who made shopkpr possible.</p>
                        </div>

                    <div className="row">
                        
                    </div>
            </div>

    </div>
      
  );
}

export default Home;

