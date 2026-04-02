import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useStaggerReveal(ref, config = {}) {
  useLayoutEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const items = Array.from(el.children)
    const mm = gsap.matchMedia()

    if (!items.length) return

    const {
      y = 30,
      opacity = 0,
      scale = 1,
      ease = 'power3.out',
      once = true,
      mobile = {},
      tablet = {},
      desktop = {},
    } = config

    const createAnimation = ({
      start = 'top 85%',
      duration = 0.7,
      stagger = 0.12,
      delay = 0,
    } = {}) => {
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
    }

    const ctx = gsap.context(() => {
      mm.add('(max-width: 639px)', () => {
        createAnimation({
          start: mobile.start ?? 'top 50%',
          duration: mobile.duration ?? 1.3,
          stagger: mobile.stagger ?? 0.25,
          delay: mobile.delay ?? 0.6,
        })
      })

      mm.add('(min-width: 640px) and (max-width: 1023px)', () => {
        createAnimation({
          start: tablet.start ?? 'top 60%',
          duration: tablet.duration ?? 0.95,
          stagger: tablet.stagger ?? 0.18,
          delay: tablet.delay ?? 0.3,
        })
      })

      mm.add('(min-width: 1024px)', () => {
        createAnimation({
          start: desktop.start ?? 'top 70%',
          duration: desktop.duration ?? 0.8,
          stagger: desktop.stagger ?? 0.15,
          delay: desktop.delay ?? 0,
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