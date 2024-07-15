import React from 'react';
import './Controls.css';

function disableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.disabled = true;
    }

    const sliders = document.querySelectorAll("input[type='range']");
    for (const slider of sliders) {
        slider.disabled = true;
    }
}

const Controls = ({ onReset, onMergeSort, onQuickSort, onBubbleSort, onInsertionSort, onSelectionSort, onSpeedChange, onSizeChange, size, speed }) => {
    return (
        <div className='bars'>
            <div className="buttons-bar">
                <button id='reArr' onClick={onReset}> Generate New Array </button>
                <button id='Merge' onClick={() => {
                    onMergeSort();
                    disableButtons();
                }}> Merge Sort </button>
                <button id='Quick' onClick={() => {
                    onQuickSort();
                    disableButtons();
                }}> Quick Sort </button>
                <button id='Bubble' onClick={() => {
                    onBubbleSort();
                    disableButtons();
                }}> Bubble Sort </button>
                <button id='Insertion' onClick={() => {
                    onInsertionSort();
                    disableButtons();
                }}> Insertion Sort </button>
                <button id='Selection' onClick={() => {
                    onSelectionSort();
                    disableButtons();
                }}> Selection Sort </button>
            </div>
            <div className='top-bar'>
                <div className='display'>
                    <label style={{ fontFamily: "Arial", color: "aqua" }}><span>Array Size:</span> </label>
                    {size}
                    <br />
                    <label style={{ fontFamily: "Arial", color: "aqua" }}><span>Speed:</span></label>
                    {speed}
                </div>
                <div className='speed-slider'>
                    <label style={{ fontSize: '14px', color: "white", fontWeight: "bold" }}> Speed </label>
                    <input id='Speedbar' type='range' min='0' max='100' defaultValue={10} step={1} onChange={onSpeedChange} />
                </div>
                <div className='array-slider'>
                    <label style={{ fontSize: '14px', color: "white", fontWeight: "bold" }}> Array Size </label>
                    <input id='Sizebar' type='range' min='10' max={200} defaultValue={100} step={10} onChange={onSizeChange} />
                </div>
            </div>
        </div>
    );
}

export default Controls;
