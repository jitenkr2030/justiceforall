import { useEffect } from "react"
import { axe, type Result } from "axe-core"

export function AccessibilityChecker({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const runAccessibilityCheck = async () => {
        const results = await axe(document.body)
        if (results.violations.length) {
          console.warn("Accessibility issues found:")
          results.violations.forEach((violation: Result) => {
            console.warn(`${violation.impact} impact: ${violation.help}`)
            console.warn(
              "Affected elements:",
              violation.nodes.map((node) => node.html),
            )
          })
        }
      }

      // Run the check after a short delay to ensure the DOM is fully loaded
      const timeoutId = setTimeout(runAccessibilityCheck, 1000)

      return () => clearTimeout(timeoutId)
    }
  }, [])

  return <>{children}</>
}

