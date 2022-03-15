import React from 'react';
import { titleSearch, getMovie } from './MSearchCActions';

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
								onClick={ this.handleSearch }
							>Go!</button>
						</div>
					</div>
				</div>

				
				
			</div>
		)
	}
}

