import React from 'react';
import './CardPhotoLeft.css';


export default function CardPhotoLeft() {
    return (
        <div>
        <div class="row align-items-center">
            <div class="col-4"><img className="Photo-left" src="/logo512.png" alt="nightmare" /></div>
            <div class="col-8 content-left-photo">
                <p>Note that the development build is not optimized.
                To create a production build, use npm run build.
                </p>
            </div>
        </div>
                
        </div>
    )
}
