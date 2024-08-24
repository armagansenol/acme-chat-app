import { grayDark } from "@radix-ui/colors"
import { css } from "styled-components"

export const variables = css`
  :root {
    --bg-1: ${grayDark.gray1};
    --bg-2: ${grayDark.gray2};
    --bg-3: ${grayDark.gray3};

    --text-1: ${grayDark.gray12};
    --text-2: ${grayDark.gray11};
    --text-3: ${grayDark.gray10};
  }
`
