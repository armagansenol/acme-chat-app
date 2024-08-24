import { desktop, desktopVW, mobileVW } from "@/styles/responsive"

import { motion } from "framer-motion"
import styled, { css } from "styled-components"

import { Flex } from "@/components/ui/layout"

export const StyledChatWindow = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  gap: ${mobileVW(20)};

  ${desktop(css`
    gap: ${desktopVW(20)};
  `)}
`

export const StyledMessageContainer = styled(motion.div)`
  width: 100%;
`
