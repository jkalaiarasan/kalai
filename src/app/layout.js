import './globals.css'

export const metadata = {
  title: 'Nu Finc',
  description: 'Manage your financial information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
