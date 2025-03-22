import iconHambruger from "../assets/iconHamburger.svg";
import "../index.css";

export function NavSection() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-black py-4 fixed-top">
        <div class="container text-white">
          <a class="navbar-brand" href="#">
            <i class="fa-solid fa-tv fs-3 text-white"></i>
          </a>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <img src={iconHambruger} alt="" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ul-div">
              <div class="border d-flex p-2 rounded-3 gap-4 align-items-center justify-content-between">
                <input
                  placeholder="What did you want to watch?"
                  type="text"
                  class=""
                />
                <i class="fa-solid fa-magnifying-glass fs-3 text-white"></i>
              </div>
            </ul>
            <div class="login_register d-flex align-items-center gap-5">
              <p>Login</p>
              <p>Register</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
