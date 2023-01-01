import React from 'react'
import Banner from '../Banner.js'
import Nav from '../Nav.js'
import Row from '../Row.js'
import { requests, baseURL } from "../request";
import "./HomeScreen.css";
function HomeScreen() {
  console.log(1);
  return (
    <div className="HomePage">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={`${baseURL}${requests.fetchNetflixOriginals}`} isLargePoster = {true}/>
      <Row title="Trending Now"   fetchURL={`${baseURL}${requests.fetchTrending}`} isLargePoster = {false}/>
      <Row title="Top Rated" fetchURL={`${baseURL}${requests.fetchTopRated}`} isLargePoster = {false}/>
      <Row title="Action Movies" fetchURL={`${baseURL}${requests.fetchActionMovies}`} isLargePoster = {false}/>
      <Row title="Comedy Movies" fetchURL={`${baseURL}${requests.fetchComedyMovies}`} isLargePoster = {false}/>
      <Row title="Horror Movies" fetchURL={`${baseURL}${requests.fetchHorrorMovies}`} isLargePoster = {false}/>
      <Row title="Animation" fetchURL={`${baseURL}${requests.fetchAnimie}`} isLargePoster = {false}/>
      <Row title="Roamance Movies" fetchURL={`${baseURL}${requests.fetchRomanceMovies}`} isLargePoster = {false}/>
      <Row title="Documentary" fetchURL={`${baseURL}${requests.fetchDocumentaries}`} isLargePoster = {false}/>
    </div>
  );
}

export default HomeScreen