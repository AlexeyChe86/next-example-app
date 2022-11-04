import './globals.css'
import Nav from './components/Nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Nav />
        <div className='p-5'>{children}</div>
      </body>
    </html>
  )
}
