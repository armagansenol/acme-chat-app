import styled from "styled-components"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

export const $scrollbarSize = 10

export const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`

export const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  border-radius: ${$scrollbarSize}px;
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  margin-right: 0;
  background: transparent;

  &[data-orientation="vertical"] {
    width: ${$scrollbarSize}px;
  }
  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: ${$scrollbarSize}px;
  }
`

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: var(--bg-3);
  border-radius: ${$scrollbarSize}px;
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: relative;
  &::before {
    content: ".";
    content-visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: ${$scrollbarSize * 1.25};
    min-height: ${$scrollbarSize * 1.25};
  }
`

export const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner)`
  background-color: transparent;
`
