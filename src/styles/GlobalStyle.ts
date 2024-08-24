import { createGlobalStyle } from "styled-components"
import { reset } from "./reset"
import { variables } from "./variables"

const GlobalStyle = createGlobalStyle`
${reset}
${variables}


html,
body,
#root,
#__next {
  height: 100%;
}
`

export default GlobalStyle
