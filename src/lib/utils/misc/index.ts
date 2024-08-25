export function getCurrentTime(): string {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")

  return `${hours}:${minutes}`
}

export function isImageCommand(input: string): boolean {
  // Regular expression to match "/image" followed by a space and a number
  const regex = /^\/image \d+$/

  // Test the input against the regular expression
  return regex.test(input)
}
