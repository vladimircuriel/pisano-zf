import { useState } from 'react'
import useMediaQuery from './useMediaQuery'

export default function useNavbar() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')

  return { toggled, setToggled, matches }
}
