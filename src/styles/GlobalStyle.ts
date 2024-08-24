import { createGlobalStyle } from "styled-components"
import { reset } from "./reset"

const GlobalStyle = createGlobalStyle`
${reset}

html,
body,
#root,
#__next {
  height: 100%;
}
`

export default GlobalStyle
