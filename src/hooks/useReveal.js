import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useReveal(ref, config = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const mm = gsap.matchMedia()

    const {
      y = 40,
      opacity = 0,
      ease = 'power3.out',
      once = true,
      mobile = {},
      tablet = {},
      desktop = {},
    } = config

    const createAnimation = ({
      start = 'top 80%',
      duration = 0.8,
    } = {}) => {
      gsap.fromTo(
        el,
        {
          y,
          opacity,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        }
      )
    }

    const ctx = gsap.context(() => {
      mm.add('(max-width: 639px)', () => {
        createAnimation({
          start: mobile.start ?? 'top 60%',
          duration: mobile.duration ?? 1.65,
        })
      })

      mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
        createAnimation({
          start: tablet.start ?? 'top 70%',
          duration: tablet.duration ?? 1.25,
        })
      })

      mm.add('(min-width: 1024px)', () => {
        createAnimation({
          start: desktop.start ?? 'top 80%',
          duration: desktop.duration ?? 1,
        })
      })
    }, el)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      mm.revert()
    }
  }, [ref, config])
}