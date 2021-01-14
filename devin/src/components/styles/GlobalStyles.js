import { createGlobalStyle } from "styled-components"
import "../layout.css"

export const GlobalStyle = createGlobalStyle`
/* global styling */


:focus {
    outline:none;
}

* {
    box-sizing:border-box;
    font-family:"Avenir", sans-serif;
    margin:0;
    padding: 0;
}

body {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
     display: none;
    } 
}

/* hero section */

.hero-img1 {
    width:330px;
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translate(-50%,  10%);
}

p.heroP {
    position:absolute;
    top:10%;
    left:52%;
    font-size:.8rem;
}

.here-span1, .hero-span2 {
    font-weight: bold;
    
}

.hero-span1  {
    color: green;
    font-size: 4rem;
    border-radius: 5px;
}

.hero-span2 {
    font-size:1rem;
}

.hero-span3 {
    position:relative;
    top:0.1rem;
    padding: 0 .2rem;
    font-size:.9rem;
}

.hero-left,.hero-right {
  font-size: 1.5rem;
  position:absolute;
}

.hero-left {
    left:10%;
    top:60%;
}

.hero-right {
    left:70%;
    top:60%;
}

/* resume section and my works and  slider  */


.boxes {
    margin: 0 5rem;
}


.card-wrapper {
	position: relative;
}

.card-wrapper:focus {
	outline: none;
}

.card {
    border: none;
	width: 95%;
	height: 425px;
    position: relative;
    border-radius: 5px;
	overflow: hidden;
}

.card img {
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	height: 100%;
    filter:brightness(50%);
    overflow:hidden;
}

.details {
	position: absolute;
	top: 330px;
	left: 0;
	color: #fff;
	width: 100%;
	z-index: 100;
}

.details h2 {
	margin: 30px 0;
	padding: 0;
	text-align: center;
	font-weight: bold;
	font-size: 2.5rem;
}

.custom {
	height: 360px;
}   

.custom-details {
	position: absolute;
	top: 260px;
    
}

.works {
	position: absolute;
	top: 365px;   
}

.works h5 {
    font-weight:bold;
    padding-top:.5rem;
    color:#000;
}

.works p {
    color:gray;
	padding-left:7rem;
    font-size:.9rem;
}

.carousel .slick-prev,
.carousel .slick-next {
	width: 50px;
	height: 50px;
	background-color: #fff;
}

.carousel .slick-prev:before,
.carousel .slick-next:before {
	color: #000;
	font-family: sans-serif;
    font-size:1.5rem;
}

.carousel .slick-next {
	right: -100px;
	top: 10%;
}

.carousel .slick-prev {
	position: absolute;
	left:105%;
	top: 90%;
}



`
