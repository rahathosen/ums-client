export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white p-4 rounded-lg shadow-lg ${className}`}>{children}</div>
)

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col">{children}</div>
)

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold mb-2">{children}</h3>
)

export const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-muted-foreground">{children}</p>
)

export const CardContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>

export const CardFooter = ({ children }: { children: React.ReactNode }) => <div className="mt-4">{children}</div>

