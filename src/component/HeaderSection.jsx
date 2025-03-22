import { NavSection } from "../component/NavSection.jsx";
import "../index.css";
import Rating from "../assets/rating.svg";

export function HeaderSection() {
  return (
    <header>
      <NavSection />
      <div class="hero-div">
        <div class="overlay">
          <div class="container d-flex align-items-center justify-content-between text-white">
            <div class="movie-name-div w-50">
              <h1 class="fw-bolder mb-0">Concalve</h1>
              <div class="rating d-flex align-items-center gap-4 py-2">
                <img src={Rating} alt="rating-icon" />
                <p class="mb-0">7/10</p>
              </div>
              <div class="summary">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam vero earum soluta maiores vel voluptatem, perferendis
                  accusamus eum cum nihil delectus qui sapiente dolorem enim
                  quibusdam exercitationem modi libero! Accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
