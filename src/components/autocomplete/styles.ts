import styled, { css } from "styled-components"

import { BoxAbsolute, Flex } from "@/components/ui/layout"
import { hover } from "@/styles/misc"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"

export const StyledAutoCompleteContainer = styled(BoxAbsolute)`
  left: 50%;
  transform: translateY(-110%) translateX(-50%);
  top: 0;
  width: 100%;
  overflow: hidden;

  ${desktop(css`
    transform: translateY(-130%) translateX(-50%);
  `)}
`

export const StyledItemsContainer = styled(Flex)`
  align-items: center;
  gap: ${mobileVW(10)};
  justify-content: center;
  padding-bottom: ${mobileVW(14)};

  ${desktop(css`
    gap: ${desktopVW(10)};
    padding-bottom: ${desktopVW(20)};
  `)}
`

export const StyledItem = styled.div`
  border-radius: ${mobileVW(32)};
  background-color: var(--text-2);
  color: var(--bg-1);
  cursor: pointer;
  font-size: ${mobileVW(12)};
  white-space: nowrap;
  padding: ${mobileVW(4)} ${mobileVW(10)};
  text-align: center;
  transition: 400ms all ease;

  ${hover(css`
    &:hover {
      background-color: var(--bg-3);
      color: var(--text-2);
    }
  `)}

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    padding: ${desktopVW(4)} ${desktopVW(14)};
    font-size: ${desktopVW(14)};
  `)}
`
