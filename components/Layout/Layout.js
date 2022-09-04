import Header from '../../layouts/Header/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <>{children}</>
    </>
  )
}