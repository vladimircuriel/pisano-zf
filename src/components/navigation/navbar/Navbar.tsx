import useNavbar from '@lib/hooks/useNavbar'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { toggled, setToggled, matches } = useNavbar()

  const linkStyle =
    'text-2xl leading-6 font-jost text-primary-300 hover:text-primary-400 hover:scale-105 transition-transform-all duration-300'

  return (
    <div className="flex items-center justify-between w-full max-w-full px-4 py-4 m-auto bg-white border-b-2 lg:px-28 border-primary-100">
      <a href="/">
        {/** biome-ignore lint/performance/noImgElement: cant use astro components inside react component */}
        <img src="/logo.webp" alt="pisano-zf" className="w-96" />
      </a>

      {matches && (
        <nav className="flex flex-row gap-10">
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/services" className={linkStyle}>
            Servicios
          </a>
          <a href="/blog" className={linkStyle}>
            Blog
          </a>
          <a href="/contact" className={linkStyle}>
            Contacto
          </a>
        </nav>
      )}

      {!matches && (
        <button
          onClick={() => setToggled(!toggled)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setToggled(!toggled)
            }
          }}
          aria-label={toggled ? 'Cerrar menú' : 'Abrir menú'}
          aria-pressed={toggled}
          type="button"
          className="p-0 space-y-1 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </button>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center z-50"
        >
          <a href="/" className={linkStyle}>
            Inicio
          </a>
          <a href="/services" className={linkStyle}>
            Servicios
          </a>
          <a href="/blog" className={linkStyle}>
            Blog
          </a>
          <a href="/contact" className={linkStyle}>
            Contacto
          </a>
        </motion.nav>
      )}
    </div>
  )
}
