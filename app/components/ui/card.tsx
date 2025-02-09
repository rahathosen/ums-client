import type React from "react"

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card text-card-foreground p-4 rounded-lg shadow-lg ${className}`}>{children}</div>
)

