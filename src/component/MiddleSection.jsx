import "../index.css";
import Playicon from "../assets/playicon.webp";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Rating from "../assets/rating.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MiddleSection() {
  return (
    <>
      <main className="my-5">
        {/* Trending Desktop */}
        <div className="trending swiper_div">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Trending movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3.8}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Trending Tablet */}
        <div className="trending swiper_div_tab">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Trending movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={3.5}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Trending Mobile */}
        <div className="trending swiper_div_mobile">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Trending movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Desktop */}
        <div className="porpular swiper_div mt-5">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Popular Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3.8}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Tablet */}
        <div className="porpular swiper_div_tab mt-5">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Popular Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={3.5}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Mobile */}
        <div className="porpular swiper_div_mobile mt-5">
          <div className="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Popular Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Desktop */}
        <div className="top-rated swiper_div mt-5">
          <div className="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Top Rated Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3.8}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center gap-5">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Tablet */}
        <div className="top-rated swiper_div_tab mt-5">
          <div className="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Top Rated Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={3.5}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between gap-3">
                <div className="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Mobile */}
        <div className="top-rated swiper_div_mobile mt-5">
          <div className="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 className="fw-bold">Top Rated Movies</h3>
            <div className="d-flex aling-items-center gap-2 text-danger">
              <a href="#" className="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i className="fa-solid fa-greater-than great"></i>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="video">
                <div className="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div className="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div className="watch_list d-flex align-items-center justify-content-between">
                <div className="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p className="mb-0">7/10</p>
                </div>
                <button className="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i className="fa-solid fa-plus text-white"></i>
                  <p className="mb-0">Watchlist</p>
                </button>
              </div>
              <div className="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p className="">View Details</p>
                <i className="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}
