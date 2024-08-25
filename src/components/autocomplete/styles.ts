import styled, { css } from "styled-components"

import { BoxAbsolute, Flex } from "@/components/ui/layout"
import { hover } from "@/styles/misc"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"

export const StyledAutoCompleteContainer = styled(BoxAbsolute)`
  left: 50%;
  transform: translateY(-150%) translateX(-50%);
  top: 0;
  width: 100%;
`

export const StyledItemsContainer = styled(Flex)`
  align-items: center;
  background-color: var(--bg-1);
  border-radius: ${mobileVW(32)};
  font-size: ${mobileVW(20)};
  gap: ${mobileVW(20)};
  justify-content: center;

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    font-size: ${desktopVW(20)};
    gap: ${desktopVW(20)};
  `)}
`

export const StyledItem = styled.div`
  border-radius: ${mobileVW(32)};
  background-color: var(--text-2);
  color: var(--bg-1);
  cursor: pointer;
  white-space: nowrap;
  padding: ${mobileVW(10)} ${mobileVW(20)};
  text-align: center;
  transition: 400ms all ease;

  ${hover(css`
    &:hover {
      background-color: var(--bg-1);
      color: var(--text-2);
    }
  `)}

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    padding: ${desktopVW(10)} ${desktopVW(20)};
  `)}
`
