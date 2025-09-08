import Facebook from '@components/icons/facebook'
import Instagram from '@components/icons/instagram'
import LinkedIn from '@components/icons/linkedin'
import Twitter from '@components/icons/twitter'

export default function Footer() {
  return (
    <div className="mt-[135px] w-full border-t border-primary-100 ">
      <div className="grid w-full grid-cols-1 gap-6 px-4 pt-10 pb-10 mx-auto bg-white lg:px-28 lg:grid-cols-5 md:grid-cols-2">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            {/** biome-ignore lint/performance/noImgElement: cant use astro components inside react component */}
            <img src="/logo.webp" alt="pisano-zf" className="w-96" />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Parque de Zona Franca ofreciendo naves industriales para exportación de bienes y
            servicios en la República Dominicana.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="https://www.facebook.com/PISANOzf/" rel="noopener" target="_blank">
              <Facebook />
            </a>
            <a href="https://twitter.com/pisanozf" rel="noopener" target="_blank">
              <Twitter />
            </a>
            <a href="https://do.linkedin.com/company/pisanozf" rel="noopener" target="_blank">
              <LinkedIn />
            </a>
            <a href="https://instagram/pisanozf" rel="noopener" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col col-span-1 gap-4">
          <h5 className="text-primary-100 font-dm text-[22px] lg:text-[25px] leading-loose">
            Navegación
          </h5>
          <div className="flex flex-col gap-6">
            <a href="/">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                Inicio
              </p>
            </a>
            <a href="/services">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                Servicio
              </p>
            </a>
            <a href="/blog">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                Blog
              </p>
            </a>
            <a href="/contact">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                Contacto
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col col-span-1 gap-4">
          <h5 className="text-primary-100 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contacto
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="https://www.google.com/maps/place/Pisano+Zona+Franca+-+Parque+Industrial+Santiago+Norte/@19.5085705,-70.7625808,17z/data=!3m1!4b1!4m6!3m5!1s0x8eb1c6ff2d475c27:0xf8689d4e85f431d5!8m2!3d19.5085655!4d-70.7600059!16s%2Fg%2F1tdkhq5g?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
              rel="noopener"
              target="_blank"
            >
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                Autopista Joaquín Balaguer Km 5, Santiago, República Dominicana
              </p>
            </a>
            <a href="mailto:pisano@claro.net.do">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                pisano@claro.net.do
              </p>
            </a>
            <a href="tel:809 241 8111">
              <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray duration-300 transition-al hover:text-primary-400 hover:scale-105">
                809-241-8111
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col col-span-1 gap-4">
          <h5 className="text-primary-100 font-dm text-[22px] lg:text-[25px] leading-loose">
            Horario
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Lunes a Viernes: 8:00am - 6:00pm
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Sábado: 8:00am - 12:00pm
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Domingo: Cerrado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
