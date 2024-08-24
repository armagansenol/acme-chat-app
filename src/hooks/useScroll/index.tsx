import { useEffect, useRef } from "react"

export function useScrollToElement<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null)

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  return containerRef
}
