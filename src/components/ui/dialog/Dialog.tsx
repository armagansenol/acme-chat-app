import { X } from "lucide-react"
import { ReactNode } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { StyledDialogContent, StyledDialogOverlay, StyledDialogTitle, StyledIconButton } from "./styles"

interface Props {
  active: boolean
  setActive: (val: boolean) => void
  children: ReactNode
  title?: string
}

const Dialog = (props: Props) => (
  <DialogPrimitive.Root open={props.active} defaultOpen={false} onOpenChange={props.setActive}>
    <DialogPrimitive.Portal>
      <StyledDialogOverlay />
      <StyledDialogContent aria-describedby={undefined}>
        <StyledDialogTitle>{props.title}</StyledDialogTitle>
        {props.children}
        <DialogPrimitive.Close asChild>
          <StyledIconButton aria-label="Close">
            <X />
          </StyledIconButton>
        </DialogPrimitive.Close>
      </StyledDialogContent>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
)

export default Dialog
