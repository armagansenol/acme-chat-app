import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { ReactNode } from "react"
import styled from "styled-components"

interface ScrollAreaProps {
  children: ReactNode
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const { children } = props

  return (
    <ScrollAreaRoot>
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

export const SCROLLBAR_SIZE = 1

export const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  * {
    height: 100%;
  }
`

export const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2;
  background: blue;
  transition: background 160ms ease-out;
  &:hover {
    background: orange;
  }
  &[data-orientation="vertical"] {
    width: SCROLLBAR_SIZE;
  }
  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: SCROLLBAR_SIZE;
  }
`

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: red;
  border-radius: SCROLLBAR_SIZE;
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44;
    min-height: 44;
  }
`

export const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner)`
  background-color: purple;
`
