import React, {useState} from 'react'

import '../App.css';

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }


    return (
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input
                    className="validate"
                    placeholder="Search"
                    type="search"
                    value={search}
                    id="icon_prefix"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    display="inline-block: 0.5rem"
                    className="waves-effect waves-light btn search-btn"
                    onClick={() => searchMovies(search, type)}>
                    Search
                </button>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label><label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies</span>
                </label><label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label><label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="game"
                        onChange={handleFilter}
                        checked={type === 'game'}
                    />
                    <span>Games</span>
                </label>
                </div>
            </div>
        </div>
    )
}

export {Search}