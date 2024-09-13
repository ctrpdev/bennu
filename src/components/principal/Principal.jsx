"use client";

import Image from "next/image";
import { Suspense } from "react";
import { Section } from "@/components/section/Section";
import { Typewriter } from "react-simple-typewriter";
import Loading from "@/app/loading";
import bgHome from "@/assets/developers.jpg";
import s from "./style.module.css";

export function Principal() {
  const keyWords = [
    "Innovación",
    "Desarrollo",
    "Emprendimiento",
    "Asesoría",
    "Infraestructura",
    "Cloud",
    "Scrum",
    "DevOps",
    "Capacitación",
  ];
  return (
    <>
      <div className={`${s.box}`}>
        <Image
          src={bgHome}
          alt="mujer mirando una app móvil"
          className={`${s.bgHome}`}
        />
        <div className="container d-flex justify-content-center">
          <h1 className={`text-light text-center fw-semibold ${s.messagemt}`}>
            Tus ideas en soluciones modernas
            <div style={{ color: "#ffffff" }}>
              <Typewriter
                words={keyWords}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </h1>
        </div>
      </div>
      <Section
        classProp={`
        bg-primary
        text-light 
        text-center 
        fw-semibold
        d-flex 
        flex-column 
        text-center 
        p-5
        ${s.bgExtra}`}
        title={"Conócenos"}
        content={
          <p className="fs-3 fw-normal p-5">
            Tus ideas en soluciones modernas.
            <br />
            Somos un equipo de trabajo comprometido y en constante búsqueda de
            nuevas tecnologías.
            <br />
            Buscamos trascender la relación cliente-proveedor.
          </p>
        }
      />
    </>
  );
}
