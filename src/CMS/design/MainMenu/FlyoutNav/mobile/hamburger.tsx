import { cn } from '@utils/ui'
import type React from 'react'
import { FiMenu } from 'react-icons/fi'

export const Hamburger: React.FC<{ className?: string; onClick?: () => void }> = (
  props,
) => {
  // const [open, setOpen] = useState(false)

  return (
    <button
      // onClick={() => setOpen((pv) => !pv)}
      className={cn('block lg:hidden text-3xl z-100', props.className)}
      onClick={props.onClick}
    >
      <FiMenu />
    </button>
  )
}
