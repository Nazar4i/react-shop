function Footer() {
    return (
        <footer className="blue-grey darken-4">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Nazar4i">Repo</a>
          </div>
        </footer>
    )
}

export {Footer}