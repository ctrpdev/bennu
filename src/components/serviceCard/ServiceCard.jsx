import Image from "next/image";
import s from "./style.module.css";

export function ServiceCard({ icon, title, content }) {
  return (
    <>
      <div
        className={`${s.serviceCard} d-flex flex-column text-start p-1 p-md-3 p-lg-5`}
      >
        <div className={`${s.iconServiceContainer}`}>
          <Image
            src={icon}
            className={`${s.iconService}`}
            alt="Ícono de servicio"
          />
        </div>
        <div className="serviceInfo">
          <p className="serviceTitle text-uppercase fw-bold text-start d-flex fs-4">
            {title}
          </p>
          <p className={`${s.serviceContent}`}>{content}</p>
        </div>
      </div>
    </>
  );
}
