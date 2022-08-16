import React from 'react'
import './team.css'

const Team = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div className="wrapper" style={{}}>
            <h1 style={{color: "black", flex: "2", borderRadius: "5px", boxShadow:"0px 2px 8px #557A95", gap:"1rem", marginLeft: "2rem", marginTop: "2rem", padding: "1rem"}}>"At Express Care we<span style={{color: "#E2AA2E"}}> Serve </span>you better,<span style={{color: "#E2AA2E"}}> Expose</span> you more & <span  style={{color: "#E2AA2E"}}>Expand </span>your connections."</h1>
            <div class="row" style={{ flex: "2",marginLeft: "1rem", marginRight: "1rem", backgroundColor:"#557A95",  padding: "60px", color: "white",}}>
                <h2 style={{color: "white", fontWeight: "bolder", marginBottom:"2rem"}}>What we offer you as a caregiver. . .</h2>
                <div class="col" className="coll" >
                    <h5>CV Writing - 90%</h5>
                    <div class="progress red">
                        <div class="progress-bar" style={{width: "90%",  backgroundColor:"#2E3C5B"}}>
                        </div>
                    </div>
                    <br/>
                    <h5>Mentorship - 50%</h5>
                    <div class="progress green">
                        <div class="progress-bar" style={{width: "50%",  backgroundColor:"#E2AA2E"}}>
                        </div>
                    </div>
                    <br/>
                    <h5>Company Placement - 80%</h5>
                    <div class="progress blue">
                        <div class="progress-bar" style={{width: "80%",  backgroundColor:"#2E3C5B"}}>
                        </div>
                    </div>
                    <br/>
                    <h5>Global Internships - 65%</h5>
                    <div class="progress yellow">
                        <div class="progress-bar" style={{width: "65%",  backgroundColor:"#E2AA2E"}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row" style={{width: "80%", marginTop: "2rem",}}>
            <div class="heading-title text-center">
                <h3 class="text-uppercase">Meet Our Team </h3>
                <p class="p-top-30 half-txt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, at odio! Officiis perferendis, deleniti repudiandae suscipit dolorum nulla nisi, veritatis iure eaque blanditiis officia nesciunt rem voluptate illum enim vero? </p>
            </div>

            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="https://image.freepik.com/free-photo/man-standing-with-a-black-t-shirt_1187-1045.jpg" alt="team member" class="img-responsive" />
                    </div>
                    <div class="team-hover">
                        <div class="desk">
                            <h4>I am a fun person</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus quae numquam commodi sed aspernatur placeat inventore quis, error maxime itaque perferendis ipsam ratione consequatur? Voluptatum nostrum quidem debitis quae!</p>
                        </div>
                        <div class="s-link">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-title">
                    <h5>Martin Smith</h5>
                    <span>founder &amp; ceo</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive" />
                    </div>
                    <div class="team-hover">
                    <div class="desk">
                            <h4>I am a fun person</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus quae numquam commodi sed aspernatur placeat inventore quis, error maxime itaque perferendis ipsam ratione consequatur? Voluptatum nostrum quidem debitis quae!</p>
                        </div>
                        <div class="s-link">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-title">
                    <h5>Franklin Harbet</h5>
                    <span>HR Manager</span>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="team-member">
                    <div class="team-img">
                        <img src="https://image.freepik.com/free-photo/well-dressed-executive-with-crossed-arms_1098-3930.jpg" alt="team member" class="img-responsive" />
                    </div>
                    <div class="team-hover">
                        <div class="desk">
                            <h4>I am a fun person</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus quae numquam commodi sed aspernatur placeat inventore quis, error maxime itaque perferendis ipsam ratione consequatur? Voluptatum nostrum quidem debitis quae!</p>
                        </div>
                        <div class="s-link">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="team-title">
                    <h5>Linda Anderson</h5>
                    <span>Marketing Manager</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Team