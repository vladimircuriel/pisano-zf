import Mail from '@components/icons/mail'
import Phone from '@components/icons/phone'
import Web from '@components/icons/web'

export default function ContactInfo() {
  return (
    <div className="bg-primary-300/80 rounded-[30px] rounded-t-none px-8 py-10 flex justify-between w-full">
      <h5 className="text-xl tracking-tight text-white xl:flex-row font-jost">
        <a href="mailto:pisano@claro.net.do" className="flex items-center gap-4">
          <Mail /> pisano@claro.net.do
        </a>
      </h5>
      <h5 className="text-xl tracking-tight text-white xl:flex-row font-jost">
        <a href="tel:+18092411111" className="flex items-center gap-4">
          <Phone /> 809-241-1111
        </a>
      </h5>
      <h5 className="text-xl tracking-tight text-white xl:flex-row font-jost">
        <a
          href="https://www.pisanozf.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <Web /> www.pisanozf.com
        </a>
      </h5>
    </div>
  )
}
