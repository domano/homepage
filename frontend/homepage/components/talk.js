import React from 'react';
import 'bulma';
import 'bulma-extensions'
import YouTube from 'react-youtube-embed';


function Talk({url, title, description}) {
    return (
        <div className="tile is-child">
                <p className="title">{title}</p>
                <figure className="is-4by3">
                    <div className="column is-12"><YouTube id={url}/></div>
                </figure>
        </div>
    );
}

export default Talk;