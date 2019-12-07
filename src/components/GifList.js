import React from 'react'

const GifList = props => {
    return(
        <ul>
            {props.gifs.map(gif => <li key={gif.images.original.url}><img src={gif.images.original.url} alt={gif.slug}/></li>)}
        </ul>
    )
}

export default GifList