import * as React from "react"
import { Link } from "gatsby"

interface LayoutProps {
  children: React.ReactNode
  title: string
  location: Location
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <hr />
      <footer>
        © {new Date().getFullYear()}{" "}
        <a href="https://www.opensesame.com">OpenSesame</a>
      </footer>
    </div>
  )
}

export default Layout
