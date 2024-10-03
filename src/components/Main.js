// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Main.css'; // Ensure this path is correct

// function Main() {
//     return (
//         <div className="container">
//             <h1>Welcome to the Data Structures Page</h1>
//             <p>Select a data structure to explore:</p>
//             <div className="button-container">
//                 <Link to="/stack">
//                     <button className="action-button">Go to Stack</button>
//                 </Link>
//                 <Link to="/queue">
//                     <button className="action-button">Go to Queue</button>
//                 </Link>
//             </div>
//             {/* Add a Home button */}
//             <div className="button-container">
//                 <Link to="/">
//                     <button className="action-button">Home</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Main;
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // Ensure this path is correct

function Main() {
    return (
        <div className="container">
            <h1>Welcome to the Data Structures Page</h1>
            <p>Select a data structure to explore:</p>
            <div className="button-container">
                <Link to="/stack">
                    <button className="action-button">Go to Stack</button>
                </Link>
                <Link to="/queue">
                    <button className="action-button">Go to Queue</button>
                </Link>
            </div>
            {/* <div className="button-container">
                <Link to="/">
                    <button className="action-button">Home</button>
                </Link>
            </div> */}
        </div>
    );
}

export default Main;
