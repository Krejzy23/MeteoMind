import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useStaggerReveal(ref, config = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const items = Array.from(el.children)

    if (!items.length) return

    const {
      y = 30,
      opacity = 0,
      duration = 0.7,
      stagger = 0.12,
      delay = 0,
      scale = 1,
      ease = 'power3.out',
      start = 'top 85%',
      once = true,
    } = config

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          y,
          opacity,
          scale,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger,
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