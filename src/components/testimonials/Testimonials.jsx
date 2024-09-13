import { Section } from "@/components/section/Section";
import { TestimonialCard } from "@/components/testimonialCard/TestimonialCard";
import customer from "@/assets/person-circle.svg";
import s from "./style.module.css";

export function Testimonials() {
  return (
    <div id="experiences" className={`${s.bg}`}>
      <Section
        title={"Testimonios y experiencias"}
        classProp={`d-flex 
                flex-column 
                text-center 
                p-0
                p-lg-5
                bg-dark
                text-light
                ${s.bgExtra}`}
        content={
          <div className="container-fluid p-5 d-md-flex justify-content-md-center">
              <div className="col-12 col-md-6 col-lg d-flex flex-column flex-lg-row">
                <TestimonialCard
                  icon={customer}
                  title={"Cristian R. P."}
                  content={
                    "Excelente lugar para aprender y buen clima laboral. Equipo muy responsable y comprometido."
                  }
                />
              </div>
          </div>
        }
      />
    </div>
  );
}
