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
    height: 38vh;

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
    height: 35vh;
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
            height: 35vh;
            width: 55vw;
            object-fit: cover;
            opacity: 0.4;
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
                </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/two.jpg" alt="" style={{flex: "1"}} />
            </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/three.jpg" alt="" style={{flex: "1"}} />
            </a>
        </Wrap>
        <Wrap>
            <a style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <img src="/images/four.jpg" alt=""  style={{flex: "1"}}/>
            </a>
        </Wrap>
    </Carousel>
  )
}

export default ImageSlider;