import { Flex } from "@/components/ui/layout"
import { hover } from "@/styles/misc"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import styled, { css } from "styled-components"

export const StyledCombobox = styled(Flex)`
  justify-content: flex-start;
`

export const StyledOptionsContainer = styled(Flex)`
  gap: ${mobileVW(10)};
  padding: ${mobileVW(4)} ${mobileVW(0)};
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;

  ${desktop(css`
    flex-direction: row;
    gap: ${desktopVW(10)};
    padding: ${desktopVW(20)};
  `)}
`

export const StyledOption = styled(Flex)`
  border: 1px solid var(--text-3);
  align-items: center;
  border-radius: ${mobileVW(32)};
  cursor: pointer;
  font-size: ${mobileVW(12)};
  line-height: 1.25;
  padding: ${mobileVW(4)} ${mobileVW(10)};
  text-align: center;

  ${hover(css`
    &:hover {
      background-color: var(--text-3);
      color: var(--bg-1);
    }
  `)}

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    font-size: ${desktopVW(15)};
    gap: ${desktopVW(30)};
    padding: ${desktopVW(4)} ${desktopVW(20)};
  `)}
`
