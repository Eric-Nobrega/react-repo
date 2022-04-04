export default function NavBar() {
  return (
    <nav
      class="navbar navbar-dark text-white navbar-expand"
      style={{ backgroundColor: "#85144b", color: "white" }}
    >
      <div className="container">
        <div class="navbar-header" style={{ width: "100%" }}>
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item d-flex justify-content-center"
              style={{ width: "25%" }}
            >
              <a class="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li
              class="nav-item d-flex justify-content-center"
              style={{ width: "25%" }}
            >
              <a class="nav-link text-white" href="#">
                About Us
              </a>
            </li>
            <li
              class="nav-item d-flex justify-content-center"
              style={{ width: "25%" }}
            >
              <a class="nav-link text-white" href="#">
                Cart
              </a>
            </li>
            <li
              class="nav-item d-flex justify-content-center"
              style={{ width: "25%" }}
            >
              <a class="nav-link text-white" href="#">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
