import React from 'react'
import './HorizontalPhoto.css';

export default function HorizontalPhoto() {
    return (

        <div class="jumbotron jumbotron-fluid">
        <div class="container container-photo-central">
            <h2 class="display-4">photo name or sentence</h2>
            <img className="Photo-central" src="/Chile_Paine.jpg" alt="central-main-img"/>
            <p class="lead">This is a bla bla bla</p>
        </div>
        </div>
    )
}
