// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './components/Main';
// import Stack from './components/Stack';
// import Queue from './components/Queue';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Main />} />
//                 <Route path="/stack" element={<Stack />} />
//                 <Route path="/queue" element={<Queue />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Stack from './components/Stack';
import Queue from './components/Queue';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/queue" element={<Queue />} />
            </Routes>
        </Router>
    );
}

export default App;
