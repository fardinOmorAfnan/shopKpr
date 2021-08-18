import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="conatainer row p-5">
          <div className="col-sm-12 col-lg-5 ">
                  <div className="footer-card">
                      <img src="image/footer_logo.svg" alt="" />
                      <h5>Anytime,Arnywhere</h5>
                      <h6>For any querues, suggestions or feedback</h6>
                      <h6>Contact us on our socials</h6>
                      <h5 className="color-dip-orange">Follow us on</h5>
                      <div className="card-icon-div">
                          <i class="fab fa-twitter "></i>
                          <i class="fab fa-facebook-f "></i>
                          <i class="fab fa-instagram-square "></i>
                          <i class="fab fa-linkedin-in "></i>
                      </div>
                  </div>
          </div>
              <div className='col-6 row'>
                  <div className="stayWith col-sm-12 col-lg-4">
                      <h4 className="color-orange">Stay With</h4>
                      <h6>Home</h6>
                      <h6>About Us</h6>
                      <h6>Services</h6>
                      <h6>News</h6>
                  </div>
                  <div className="shopKpr col-sm-12 col-lg-4">
                      <h4 className="color-orange">ShopKpr</h4>
                      <h6>Terms of Services</h6>
                      <h6>Privacy policy</h6>
                      <h6>Return Policy</h6>
                      <h6>Careers</h6>
                  </div>
                  <div className="contact-us col-sm-12 col-lg-4 ">
                      
                      <h4 className="color-orange">Contact Us</h4>
                      <h6><i class="fas fa-phone color-orange"></i> Terms of Services</h6>
                      <h6><i class="fas fa-envelope color-orange"></i>  shopkpr1@gamil.com</h6>
                      <h6> <i class="fas fa-map-marker color-orange"></i> Dhaka-1212.Bangladehs <br/> East Baridhara Vatara <br/> 1181 Nurechala Main Road </h6>
                    


                  </div>
              </div>
      </div>
      <div className="rights">
          <p>&copy;2020 - 2021 Copyright ShopKpr Technologies Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
