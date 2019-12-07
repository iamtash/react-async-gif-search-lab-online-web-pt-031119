import React, {Component} from 'react' 

class GifSearch extends Component {
    state = {
        searchQuery: ''
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}> 
                <input type='text' name='query' onChange={this.handleQueryChange} />
                <input type='submit' value='Submit' />
            </form>
        )
    }

    handleQueryChange = e => {
        this.setState(
            {
                searchQuery: e.target.form.elements.query.value
            }
        )
    }

    handleFormSubmit = e => {
        e.preventDefault()
        e.target.elements.query.value = ''
        this.props.submitHandler(this.state.searchQuery)
    }
}

export default GifSearch