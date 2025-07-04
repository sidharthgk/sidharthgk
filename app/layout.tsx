import './globals.css'

export const metadata = {
  title: 'Fashion Gallery',
  description: 'Fashion Gallery Detail Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}