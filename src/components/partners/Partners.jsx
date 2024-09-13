import Image from "next/image";
import { Section } from "@/components/section/Section";
import gitlab from "@/assets/p1.png";
import kong from "@/assets/p2.png";
import docker from "@/assets/p3.png";
import redhat from "@/assets/p4.png";
import hashicorp from "@/assets/p5.png";
import aws from "@/assets/p6.png";
import s from "./style.module.css";

export function Partners() {
  return (
    <div id="partners">
      <Section
        title={"Partners"}
        classProp={`d-flex 
                flex-column 
                text-center 
                p-0
                p-lg-5
                ${s.customBg}
                ${s.customTextColor}
                ${s.bgExtra}`}
        content={
          <div
            className={`${s.beltContainer} container p-0 p-lg-5 rounded-4 ${s.customBg}`}
          >
            <div className={`${s.belt}`}>
              <Image src={gitlab} alt="icono gitlab" />
              <Image src={kong} alt="icono kong" />
              <Image src={docker} alt="icono docker" />
              <Image src={redhat} alt="icono rehat" />
              <Image src={hashicorp} alt="icono hashicorp" />
              <Image src={aws} alt="icono aws" />
            </div>
          </div>
        }
      />
    </div>
  );
}
