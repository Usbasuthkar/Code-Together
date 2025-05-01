import React from 'react';
import '../ExecutionModal.css';

const Execution = ({ output, onClose }) => {
    return (
        <div className="modalBackdrop">
            <div className="modalContent">
                <h2>Execution Result</h2>
                <pre className="outputBox">{output}</pre>
                <button className="btn closeBtn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Execution;
