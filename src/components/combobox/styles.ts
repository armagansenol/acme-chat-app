import { Flex } from "@/components/ui/layout"
import { hover } from "@/styles/misc"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import styled, { css } from "styled-components"

export const StyledCombobox = styled(Flex)`
  justify-content: flex-start;
`

export const StyledOptionsContainer = styled(Flex)`
  gap: ${mobileVW(20)};
  padding: ${mobileVW(20)};
  flex-wrap: wrap;

  ${desktop(css`
    gap: ${desktopVW(20)};
    padding: ${desktopVW(20)};
  `)}
`

export const StyledOption = styled(Flex)`
  border: 1px solid var(--text-2);
  align-items: center;
  border-radius: ${mobileVW(32)};
  cursor: pointer;
  padding: ${mobileVW(0)} ${mobileVW(12)};

  ${hover(css`
    &:hover {
      background-color: var(--text-2);
      color: var(--bg-1);
    }
  `)}

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    gap: ${desktopVW(30)};
    padding: ${desktopVW(4)} ${desktopVW(20)};
  `)}
`
