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
      <main class="my-5">
        {/* Trending Desktop */}
        <div class="trending swiper_div">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Trending movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Trending Tablet */}
        <div class="trending swiper_div_tab">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Trending movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Trending Mobile */}
        <div class="trending swiper_div_mobile">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Trending movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Desktop */}
        <div class="porpular swiper_div mt-5">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Popular Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Tablet */}
        <div class="porpular swiper_div_tab mt-5">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Popular Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Popular Mobile */}
        <div class="porpular swiper_div_mobile mt-5">
          <div class="trend-text d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Popular Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Desktop */}
        <div class="top-rated swiper_div mt-5">
          <div class="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Top Rated Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center gap-5">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Tablet */}
        <div class="top-rated swiper_div_tab mt-5">
          <div class="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Top Rated Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between gap-3">
                <div class="rating d-flex align-items-center gap-2">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-1 border-0 rounded-pill-4 py-1 px-1">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Top Rated Mobile */}
        <div class="top-rated swiper_div_mobile mt-5">
          <div class="trend-text  d-flex aling-items-center justify-content-between mb-2">
            <h3 class="fw-bold">Top Rated Movies</h3>
            <div class="d-flex aling-items-center gap-2 text-danger">
              <a href="#" class="fs-5 text-decoration-none text-danger">
                See More
              </a>
              <i class="fa-solid fa-greater-than great"></i>
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
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="video">
                <div class="overlay_2 d-flex align-items-center justify-content-center">
                  <img src={Playicon} alt="play-icon" width="100px" />
                </div>
              </div>
              <div class="movie_name mt-2 mb-5 text-dark">
                <h5>Concalve</h5>
              </div>
              <div class="watch_list d-flex align-items-center justify-content-between">
                <div class="rating d-flex align-items-center gap-4">
                  <img src={Rating} alt="rating-icon" />
                  <p class="mb-0">7/10</p>
                </div>
                <button class="text-white d-flex align-items-center gap-3 border-0 rounded-pill-3 py-1 px-2">
                  <i class="fa-solid fa-plus text-white"></i>
                  <p class="mb-0">Watchlist</p>
                </button>
              </div>
              <div class="view_details d-flex align-items-center gap-3 text-secondary mt-2">
                <p class="">View Details</p>
                <i class="fa-solid fa-arrow-right mt-0"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}
