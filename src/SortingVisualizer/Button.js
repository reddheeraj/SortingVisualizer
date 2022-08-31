import React from 'react';
import '../index.css';
import './SortingVisualizer.css';

let color1 = `rgb(19, 88, 185)`;
let color2 = `rgb(82, 135, 209)`;

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    changetoDarkMode() {
        this.setState({
            isClicked: !this.state.isClicked
        });
        const bg = document.querySelector('body');
        const topbar = document.querySelector('.top-bar');
        const btnbar = document.querySelector('.buttons-bar');
        // const buttonArray = ["reArr", "Merge",
        //                      "Quick", "Bubble", 
        //                      "Insertion", "Selection", 
        //                      "Speedbar", "Sizebar"]

        // for (let i = 0; i < buttonArray.length; i++) {
        //     let button = document.getElementById(buttonArray[i]);
        //     if (this.state.isClicked) {
        //         button.style.backgroundColor = color1;
        //     }
        //     else { 
        //         button.style.backgroundColor = color2;
        //     }
        // }
        for (let i = 0; i < btnbar.children.length; i++) {
            let button = btnbar.children[i];
            button.style.backgroundColor = this.state.isClicked ? color1 : color2;
        }
        
        if (this.state.isClicked) {
            bg.style.backgroundColor = 'black';
            topbar.style.backgroundColor = `#F07900`;
            btnbar.style.backgroundColor = `#F07900`;
        } else {
            bg.style.backgroundColor = '#fff';
            topbar.style.backgroundColor = `rgb(212, 100, 100)`;
            btnbar.style.backgroundColor = `rgb(212, 100, 100)`;
        }
    }


    render() {
        return (
            <button onClick={() => {
                this.changetoDarkMode()
            }} style={
                {
                    position: 'absolute', 
                    top: '10px', 
                    height: '40px',
                    left: '580px',
                }}>
                {this.state.isClicked ? 'Dark Mode' : 'Light Mode'}
            </button>
        );
    }
    }