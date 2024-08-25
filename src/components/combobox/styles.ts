import { Flex } from "@/components/ui/layout"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import styled, { css } from "styled-components"

export const StyledCombobox = styled(Flex)`
  height: ${mobileVW(500)};
  width: ${mobileVW(500)};

  ${desktop(css`
    height: ${desktopVW(500)};
    width: ${desktopVW(500)};
  `)}
`

export const StyledOptionsContainer = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  gap: ${mobileVW(20)};
  padding: ${mobileVW(20)} 0;

  ${desktop(css`
    gap: ${desktopVW(20)};
    padding: ${desktopVW(20)} 0;
  `)}
`

export const StyledOption = styled(Flex)`
  align-items: center;
  cursor: pointer;
`
