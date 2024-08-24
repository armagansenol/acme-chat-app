import { mobileBreakpoint } from "@/lib/utils/breakpoints"
import { desktopHeight, desktopWidth, mobileHeight, mobileWidth } from "@/lib/utils/breakpoints/index"
import { css, RuleSet } from "styled-components"

// Utility functions
export const mobileVW = (pixels: number, baseVW = mobileWidth): string => {
  return `${(pixels * 100) / baseVW}vw`
}

export const mobileVH = (pixels: number, baseVH = mobileHeight): string => {
  return `${(pixels * 100) / baseVH}vh`
}

export const desktopVW = (pixels: number, baseVW = desktopWidth): string => {
  return `${(pixels * 100) / baseVW}vw`
}

export const desktopVH = (pixels: number, baseVH = desktopHeight): string => {
  return `${(pixels * 100) / baseVH}vh`
}

export const columns = (columns: number, columnWidth: string, columnGap: string): string => {
  return `calc(${columns} * ${columnWidth} + (${columns} - 1) * ${columnGap})`
}

// Media queries
export const mobile = (styles: RuleSet<object>) => css`
  @media (max-width: ${mobileBreakpoint}px) {
    ${styles}
  }
`

export const desktop = (styles: RuleSet<object>) => css`
  @media (min-width: ${mobileBreakpoint}px) {
    ${styles}
  }
`
