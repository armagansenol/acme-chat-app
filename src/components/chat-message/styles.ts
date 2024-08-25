import { Box, BoxAbsolute } from "@/components/ui/layout"
import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import { MessageProps } from "@/types"
import { grayDarkA } from "@radix-ui/colors"
import styled, { css } from "styled-components"

const $padding = 24

export const StyledMessage = styled(Box)<{ $incoming: MessageProps["incoming"] }>`
  background-color: ${(props) => (props.$incoming ? grayDarkA.grayA2 : grayDarkA.grayA4)};
  border-radius: ${mobileVW(12)};
  color: var(--text-1);
  display: flex;
  padding: ${mobileVW($padding / 2)};
  position: relative;
  margin-left: ${(props) => (props.$incoming ? "unset" : "auto")};
  margin-right: ${(props) => (props.$incoming ? "auto" : "unset")};
  width: 80%;

  ${desktop(css`
    border-radius: ${desktopVW(24)};
    padding: ${desktopVW($padding)};
    width: 80%;
  `)}
`

export const StyledImageContainer = styled(Box)`
  border-radius: ${mobileVW(8)};
  height: ${mobileVW(150)};
  overflow: hidden;
  margin-right: ${mobileVW(30)};
  width: ${mobileVW(200)};

  ${desktop(css`
    border-radius: ${desktopVW(10)};
    height: ${desktopVW(300)};
    margin-right: ${desktopVW(50)};
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
  font-size: ${mobileVW(13)};
  max-width: ${mobileVW(300)};
  overflow: hidden;
  overflow-wrap: break-word;
  margin-right: ${mobileVW(30)};

  ${desktop(css`
    font-size: ${desktopVW(18)};
    max-width: ${desktopVW(1000)};
    margin-right: ${desktopVW(50)};
  `)}
`

export const StyledTime = styled(BoxAbsolute)`
  top: ${mobileVW(8)};
  right: ${mobileVW(10)};
  color: var(--text-1);
  font-size: ${mobileVW(9)};

  ${desktop(css`
    top: ${desktopVW(16)};
    right: ${desktopVW(16)};
    font-size: ${desktopVW(10)};
  `)}
`
