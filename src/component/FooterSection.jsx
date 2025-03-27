import "../index.css";
export function FooterSection() {
  return (
    <>
      <footer className="bg-secondary-emphasis py-4">
        <div className="d-flex aling-items-center justify-content-center text-dark">
          <div className="">
            <div className="d-flex align-items-center justify-content-center">
              <div className="link d-flex align-items-center gap-3 mb-4">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div className="d-flex aling-items-center justify-content-center gap-5">
              <p>Conditions of Use</p>
              <p>Privacy & Policy</p>
            </div>
            <div className="d-flex aling-items-center justify-content-center gap-3">
              <p>© 2025 WatchBuddy by</p>
              <a href="#" className="text-decoration-none">
                TobeBlast
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
