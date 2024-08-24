import { desktop, desktopVW, mobileVW } from "@/styles/responsive"
import * as FormPrimitive from "@radix-ui/react-form"
import styled, { css } from "styled-components"
import { Flex } from "../ui/layout"
import { hover } from "@/styles/misc"

const $inputHeight = 60

export const StyledForm = styled(FormPrimitive.Form)`
  flex: 1;
`

export const StyledFormField = styled(FormPrimitive.Field)`
  flex: 1;
`

export const InputBase = css`
  flex: 1;
  all: unset;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${mobileVW(20)};
  color: var(--text-1);
  background-color: var(--bg-2);

  &::selection {
    background-color: var(--text-1);
    color: var(--bg-2);
  }

  ${desktop(css`
    font-size: ${desktopVW(20)};
  `)}
`

export const StyledInput = styled.input`
  ${InputBase};
  border-radius: ${mobileVW(32)};
  height: ${mobileVW($inputHeight)};
  line-height: 1;
  padding-left: ${mobileVW(30)};
  padding-right: ${mobileVW(30)};

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    height: ${desktopVW($inputHeight)};
    padding-left: ${desktopVW(30)};
    padding-right: ${desktopVW(30)};
  `)}
`

export const StyledTextarea = styled.textarea`
  ${InputBase};
  border-radius: ${mobileVW(32)};
  height: ${mobileVW($inputHeight)};
  line-height: 1.35;
  padding-left: ${mobileVW(30)};
  padding-right: ${mobileVW(30)};
  resize: none;

  ${desktop(css`
    border-radius: ${desktopVW(32)};
    height: ${desktopVW($inputHeight)};
    padding-left: ${desktopVW(30)};
    padding-right: ${desktopVW(30)};
  `)}
`

export const StyledButton = styled.button<{ $active: boolean }>`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  font-size: ${mobileVW(16)};
  height: ${mobileVW($inputHeight)};
  width: ${mobileVW($inputHeight)};
  background-color: var(--bg-2);
  color: var(--text-1);
  transition: 400ms all ease;

  /* disabled */
  pointer-events: ${(props) => (props.$active ? "auto" : "none")};
  opacity: ${(props) => (props.$active ? 1 : 0.3)};

  ${hover(css`
    &:hover {
      background-color: var(--text-2);
      color: var(--bg-1);
    }
  `)}

  ${desktop(css`
    font-size: ${desktopVW(16)};
    height: ${desktopVW($inputHeight)};
    width: ${desktopVW($inputHeight)};
  `)}
`

export const StyledChatInputContainer = styled(Flex)`
  flex: 1;
  position: relative;
`

export const StyledFormContainer = styled(Flex)`
  flex: 1;
  align-items: center;
  column-gap: ${mobileVW(20)};
  justify-content: space-between;
  position: relative;

  ${desktop(css`
    column-gap: ${desktopVW(20)};
  `)}
`
