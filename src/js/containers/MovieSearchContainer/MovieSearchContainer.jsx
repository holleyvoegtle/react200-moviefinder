import React from 'react';
import { titleSearch, getMovie } from './MSearchCActions';
import { Link } from 'react-router-dom';

export default class MovieSearchContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSearch(event) {
		const { dispatch } = this.props;
		const { value } = event.target;
		dispatch(titleSearch(value));
	}

	handleSubmit() {
		const { title, dispatch } = this.props;
		dispatch(getMovie(title));
	}

	render() {
		const { title, movies } = this.props;
		console.log("this is movies", movies)
		return (
			<div>
				<div className='container'>
					<div className='jumbotron'>
						<h1 id='appTitle' className='display-3 text-center'>Movie Finder</h1>
					</div>
					<div className='row'>
						<input
							type='text'
							className='col-11'
							placeholder='Enter a movie title'
							value={ title }
							onChange={ this.handleSearch }
						/>
						<div className='col-1'>
							<button
								className='btn btn-outline-secondary'
								type='button'
								onClick={ this.handleSubmit }
							>Go!</button>
						</div>
					</div>
				</div>

				{movies.map((searchedMovie) => (
					<div className='card' key={ searchedMovie.imdbID }>
						<div className='card-body row'>
							<div className='col-3'>
								<img
									className='detail col-5 mt-3 mb-3'
									src={ searchedMovie.Poster }
									
								/>	
							</div>
							<div className='col-9'>
								<h5 className='card-title'>{ searchedMovie.Title }</h5>
								<h6
									className='card-subtitle'
								>
									<b>{ searchedMovie.Year }</b>
								</h6>
								<hr />
								<p className='card-text'>{searchedMovie.Plot}</p>
								{console.log("in movie search jsx", `/movie/${searchedMovie.imdbID}`)}
								<Link to={`/movie/${searchedMovie.imdbID}`} >
									<button type='button'><span>Movie Information</span></button>
								</Link>
								{/*<a href={ `/#/movie/${ searchedMovie.imdbID }`} className='btn btn-danger' id='link'>Movie Information</a>*/}
							</div>
						</div>
					</div>
				))}	
				
			</div>
		);
	}
}

