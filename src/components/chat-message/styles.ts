import { Box, BoxAbsolute } from "@/components/ui/layout"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import { MessageProps } from "@/types"
import styled, { css } from "styled-components"

const $padding = 12

export const StyledMessage = styled(Box)<{ incoming: MessageProps["incoming"] }>`
  background-color: ${(props) => (props.incoming ? "var(--bg-3)" : "var(--bg-4)")};
  border-radius: ${mobileVW(10)};
  color: var() (--text-1);
  display: flex;
  padding: ${mobileVW($padding)};
  position: relative;
  width: 100%;

  ${desktop(css`
    border-radius: ${desktopVW(10)};
    padding: ${desktopVW($padding)};
  `)}
`

export const StyledImageContainer = styled(Box)`
  height: ${mobileVW(300)};
  overflow: hidden;
  width: ${mobileVW(400)};

  ${desktop(css`
    height: ${desktopVW(300)};
    width: ${desktopVW(400)};
  `)}
`

export const StyledImage = styled.img`
  object-fit: "cover";
  height: 100%;
  width: 100%;
`

export const StyledText = styled.p`
  color: var(--text-1);
  font-size: ${mobileVW(16)};

  ${desktop(css`
    font-size: ${desktopVW(18)};
  `)}
`

export const StyledTime = styled(BoxAbsolute)`
  top: ${mobileVW($padding)};
  right: ${mobileVW($padding)};
  color: var(--text-1);
  font-size: ${mobileVW(10)};

  ${desktop(css`
    top: ${desktopVW($padding)};
    right: ${desktopVW($padding)};
    font-size: ${desktopVW(10)};
  `)}
`
