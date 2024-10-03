// import React, { useState } from 'react';
// import './Stack.css';

// function App() {
//     const [stacks, setStacks] = useState([]);
//     const [tops, setTops] = useState([]);
//     const [stackSizes, setStackSizes] = useState([]);
//     const [initialized, setInitialized] = useState(false);

//     const initializeStacks = () => {
//         const numStacks = parseInt(prompt('Enter the number of stacks:'));
//         if (isNaN(numStacks) || numStacks <= 0) {
//             alert('Invalid number of stacks');
//             return;
//         }

//         const sizes = [];
//         for (let i = 0; i < numStacks; i++) {
//             const size = parseInt(prompt(`Enter the size for stack ${i}:`));
//             if (isNaN(size) || size <= 0) {
//                 alert('Invalid size for stack ' + i);
//                 return;
//             }
//             sizes.push(size);
//         }

//         setStacks(Array(numStacks).fill().map(() => []));
//         setTops(Array(numStacks).fill(-1));
//         setStackSizes(sizes);
//         setInitialized(true);
//     };

//     const reinitializeStacks = () => {
//         setInitialized(false);
//         initializeStacks();
//     };

//     const isFull = (s) => tops[s] === stackSizes[s] - 1;
//     const isEmpty = (s) => tops[s] === -1;

//     const push = (s, data) => {
//         if (isFull(s)) {
//             alert(`Stack ${s} is full`);
//             return;
//         }
//         setTops((prevTops) => {
//             const newTops = [...prevTops];
//             newTops[s]++;
//             return newTops;
//         });
//         setStacks((prevStacks) => {
//             const newStacks = [...prevStacks];
//             newStacks[s] = [...newStacks[s], data];
//             return newStacks;
//         });
//     };

//     const pop = (s) => {
//         if (isEmpty(s)) {
//             alert(`Stack ${s} is empty`);
//             return;
//         }
//         const poppedElement = stacks[s][tops[s]];
//         setTops((prevTops) => {
//             const newTops = [...prevTops];
//             newTops[s]--;
//             return newTops;
//         });
//         setStacks((prevStacks) => {
//             const newStacks = [...prevStacks];
//             newStacks[s] = newStacks[s].slice(0, -1);
//             return newStacks;
//         });
//         return poppedElement;
//     };

//     const peek = (s) => {
//         if (isEmpty(s)) {
//             alert(`Stack ${s} is empty`);
//             return;
//         }
//         return stacks[s][tops[s]];
//     };

//     const handlePush = () => {
//         const s = parseInt(prompt('Enter stack number:'));
//         if (!isNaN(s) && s >= 0 && s < stacks.length) {
//             const data = parseInt(prompt('Enter data:'));
//             if (!isNaN(data)) {
//                 push(s, data);
//             } else {
//                 alert('Invalid data input');
//             }
//         } else {
//             alert('Invalid stack number input');
//         }
//     };

//     const handlePop = () => {
//         const s = parseInt(prompt('Enter stack number:'));
//         if (!isNaN(s) && s >= 0 && s < stacks.length) {
//             const data = pop(s);
//             if (data !== undefined) {
//                 alert(`Popped data: ${data}`);
//             }
//         } else {
//             alert('Invalid stack number input');
//         }
//     };

//     const handlePeek = () => {
//         const s = parseInt(prompt('Enter stack number:'));
//         if (!isNaN(s) && s >= 0 && s < stacks.length) {
//             const data = peek(s);
//             if (data !== undefined) {
//                 alert(`Top data: ${data}`);
//             }
//         } else {
//             alert('Invalid stack number input');
//         }
//     };

//     const handleCheckFull = () => {
//         const s = parseInt(prompt('Enter stack number:'));
//         if (!isNaN(s) && s >= 0 && s < stacks.length) {
//             if (isFull(s)) {
//                 alert(`Stack ${s} is full`);
//             } else {
//                 alert(`Stack ${s} is not full`);
//             }
//         } else {
//             alert('Invalid stack number input');
//         }
//     };

//     const handleCheckEmpty = () => {
//         const s = parseInt(prompt('Enter stack number:'));
//         if (!isNaN(s) && s >= 0 && s < stacks.length) {
//             if (isEmpty(s)) {
//                 alert(`Stack ${s} is empty`);
//             } else {
//                 alert(`Stack ${s} is not empty`);
//             }
//         } else {
//             alert('Invalid stack number input');
//         }
//     };

//     return (
//         <div className="container">
//             <div className="title">Stack Operations</div>
//             {!initialized ? (
//                 <button className="action-button" onClick={initializeStacks}>Initialize Stacks</button>
//             ) : (
//                 <button className="action-button" onClick={reinitializeStacks}>Reinitialize Stacks</button>
//             )}
//             <div className="card-container">
//                 {stacks.map((stack, stackIndex) => (
//                     <div className="card" key={stackIndex}>
//                         <div className="card-content">
//                             <div className="stack-title">Stack {stackIndex}</div>
//                             <div className="elements">
//                                 {stack.map((element, index) => (
//                                     <div className="stack-element" key={index}>{element}</div>
//                                 ))}
//                             </div>
//                             <div className="progress-bar-container">
//                                 <div
//                                     className="progress-bar"
//                                     style={{ width: `${(100 * (tops[stackIndex] + 1)) / stackSizes[stackIndex]}%` }}
//                                 ></div>
//                             </div>
                     
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="button-container">
//                 <button className="action-button" onClick={handlePush}>Push</button>
//                 <button className="action-button" onClick={handlePop}>Pop</button>
//                 <button className="action-button" onClick={handlePeek}>Peek</button>
//                 <button className="action-button" onClick={handleCheckFull}>Check Full</button>
//                 <button className="action-button" onClick={handleCheckEmpty}>Check Empty</button>
//             </div>
//         </div>
//     );
// }

// export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Stack.css';

function Stack() {
    const [stacks, setStacks] = useState([]);
    const [tops, setTops] = useState([]);
    const [stackSizes, setStackSizes] = useState([]);
    const [initialized, setInitialized] = useState(false);

    const initializeStacks = () => {
        const numStacks = parseInt(prompt('Enter the number of stacks:'));
        if (isNaN(numStacks) || numStacks <= 0) {
            alert('Invalid number of stacks');
            return;
        }

        const sizes = [];
        for (let i = 0; i < numStacks; i++) {
            const size = parseInt(prompt(`Enter the size for stack ${i}:`));
            if (isNaN(size) || size <= 0) {
                alert('Invalid size for stack ' + i);
                return;
            }
            sizes.push(size);
        }

        setStacks(Array(numStacks).fill().map(() => []));
        setTops(Array(numStacks).fill(-1));
        setStackSizes(sizes);
        setInitialized(true);
    };

    const reinitializeStacks = () => {
        setInitialized(false);
        initializeStacks();
    };

    const isFull = (s) => tops[s] === stackSizes[s] - 1;
    const isEmpty = (s) => tops[s] === -1;

    const push = (s, data) => {
        if (isFull(s)) {
            alert(`Stack ${s} is full`);
            return;
        }
        setTops((prevTops) => {
            const newTops = [...prevTops];
            newTops[s]++;
            return newTops;
        });
        setStacks((prevStacks) => {
            const newStacks = [...prevStacks];
            newStacks[s] = [...newStacks[s], data];
            return newStacks;
        });
    };

    const pop = (s) => {
        if (isEmpty(s)) {
            alert(`Stack ${s} is empty`);
            return;
        }
        const poppedElement = stacks[s][tops[s]];
        setTops((prevTops) => {
            const newTops = [...prevTops];
            newTops[s]--;
            return newTops;
        });
        setStacks((prevStacks) => {
            const newStacks = [...prevStacks];
            newStacks[s] = newStacks[s].slice(0, -1);
            return newStacks;
        });
        return poppedElement;
    };

    const peek = (s) => {
        if (isEmpty(s)) {
            alert(`Stack ${s} is empty`);
            return;
        }
        return stacks[s][tops[s]];
    };

    const handlePush = () => {
        const s = parseInt(prompt('Enter stack number:'));
        if (!isNaN(s) && s >= 0 && s < stacks.length) {
            const data = parseInt(prompt('Enter data:'));
            if (!isNaN(data)) {
                push(s, data);
            } else {
                alert('Invalid data input');
            }
        } else {
            alert('Invalid stack number input');
        }
    };

    const handlePop = () => {
        const s = parseInt(prompt('Enter stack number:'));
        if (!isNaN(s) && s >= 0 && s < stacks.length) {
            const data = pop(s);
            if (data !== undefined) {
                alert(`Popped data: ${data}`);
            }
        } else {
            alert('Invalid stack number input');
        }
    };

    const handlePeek = () => {
        const s = parseInt(prompt('Enter stack number:'));
        if (!isNaN(s) && s >= 0 && s < stacks.length) {
            const data = peek(s);
            if (data !== undefined) {
                alert(`Top data: ${data}`);
            }
        } else {
            alert('Invalid stack number input');
        }
    };

    const handleCheckFull = () => {
        const s = parseInt(prompt('Enter stack number:'));
        if (!isNaN(s) && s >= 0 && s < stacks.length) {
            if (isFull(s)) {
                alert(`Stack ${s} is full`);
            } else {
                alert(`Stack ${s} is not full`);
            }
        } else {
            alert('Invalid stack number input');
        }
    };

    const handleCheckEmpty = () => {
        const s = parseInt(prompt('Enter stack number:'));
        if (!isNaN(s) && s >= 0 && s < stacks.length) {
            if (isEmpty(s)) {
                alert(`Stack ${s} is empty`);
            } else {
                alert(`Stack ${s} is not empty`);
            }
        } else {
            alert('Invalid stack number input');
        }
    };

    return (
        <div className="container">
            <div className="title">Stack Operations</div>
            {!initialized ? (
                <button className="action-button" onClick={initializeStacks}>Initialize Stacks</button>
            ) : (
                <button className="action-button" onClick={reinitializeStacks}>Reinitialize Stacks</button>
            )}
            <div className="card-container">
                {stacks.map((stack, stackIndex) => (
                    <div className="card" key={stackIndex}>
                        <div className="card-content">
                            <div className="stack-title">Stack {stackIndex}</div>
                            <div className="elements">
                                {stack.map((element, index) => (
                                    <div className="stack-element" key={index}>{element}</div>
                                ))}
                            </div>
                            <div className="progress-bar-container">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${(100 * (tops[stackIndex] + 1)) / stackSizes[stackIndex]}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="action-button" onClick={handlePush}>Push</button>
                <button className="action-button" onClick={handlePop}>Pop</button>
                <button className="action-button" onClick={handlePeek}>Peek</button>
                <button className="action-button" onClick={handleCheckFull}>Check Full</button>
                <button className="action-button" onClick={handleCheckEmpty}>Check Empty</button>
            </div>
            <div className="button-container">
                <Link to="/">
                    <button className="action-button">Home</button>
                </Link>
            </div>
        </div>
    );
}

export default Stack;
