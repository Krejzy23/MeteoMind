import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useReveal(ref) {
  useLayoutEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, el)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [ref])
}