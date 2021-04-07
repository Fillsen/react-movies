import React from 'react';
import {Movielist} from '../components/Movielist'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search';

// HIDE API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movielist: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=The Avengers`)
            .then(response => response.json())
            .then(data => this.setState({movielist: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movielist: data.Search, loading: false}))
    }

    render() {
        const {movielist, loading} = this.state;

        return <main className='container content'>
            <Search searchMovies={this.searchMovies}/>
            {
                loading ? (
                    <Preloader/>
                ) : <Movielist movielist={movielist}/>
            }

        </main>
    }
}

export {Main}