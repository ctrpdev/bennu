import Link from "next/link";
import s from "./style.module.css";

export function Footer() {
  return (
    <>
      <ul
        className={`nav flex-column-reverse flex-md-row justify-content-center justify-content-md-between bg-black p-5 ${s.footer}`}
        data-bs-theme="dark"
      >
        <li className="nav-item">
          <Link className={`nav-link text-light ${s.link} btn btn-dark fw-bold`} href="#us">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-light text-center ${s.link}`}
            href="https://www.bing.com/maps?where=Eduardo+LLanos+30A+%C3%91u%C3%B1oa+Santiago+CL&trk=org-locations_url"
            target="_blank"
          >
            Eduardo LLanos 30A, Ñuñoa, Santiago, CL
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${s.link}`}
            href="https://cl.linkedin.com/company/bennu-cl"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#fff"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </Link>
        </li>
      </ul>
    </>
  );
}
