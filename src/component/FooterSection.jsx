import "../index.css";
export function FooterSection() {
  return (
    <>
      <footer class="bg-secondary-emphasis py-4">
        <div class="d-flex aling-items-center justify-content-center text-dark">
          <div class="">
            <div class="d-flex align-items-center justify-content-center">
              <div class="link d-flex align-items-center gap-3 mb-4">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <div class="d-flex aling-items-center justify-content-center gap-5">
              <p>Conditions of Use</p>
              <p>Privacy & Policy</p>
            </div>
            <div class="d-flex aling-items-center justify-content-center gap-3">
              <p>© 2025 WatchBuddy by</p>
              <a href="#" class="text-decoration-none">
                TobeBlast
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
