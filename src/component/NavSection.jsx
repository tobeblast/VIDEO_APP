import iconHambruger from "../assets/iconHamburger.svg";
import "../index.css";

export function NavSection() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black py-4 fixed-top">
        <div className="container text-white">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-tv fs-3 text-white"></i>
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src={iconHambruger} alt="" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-div">
              <div className="border d-flex p-2 rounded-3 gap-4 align-items-center justify-content-between">
                <input
                  placeholder="What did you want to watch?"
                  type="text"
                  className=""
                />
                <i className="fa-solid fa-magnifying-glass fs-3 text-white"></i>
              </div>
            </ul>
            <div className="login_register d-flex align-items-center gap-5">
              <p>Login</p>
              <p>Register</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
