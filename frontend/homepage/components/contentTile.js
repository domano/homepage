import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ContentTile({title, subtitle, url, thumbnail}) {
    return (
        <a className="tile is-parent" href={url}>
            <div className="tile is-child box">
                <article className="columns">
                    <figure className="column is-narrow">
                        <p className="image is-64x64">
                            <FontAwesomeIcon className="is-size-1" icon={thumbnail}/>
                        </p>
                    </figure>
                    <div className="column">
                            <p className="title">{title}</p>
                            <p className="subtitle">{subtitle}</p>
                    </div>
                </article>
            </div>
        </a>
    );
}

export default ContentTile;