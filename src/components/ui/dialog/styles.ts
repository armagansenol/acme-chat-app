import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import { blackA } from "@radix-ui/colors"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import styled, { css, keyframes } from "styled-components"

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
})

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  animation: ${overlayShow} 350ms ease;
  background-color: ${blackA.blackA12};
  inset: 0;
  position: fixed;
`
export const StyledDialogContent = styled(DialogPrimitive.Content)`
  animation: ${contentShow} 350ms ease;
  background-color: var(--text-1);
  border-radius: ${mobileVW(6)};
  left: 50%;
  max-width: 90vw;
  max-height: 85vh;
  padding: ${mobileVW(24)};
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  &:focus {
    outline: none;
  }

  ${desktop(css`
    border-radius: ${desktopVW(6)};
    padding: ${desktopVW(25)};
  `)}
`
export const StyledDialogTitle = styled(DialogPrimitive.Title)`
  color: var(--bg-1);
  font-size: ${mobileVW(18)};
  font-weight: 900;
  margin: 0;

  ${desktop(css`
    font-size: ${desktopVW(18)};
  `)}
`
export const StyledIconButton = styled.button`
  all: unset;
  align-items: center;
  border-radius: 100%;
  color: var(--bg-21);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  height: ${mobileVW(25)};
  justify-content: center;
  position: absolute;
  right: ${mobileVW(10)};
  top: ${mobileVW(10)};
  width: ${mobileVW(25)};

  ${desktop(css`
    height: ${desktopVW(25)};
    right: ${desktopVW(10)};
    top: ${desktopVW(10)};
    width: ${desktopVW(25)};
  `)}
`
