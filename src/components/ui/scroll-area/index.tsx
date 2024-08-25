import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "./styles"

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { ReactNode } from "react"

interface ScrollAreaProps {
  children: ReactNode
  type?: ScrollAreaPrimitive.ScrollAreaProps["type"]
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const { children, type = "hover" } = props

  return (
    <ScrollAreaRoot type={type}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  )
}
