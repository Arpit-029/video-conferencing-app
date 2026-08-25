import * as DialogPrimitive from '@radix-ui/react-dialog'

export const Dialog = DialogPrimitive.Root
export const DialogPortal = DialogPrimitive.Portal
export const DialogOverlay = DialogPrimitive.Overlay
export const DialogClose = DialogPrimitive.Close
export const DialogTrigger = DialogPrimitive.Trigger

export const DialogContent = ({ className = '', children, ...props }) => (
  <DialogPortal>
    <DialogOverlay className="dialog-overlay" />
    <DialogPrimitive.Content className={`dialog-content ${className}`} {...props}>
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
)
