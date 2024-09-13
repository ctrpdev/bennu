import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import s from "./style.module.css";

export function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg p-5 fixed-top ${s.blurcustom} container-fluid`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand col-3" href="#us">
          <Image src={logo} className={`${s.logocustom}`} alt="logo de bennu" />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center col"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav gap-5">
            <Link
              className={`nav-link fs-5 fw-semibold ${s.textcustom}`}
              href="#us"
            >
              Nosotros
            </Link>
            <Link
              className={`nav-link fs-5 fw-semibold ${s.textcustom}`}
              href="#services"
            >
              Servicios
            </Link>
            <Link
              className={`nav-link fs-5 fw-semibold ${s.textcustom}`}
              href="#partners"
            >
              Partners
            </Link>
            <Link
              className={`nav-link fs-5 fw-semibold ${s.textcustom}`}
              href="#experiences"
            >
              Experiencias
            </Link>
            <Link
              className={`nav-link fs-5 fw-semibold ${s.textcustom}`}
              href="https://cl.linkedin.com/company/bennu-cl"
              target="_blank"
            >
              Contacto
            </Link>
          </div>
        </div>
        <div className="col-3 d-none d-lg-block"></div>
      </div>
    </nav>
  );
}
