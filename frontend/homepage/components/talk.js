import React from 'react';
import 'bulma';
import 'bulma-extensions'
import YouTube from 'react-youtube-embed';


function Talk({url, title, description}) {
    return (
        <div className="tile is-parent">
        <div className="tile is-child box">
                <p className="title">{title}</p>
                <figure className="is-16by9">
                    <YouTube className="has-ratio" id={url}/>
                </figure>
        </div>
        </div>
    );
}

export default Talk;