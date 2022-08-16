import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

const Carousel = styled(Slider)`
    margin-top: 5px;
    height: 46vh;

    & > button {
        opacity: 1;
        height: 100%;
        color: #557A95 !important;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before{
            font-size: 12px;
            color: gray;
        }
    }

    li.slick-active button:before{
        color: #557A95;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        left: -40px;
    }

    .slick-next{
        right: -40px;
    }
`;

const Wrap = styled.div`
    height: 44vh;
    border-radius: 4px;
    padding: 6px;
    cursor: pointer;
    position: relative;
    

    a{
        border-radius: 4px;
        box-shadow: 0 0 2px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            height: 44vh;
            width: 55vw;
            object-fit: cover;
            opacity: 0.7;       
            border: 6px solid #557A95;
        }

        &:hover {
            padding:0;
            border: 1px solid #557A95;
            transition-duration: 300ms;
        }
    }
`

  return (
    <Carousel {...settings}>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <img src="/images/one.jpg" alt="" style={{flex: "1"}}/>
                
                <div className="texts"  style={{borderRadius: "8px", backgroundColor: "#557A95"}}>
                    <p style={{color : "white", fontSize: "26px"}}>At Express Care we<span style={{color: "#E2AA2E"}}> Serve </span>you better,<span style={{color: "#E2AA2E"}}> Expose</span> you more & <span  style={{color: "#E2AA2E"}}>Expand </span>your connections.</p>
                </div>
            </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/two.jpg" alt="" style={{flex: "1"}} />
                
                <div className="texts" style={{borderRadius: "8px", backgroundColor: "#557A95"}}>
                    <p style={{color: "white"}}>Get your <span style={{color: "#E2AA2E"}}>dream job</span> and approach <span style={{color: "#E2AA2E"}}>qualified caregivers</span> on our website.</p>
                </div>
            </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/three.jpg" alt="" style={{flex: "1"}} />
                
                <div className="texts"  style={{borderRadius: "8px", backgroundColor: "#557A95"}}>
                    <p style={{color: "white"}}>Join our growing <span style={{color: "#E2AA2E"}}>community</span> where we connect you to the right <span style={{color: "#E2AA2E"}}>job</span> or help you find<span style={{color: "#E2AA2E"}}> qualified candidates </span>for your job.</p>
                </div>
            </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/four.jpg" alt=""  style={{flex: "1"}}/>
                <div className="texts"  style={{borderRadius: "8px", backgroundColor: "#557A95"}}>
                <p style={{color : "white", fontSize: "26px"}}>At Express Care we<span style={{color: "#E2AA2E"}}> Serve </span>you better,<span style={{color: "#E2AA2E"}}> Expose</span> you more & <span  style={{color: "#E2AA2E"}}>Expand </span>your connections.</p>
                </div>
            </a>
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider;