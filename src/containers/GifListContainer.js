import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch submitHandler={this.submitHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    saveFirstThreeGifs = (data) => {
        const gifs = data.slice(0, 3)
        this.setState({gifs: gifs})
    }

    submitHandler = (searchQuery) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(json => this.saveFirstThreeGifs(json.data))
            .catch(error => console.log(error))
    }

} 

export default GifListContainer