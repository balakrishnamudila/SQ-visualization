// import React, { useState } from 'react';
// import './Queue.css'; // Update this if using a separate CSS file for queue

// function Queue() {
//     const [queues, setQueues] = useState([]);
//     const [fronts, setFronts] = useState([]);
//     const [queuesSizes, setQueuesSizes] = useState([]);
//     const [initialized, setInitialized] = useState(false);

//     const initializeQueues = () => {
//         const numQueues = parseInt(prompt('Enter the number of queues:'));
//         if (isNaN(numQueues) || numQueues <= 0) {
//             alert('Invalid number of queues');
//             return;
//         }

//         const sizes = [];
//         for (let i = 0; i < numQueues; i++) {
//             const size = parseInt(prompt(`Enter the size for queue ${i}:`));
//             if (isNaN(size) || size <= 0) {
//                 alert('Invalid size for queue ' + i);
//                 return;
//             }
//             sizes.push(size);
//         }

//         setQueues(Array(numQueues).fill().map(() => []));
//         setFronts(Array(numQueues).fill(0));
//         setQueuesSizes(sizes);
//         setInitialized(true);
//     };

//     const reinitializeQueues = () => {
//         setInitialized(false);
//         initializeQueues();
//     };

//     const isFull = (q) => queues[q].length === queuesSizes[q];
//     const isEmpty = (q) => queues[q].length === 0;

//     const enqueue = (q, data) => {
//         if (isFull(q)) {
//             alert(`Queue ${q} is full`);
//             return;
//         }
//         setQueues((prevQueues) => {
//             const newQueues = [...prevQueues];
//             newQueues[q] = [...newQueues[q], data];
//             return newQueues;
//         });
//     };

//     const dequeue = (q) => {
//         if (isEmpty(q)) {
//             alert(`Queue ${q} is empty`);
//             return;
//         }
//         const dequeuedElement = queues[q][0];
//         setQueues((prevQueues) => {
//             const newQueues = [...prevQueues];
//             newQueues[q] = newQueues[q].slice(1);
//             return newQueues;
//         });
//         return dequeuedElement;
//     };

//     const peek = (q) => {
//         if (isEmpty(q)) {
//             alert(`Queue ${q} is empty`);
//             return;
//         }
//         return queues[q][0];
//     };

//     const handleEnqueue = () => {
//         const q = prompt('Enter queue number:');
//         if (q !== null && !isNaN(parseInt(q))) {
//             const queueNumber = parseInt(q);
//             if (queueNumber >= 0 && queueNumber < queues.length) {
//                 const data = prompt('Enter data:');
//                 if (data !== null && !isNaN(parseInt(data))) {
//                     enqueue(queueNumber, parseInt(data));
//                 } else {
//                     alert('Invalid data input');
//                 }
//             } else {
//                 alert('No queue found');
//             }
//         } else {
//             alert('Invalid queue number input');
//         }
//     };

//     const handleDequeue = () => {
//         const q = prompt('Enter queue number:');
//         if (q !== null && !isNaN(parseInt(q))) {
//             const queueNumber = parseInt(q);
//             if (queueNumber >= 0 && queueNumber < queues.length) {
//                 const data = dequeue(queueNumber);
//                 if (data !== undefined) {
//                     alert(`Dequeued data: ${data}`);
//                 }
//             } else {
//                 alert('No queue found');
//             }
//         } else {
//             alert('Invalid queue number input');
//         }
//     };

//     const handlePeek = () => {
//         const q = prompt('Enter queue number:');
//         if (q !== null && !isNaN(parseInt(q))) {
//             const queueNumber = parseInt(q);
//             if (queueNumber >= 0 && queueNumber < queues.length) {
//                 const data = peek(queueNumber);
//                 if (data !== undefined) {
//                     alert(`Front data: ${data}`);
//                 }
//             } else {
//                 alert('No queue found');
//             }
//         } else {
//             alert('Invalid queue number input');
//         }
//     };

//     const handleCheckFull = () => {
//         const q = prompt('Enter queue number:');
//         if (q !== null && !isNaN(parseInt(q))) {
//             const queueNumber = parseInt(q);
//             if (queueNumber >= 0 && queueNumber < queues.length) {
//                 if (isFull(queueNumber)) {
//                     alert(`Queue ${q} is full`);
//                 } else {
//                     alert(`Queue ${q} is not full`);
//                 }
//             } else {
//                 alert('No queue found');
//             }
//         } else {
//             alert('Invalid queue number input');
//         }
//     };

//     const handleCheckEmpty = () => {
//         const q = prompt('Enter queue number:');
//         if (q !== null && !isNaN(parseInt(q))) {
//             const queueNumber = parseInt(q);
//             if (queueNumber >= 0 && queueNumber < queues.length) {
//                 if (isEmpty(queueNumber)) {
//                     alert(`Queue ${q} is empty`);
//                 } else {
//                     alert(`Queue ${q} is not empty`);
//                 }
//             } else {
//                 alert('No queue found');
//             }
//         } else {
//             alert('Invalid queue number input');
//         }
//     };

//     return (
//         <div className="container">
//             <div className="title">Queue Operations</div>
//             {!initialized ? (
//                 <button className="action-button" onClick={initializeQueues}>Initialize Queues</button>
//             ) : (
//                 <button className="action-button" onClick={reinitializeQueues}>Reinitialize Queues</button>
//             )}
//             <div className="card-container">
//                 {queues.map((queue, queueIndex) => (
//                     <div className="card" key={queueIndex}>
//                         <div className="card-content">
//                             <div className="queue-title">Queue {queueIndex}</div>
//                             <div className="elements">
//                                 {queue.map((element, index) => (
//                                     <div className="queue-element" key={index}>{element}</div>
//                                 ))}
//                             </div>
//                             <div className="progress-bar-container">
//                                 <div
//                                     className="progress-bar"
//                                     style={{ width: `${(100 * queue.length) / queuesSizes[queueIndex]}%` }}
//                                 ></div>
//                             </div>
                          
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="button-container">
//                 <button className="action-button" onClick={handleEnqueue}>Enqueue</button>
//                 <button className="action-button" onClick={handleDequeue}>Dequeue</button>
//                 <button className="action-button" onClick={handlePeek}>Peek</button>
//                 <button className="action-button" onClick={handleCheckFull}>Check Full</button>
//                 <button className="action-button" onClick={handleCheckEmpty}>Check Empty</button>
//             </div>
//         </div>
//     );
// }

// export default Queue;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Queue.css';

function Queue() {
    const [queues, setQueues] = useState([]);
    const [ setFronts] = useState([]);
    const [queuesSizes, setQueuesSizes] = useState([]);
    const [initialized, setInitialized] = useState(false);

    const initializeQueues = () => {
        const numQueues = parseInt(prompt('Enter the number of queues:'));
        if (isNaN(numQueues) || numQueues <= 0) {
            alert('Invalid number of queues');
            return;
        }

        const sizes = [];
        for (let i = 0; i < numQueues; i++) {
            const size = parseInt(prompt(`Enter the size for queue ${i}:`));
            if (isNaN(size) || size <= 0) {
                alert('Invalid size for queue ' + i);
                return;
            }
            sizes.push(size);
        }

        setQueues(Array(numQueues).fill().map(() => []));
        setFronts(Array(numQueues).fill(0));
        setQueuesSizes(sizes);
        setInitialized(true);
    };

    const reinitializeQueues = () => {
        setInitialized(false);
        initializeQueues();
    };

    const isFull = (q) => queues[q].length === queuesSizes[q];
    const isEmpty = (q) => queues[q].length === 0;

    const enqueue = (q, data) => {
        if (isFull(q)) {
            alert(`Queue ${q} is full`);
            return;
        }
        setQueues((prevQueues) => {
            const newQueues = [...prevQueues];
            newQueues[q] = [...newQueues[q], data];
            return newQueues;
        });
    };

    const dequeue = (q) => {
        if (isEmpty(q)) {
            alert(`Queue ${q} is empty`);
            return;
        }
        const dequeuedElement = queues[q][0];
        setQueues((prevQueues) => {
            const newQueues = [...prevQueues];
            newQueues[q] = newQueues[q].slice(1);
            return newQueues;
        });
        return dequeuedElement;
    };

    const peek = (q) => {
        if (isEmpty(q)) {
            alert(`Queue ${q} is empty`);
            return;
        }
        return queues[q][0];
    };

    const handleEnqueue = () => {
        const q = prompt('Enter queue number:');
        if (q !== null && !isNaN(parseInt(q))) {
            const queueNumber = parseInt(q);
            if (queueNumber >= 0 && queueNumber < queues.length) {
                const data = prompt('Enter data:');
                if (data !== null && !isNaN(parseInt(data))) {
                    enqueue(queueNumber, parseInt(data));
                } else {
                    alert('Invalid data input');
                }
            } else {
                alert('No queue found');
            }
        } else {
            alert('Invalid queue number input');
        }
    };

    const handleDequeue = () => {
        const q = prompt('Enter queue number:');
        if (q !== null && !isNaN(parseInt(q))) {
            const queueNumber = parseInt(q);
            if (queueNumber >= 0 && queueNumber < queues.length) {
                const data = dequeue(queueNumber);
                if (data !== undefined) {
                    alert(`Dequeued data: ${data}`);
                }
            } else {
                alert('No queue found');
            }
        } else {
            alert('Invalid queue number input');
        }
    };

    const handlePeek = () => {
        const q = prompt('Enter queue number:');
        if (q !== null && !isNaN(parseInt(q))) {
            const queueNumber = parseInt(q);
            if (queueNumber >= 0 && queueNumber < queues.length) {
                const data = peek(queueNumber);
                if (data !== undefined) {
                    alert(`Front data: ${data}`);
                }
            } else {
                alert('No queue found');
            }
        } else {
            alert('Invalid queue number input');
        }
    };

    const handleCheckFull = () => {
        const q = prompt('Enter queue number:');
        if (q !== null && !isNaN(parseInt(q))) {
            const queueNumber = parseInt(q);
            if (queueNumber >= 0 && queueNumber < queues.length) {
                if (isFull(queueNumber)) {
                    alert(`Queue ${q} is full`);
                } else {
                    alert(`Queue ${q} is not full`);
                }
            } else {
                alert('No queue found');
            }
        } else {
            alert('Invalid queue number input');
        }
    };

    const handleCheckEmpty = () => {
        const q = prompt('Enter queue number:');
        if (q !== null && !isNaN(parseInt(q))) {
            const queueNumber = parseInt(q);
            if (queueNumber >= 0 && queueNumber < queues.length) {
                if (isEmpty(queueNumber)) {
                    alert(`Queue ${q} is empty`);
                } else {
                    alert(`Queue ${q} is not empty`);
                }
            } else {
                alert('No queue found');
            }
        } else {
            alert('Invalid queue number input');
        }
    };

    return (
        <div className="container">
            <div className="title">Queue Operations</div>
            {!initialized ? (
                <button className="action-button" onClick={initializeQueues}>Initialize Queues</button>
            ) : (
                <button className="action-button" onClick={reinitializeQueues}>Reinitialize Queues</button>
            )}
            <div className="card-container">
                {queues.map((queue, queueIndex) => (
                    <div className="card" key={queueIndex}>
                        <div className="card-content">
                            <div className="queue-title">Queue {queueIndex}</div>
                            <div className="elements">
                                {queue.map((element, index) => (
                                    <div className="queue-element" key={index}>{element}</div>
                                ))}
                            </div>
                            <div className="progress-bar-container">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${(100 * queue.length) / queuesSizes[queueIndex]}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="action-button" onClick={handleEnqueue}>Enqueue</button>
                <button className="action-button" onClick={handleDequeue}>Dequeue</button>
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

export default Queue;
