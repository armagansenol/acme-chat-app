import styled, { css } from "styled-components"
import { grayDark } from "@radix-ui/colors"

import { desktop, desktopVH, desktopVW, mobileVH, mobileVW } from "@/styles/responsive"

import { Flex } from "@/components/ui/layout"

export const StyledChatRoom = styled(Flex)`
  align-items: stretch;
  background-color: var(--bg-1);
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`
export const StyledChatWindowContainer = styled(Flex)`
  flex: 1;
  justify-items: flex-end;
  overflow: hidden;
  padding: ${mobileVW(16)};

  ${desktop(css`
    padding: ${desktopVW(50)};
  `)}
`
export const StyledOverflowMask = styled(Flex)`
  flex: 1;
  border-radius: ${mobileVW(32)};
  overflow: hidden;

  ${desktop(css`
    border-radius: ${desktopVW(32)};
  `)}
`
export const StyledMessagesContainer = styled(Flex)`
  align-items: stretch;
  background-color: ${grayDark.gray2};
  flex-direction: column;
  height: 100%;
  gap: ${mobileVW(20)};
  justify-items: flex-start;
  padding: ${mobileVW(16)};

  ${desktop(css`
    gap: ${desktopVW(20)};
    padding: ${desktopVW(16)};
  `)}
`
export const StyledChatInputContainer = styled(Flex)`
  height: ${mobileVH(200)};
  padding: ${mobileVW(16)};

  ${desktop(css`
    height: ${desktopVH(200)};
    padding: ${desktopVW(50)};
  `)}
`
