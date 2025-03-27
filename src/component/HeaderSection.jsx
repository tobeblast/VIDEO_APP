import { NavSection } from "../component/NavSection.jsx";
import "../index.css";
import Rating from "../assets/rating.svg";

export function HeaderSection() {
  return (
    <header>
      <NavSection />
      <div className="hero-div">
        <div className="overlay">
          <div className="container d-flex align-items-center justify-content-between text-white">
            <div className="movie-name-div w-50">
              <h1 className="fw-bolder mb-0">Concalve</h1>
              <div className="rating d-flex align-items-center gap-4 py-2">
                <img src={Rating} alt="rating-icon" />
                <p className="mb-0">7/10</p>
              </div>
              <div className="summary">
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
