import React, { useContext, Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Carousel } from "react-bootstrap";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "./Watchlist.css";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <Fragment>
      <div>
        <div>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="https://cdn.collider.com/wp-content/uploads/2010/06/inception_movie_poster_banner_04.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/25/51/c9/2551c90a1302f1602621948406ba3edf.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ebayimg.com/images/g/W7sAAOSwKINdexUK/s-l400.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="container-kategori">
          <MDBContainer>
            <h1>Kategori film terfavorit</h1>
            <MDBBtn social="fb">
              <MDBIcon icon="video" className="pr-1" /> Indonesia
            </MDBBtn>
            <MDBBtn social="tw">
              <MDBIcon icon="video" className="pr-1" /> Anime
            </MDBBtn>
            <MDBBtn social="gplus">
              <MDBIcon icon="video" className="pr-1" /> Drama
            </MDBBtn>
            <MDBBtn social="li">
              <MDBIcon icon="video" className="pr-1" /> Komedi
            </MDBBtn>
            <MDBBtn social="ins">
              <MDBIcon icon="video" className="pr-1" /> Action
            </MDBBtn>
            <MDBBtn social="pin">
              <MDBIcon icon="video" className="pr-1" /> Romantis
            </MDBBtn>
            <MDBBtn social="yt">
              <MDBIcon icon="video" className="pr-1" /> Hollywood
            </MDBBtn>
            <MDBBtn social="vk">
              <MDBIcon icon="video" className="pr-1" /> internasional
            </MDBBtn>
            <MDBBtn social="so">
              <MDBIcon icon="video" className="pr-1" /> Horror
            </MDBBtn>
            <MDBBtn social="slack">
              <MDBIcon icon="video" className="pr-1" /> Sport
            </MDBBtn>
            <MDBBtn social="git">
              <MDBIcon icon="video" className="pr-1" /> Entertainment
            </MDBBtn>
            <MDBBtn social="comm">
              <MDBIcon icon="video" className="pr-1" /> Dokumenter
            </MDBBtn>
            <MDBBtn social="email">
              <MDBIcon icon="video" className="pr-1" /> Perang
            </MDBBtn>
            <MDBBtn social="dribbble">
              <MDBIcon icon="video" className="pr-1" /> Bollywood
            </MDBBtn>
          </MDBContainer>
        </div>
      </div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Daftar film saya</h1>

            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">
              Tidak ada film di daftar and! ayo cari sekarang!
            </h2>
          )}
        </div>
      </div>
    </Fragment>
  );
};
