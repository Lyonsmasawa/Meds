import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="container"  style={{width: "100%"}}>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <h6 className=''>About</h6>
                    <p className="text-justify pe-5 pt-3">Millions of people are searching for jobs, salary information, company reviews, and interview questions. WorkLinks makes it possible for caregivers to be considered for employment. </p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 class="text-uppercase font-weight-bold"><strong>Services</strong></h6>
                    <div className="p-3">
                        <li>Get Hired</li>
                        <li>Find Caregivers</li>
                    </div>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                    <div className="p-3">
                        <p><i class="fas fa-home mr-3"></i> Westlands, Nairobi 10012, Kenya</p>
                        <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                        <p><i class="fas fa-phone mr-3"></i> + 254 567 884 444</p>
                        <p><i class="fas fa-print mr-3"></i> + 254 567 894 444</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; <span style={{color: "#ff9329"}}>2022</span> All Rights Reserved by
                    <span style={{color: "#ff9329"}}> Express Care</span>
                    </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer