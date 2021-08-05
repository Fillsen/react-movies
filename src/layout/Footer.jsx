import {Button} from '@material-ui/core'

function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
                <p>© {new Date().getFullYear()} Made by <a href="https://vk.com/fillsen" className="href" target="_blank" rel="noreferrer">Fillsen</a></p>
                {/*<a className="grey-text text-lighten-4 right" href="#!">Repo</a>*/}
            </div>
        </div>
    </footer>
}

export {Footer}