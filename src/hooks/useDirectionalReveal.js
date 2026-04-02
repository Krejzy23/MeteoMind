import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useDirectionalReveal(ref, config = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return

    const el = ref.current

    const {
      x = 0,
      y = 0,
      opacity = 0,
      duration = 0.8,
      ease = 'power3.out',
      start = 'top 60%',
      once = true,
      delay = 0,
      scale = 0,
    } = config

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          x,
          y,
          opacity,
          scale,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      )
    }, el)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [ref, config])
}