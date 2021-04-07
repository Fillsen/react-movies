import {Movie} from './Movie'

function Movielist (props) {
    const {movielist = [] } = props;

    return <div className="movielist">
        {movielist.length ? movielist.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        )) : <h4>Empty</h4>}
    </div>
}

export {Movielist}