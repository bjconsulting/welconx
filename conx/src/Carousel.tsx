import React, { ReactNode, MouseEvent } from "react"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

interface CarouselProps {
  className: string
  children: ReactNode
  navButtonBgColor: string
  navButtonFillColor: string
}

export default function Carousel({ children, className, navButtonBgColor, navButtonFillColor }: CarouselProps) {
  const panel = React.useRef<HTMLDivElement>(null)

  const prev = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!panel.current) return

    const container = panel.current
    const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
    const containerRect = container.getBoundingClientRect()
    const currentItemIndex = Math.round(container.scrollLeft / containerRect.width)

    if (currentItemIndex > 0) {
      const prevItem = items[currentItemIndex - 1]
      const prevItemRect = prevItem.getBoundingClientRect()
      container.scrollBy({ left: prevItemRect.left - containerRect.left, behavior: 'smooth' })
    }
  }

  const next = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!panel.current) return

    const container = panel.current
    const items = container.querySelectorAll('.snap-start') as NodeListOf<HTMLDivElement>
    const containerRect = container.getBoundingClientRect()
    const currentItemIndex = Math.round(container.scrollLeft / containerRect.width)

    if (currentItemIndex < items.length - 1) {
      const nextItem = items[currentItemIndex + 1]
      const nextItemRect = nextItem.getBoundingClientRect()
      container.scrollBy({ left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
      //console.log({ container, scrollLeft: container.scrollLeft, left: nextItemRect.left - containerRect.left, behavior: 'smooth' })
    }
  }

  return (
    <div className='relative'>
      <div ref={panel} className={className}>
        <div className='flex flex-row'>
          { children }
        </div>
      </div>
      <div className={`p-2 bnext tablet:p-4 rounded-full ${navButtonBgColor} opacity-80 absolute top-[50%] -translate-y-1/2 right-2 hover:opacity-100 cursor-pointer`} onClick={next}>
          <GrNext className={navButtonFillColor} />
      </div>

      <div className={`p-2 bprev tablet:p-4 rounded-full ${navButtonBgColor} opacity-80 absolute top-[50%] -translate-y-1/2 left-2 hover:opacity-100 cursor-pointer`} onClick={prev}>
          <GrPrevious className={navButtonFillColor} />
      </div>
    </div>
  )
}