import './globals.css'

export const metadata = {
  title: 'Unofficial Nike',
  description: 'Unofficial Nike Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
