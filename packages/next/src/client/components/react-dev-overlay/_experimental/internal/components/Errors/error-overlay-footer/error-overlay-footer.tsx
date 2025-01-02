import { ErrorFeedback } from './error-feedback'

export function ErrorOverlayFooter({ message }: { message: string }) {
  return (
    <footer className="error-overlay-footer">
      <p>{message}</p>
      <ErrorFeedback />
    </footer>
  )
}
