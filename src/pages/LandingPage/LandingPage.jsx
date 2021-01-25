import React from 'react';
import {Link} from 'react-router-dom'

function LandingPage(props) {
    let book = props.user ? 
      <>
        <h1>Krispy Kreations</h1>
        <Link to='/recipebook'>Recipe Book</Link>
      </>
      : 
      <h1>Krispy Kreations</h1>

    return (
        <div>
            {/* Either link to user recipe book or title heading */}
            { book }
        </div>
        
    )
}

export default LandingPage;