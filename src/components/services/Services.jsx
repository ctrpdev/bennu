import { Section } from "@/components/section/Section";
import { ServiceCard } from "@/components/serviceCard/ServiceCard";
import noteImg from "@/assets/01.png";
import dbImg from "@/assets/02.png";
import serverImg from "@/assets/03.png";
import chartImg from "@/assets/04.png";
import devOpsImg from "@/assets/05.png";
import s from "./style.module.css";

export function Services() {
  return (
    <div id="services">
      <Section
        title={"Nuestros servicios"}
        classProp={`d-flex 
                flex-column 
                text-center 
                p-0
                p-lg-5
                bg-body-tertiary
                ${s.customTextColor}
                ${s.bgExtra}`}
        content={
          <div className="container p-5">
            <div className="row mx-auto d-flex justify-content-center">
              <div className="col-12 col-lg-4">
                <ServiceCard
                  icon={noteImg}
                  title={"Desarrollo de aplicaciones"}
                  content={
                    "Nuestra amplia experiencia en el desarrollo de aplicaciones para los sectores financiero, logístico y retail, nos permite afirmar con confianza que podemos colaborar junto a usted en la creación de aplicaciones que aporten valor significativo a su empresa."
                  }
                />
              </div>
              <div className="col-12 col-lg-4">
                <ServiceCard
                  icon={dbImg}
                  title={"Mantención y soporte de aplicaciones"}
                  content={
                    "Somos capaces de llevar con éxito el soporte y mantención de aplicativos en diferentes áreas. Nuetra meta es lograr mantener la continuidad del negocio para que usted pueda estar tranquilo."
                  }
                />
              </div>
              <div className="col-12 col-lg-4">
                <ServiceCard
                  icon={serverImg}
                  title={"Consultoría"}
                  content={
                    "Podemos buscar en conjunto la mejor tecnología para su aplicación, contenerizar sus aplicaciones legacy, actualizar sus aplicaciones de monolíticas a microservicios y adoptar la cultura DevOps."
                  }
                />
              </div>
            </div>
            <div className="row mx-auto d-flex justify-content-center">
              <div className="col-12 col-lg-4">
                <ServiceCard
                  icon={chartImg}
                  title={"Capacitación"}
                  content={
                    "Siempre estamos felices de compartir nuestro conocimiento y experiencia. Háganos saber sus necesidades."
                  }
                />
              </div>
              <div className="col-12 col-lg-4">
                <ServiceCard
                  icon={devOpsImg}
                  title={"DevOps"}
                  content={
                    "Le ayudamos a crear infraestructura con el apoyo de herramientas de infraestructura como código."
                  }
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
