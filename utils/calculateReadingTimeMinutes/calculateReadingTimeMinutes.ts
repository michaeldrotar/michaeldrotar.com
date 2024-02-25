/**
 * Approximates how many minutes it would take most fluent readers to finish the given content.
 */
export function calculateReadingTimeMinutes(
  content: string,
  { wordsPerMinute = 200 } = {},
) {
  const text = content.trim()
  const wordCount = text.split(/\s+/g).length
  return Math.ceil(wordCount / wordsPerMinute)
}
