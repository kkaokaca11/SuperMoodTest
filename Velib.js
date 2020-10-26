import React from 'react';


const Velib = ({station, numAvailable, numTotal, iframe}) => {
    return(
        <div>
            <h1>{station}</h1>
            <h3>Available velibs: {numAvailable}</h3>
            <p>Total velibs: {numTotal}</p>
            <a href="/Details.html">details</a>
            <div>
                <iframe
                    width="400"
                    height="250"
                    frameborder="0"
                    //style="border:0"
                     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBKMu9iVDlu5kEXNkATG5XX8_07yQC_7qY&q=Space+Needle,Seattle+WA" allowfullscreen>
                </iframe>
            </div>
            </div>

    );
}

export default Velib;


