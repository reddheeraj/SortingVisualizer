import React from 'react';
import './SortingVisualizer.css';
import { mergeSort } from '../SortingAlgorithms/mergeSort';
import { bubbleSort } from '../SortingAlgorithms/bubbleSort';
import { quickSort } from '../SortingAlgorithms/quickSort';
import { insertionSort } from '../SortingAlgorithms/insertionSort';
import { selectionSort } from '../SortingAlgorithms/selectionSort';
import Controls from '../components/Controls';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array: [],
            speed: 10,
            size: 100,
            width: 8,
        };
    } 

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.size; i++) {
            array.push(randomIntFromInterval(5, 400));
        }
        this.setState({array});
        this.enable();


        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for(let i = 0; i < this.state.size; i++) {
                arrayBars[i].style.backgroundColor = '#fff';
            }
        })
    }

    mergeSort() {
        const animations = mergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];

                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'pink';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * this.state.speed);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
        
        setTimeout(() => {
            this.enable();
        }, this.state.speed * animations.length);
    }


    insertionSort() {
        const animations = insertionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, choice] = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            // const barOneStyle = document.getElementsByClassName('array-bar')[barOneIdx].style;
            // const barTwoStyle = document.getElementsByClassName('array-bar')[barTwoIdx].style;
            // //const color = i % 3 === 0 ? 'pink' : 'red';
            
            switch(choice) {
                case "colorChange":
                    setTimeout(() => {  //color change
                        barOneStyle.backgroundColor = 'red';
                        barTwoStyle.backgroundColor = 'red';
                    } , i * this.state.speed);
                    break;
                case "colorRev":
                    setTimeout(() => { //color revert 
                        barOneStyle.backgroundColor = 'pink';
                        barTwoStyle.backgroundColor = 'pink';
                    } , i * this.state.speed);
                    break;
                case "key":
                    setTimeout(() => {  //key is the index of the array
                        barOneStyle.backgroundColor = '#353ccac2';
                    } , i * this.state.speed);
                    break;
                case "swap":
                    setTimeout(() => { //swap
                        let temp = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = temp;
                    } , i * this.state.speed);
                    break;
                default: break;
                }
            }

        // const arrayBars = document.getElementsByClassName('array-bar');
        // for (let i = 0; i < arrayBars.length; i++) {
        //     setTimeout(() => {
        //         const barOneStyle = arrayBars[i].style;
        //         barOneStyle.backgroundColor = 'pink';
        //     } , animations.length * 0.1);
        // }
        setTimeout(() => {
            this.enable();
        }, this.state.speed * animations.length);
    }

    selectionSort() {
        const animations = selectionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, choice] = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            switch(choice) {
                case "colorChange": 
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'red';
                        barTwoStyle.backgroundColor = 'red';
                    }, i * this.state.speed);
                    break;
                case "colorRev":
                    setTimeout(() => {
                        barTwoStyle.backgroundColor = 'pink';
                    }, i * this.state.speed);
                    break;
                case "swap":
                    setTimeout(() => {
                        let temp = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = temp;
                    }, i * this.state.speed);
                    break;
                case "colorRevall":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'pink';
                        barTwoStyle.backgroundColor = 'pink';
                    }, i * this.state.speed);
                    break;
                default: break;
            }
        }
        // const arrayBars = document.getElementsByClassName('array-bar');
        // for (let i = 0; i < arrayBars.length; i++) {
        //     setTimeout(() => {
        //         const barOneStyle = arrayBars[i].style;
        //         barOneStyle.backgroundColor = 'pink';
        //     }, animations.length * 10);
        // }

        setTimeout(() => {
            this.enable();
        }, this.state.speed * animations.length);
    }

    bubbleSort() {
        const animations = bubbleSort(this.state.array);
        //console.log(animations[0]);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, choice] = animations[i];
            //console.log(barOneIdx, barTwoIdx, choice);
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'pink';
            // if (i % 3 === 0 || i % 3 === 2) {
            //     setTimeout(() => {
            //         barOneStyle.backgroundColor = color;
            //         barTwoStyle.backgroundColor = color;
            //     }, i * 5);
            // }
            // else {
            //     setTimeout(() => {
            //         let height = barOneStyle.height;
            //         barOneStyle.height = barTwoStyle.height;
            //         barTwoStyle.height = height;
            //     }, i * 5);
            // }
            switch(choice) {
                case "colorChange":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * this.state.speed);
                    break;
                case "swap":
                    setTimeout(() => {
                        let height = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = height;
                    }, i * this.state.speed);
                    break;
                case "colorRev":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'pink';
                        barTwoStyle.backgroundColor = 'pink';
                    }, i * this.state.speed);
                    break;
                default: break;
            }
        }
        // const arrayBars = document.getElementsByClassName('array-bar');
        // for (let i = 0; i < arrayBars.length; i++) {
        //     setTimeout(() => {
        //         const barOneStyle = arrayBars[i].style;
        //         barOneStyle.backgroundColor = 'pink';
        //     }, animations.length * 5);
        // }

        setTimeout(() => {
            this.enable();
        }, this.state.speed * animations.length);
    }

    quickSort() {
        const animations = quickSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, choice] = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            switch(choice) {
                case "pivot":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = '#353ccac2';
                    }, i * this.state.speed);
                    break;
                case "colorChange":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'red';
                        barTwoStyle.backgroundColor = 'red';
                    } , i * this.state.speed);
                    break;
                case "colorRev":
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'pink';
                        barTwoStyle.backgroundColor = 'pink';
                    } , i * this.state.speed);
                    break;
                case "swap":
                    setTimeout(() => {
                        let temp = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = temp;
                    } , i * this.state.speed);
                    break;
                default: break;
            }
        }

        setTimeout(() => {
            this.enable();
        }, this.state.speed * animations.length);
    }
    


    testSortAlgos() {
        for (let i = 0; i < 100; i++) { 
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = mergeSort(array.slice());
            console.log(ArearraysEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    onSlider(e) {
        let finalsize = e.target.value;
        this.setState({size: finalsize});

        if (finalsize <= 25)
            this.setState({
                width: 20
            });
        else if (finalsize > 25 && finalsize < 100) 
            this.setState({
                width: 8
            });
        else if (finalsize > 100 && finalsize < 200)
            this.setState({
                width: 4
            });
        else if (finalsize > 200 && finalsize < 315)
            this.setState({
                width: 2
            });


        this.resetArray();
    }

    onSpeed(e) {
        let finalspeed = e.target.value;
        this.setState({
            speed: finalspeed  
        });
    }



    disable() {
        const buttonArray = ["reArr", "Merge",
                             "Quick", "Bubble", 
                             "Insertion", "Selection", 
                             "Speedbar", "Sizebar"];
        for (let i = 0; i < buttonArray.length; i++) {
            let button = document.getElementById(buttonArray[i]);
            button.disabled = true;
            button.style.backgroundColor = "grey";
        }
    }

    enable() {
        const buttonArray = ["reArr", "Merge",
                             "Quick", "Bubble", 
                             "Insertion", "Selection",
                             "Speedbar", "Sizebar"];
        for (let i = 0; i < buttonArray.length; i++) {
            let button = document.getElementById(buttonArray[i]);
            button.disabled = false;
            button.style.backgroundColor = `rgb(82, 135, 209)`;
        }
    }


    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                <div className='arrays'>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{height: `${value}px`, width: `${this.state.width}px`}}>
                        </div>
                    ))}
                </div>
                <Controls
                    onReset={() => this.resetArray()}
                    onMergeSort={() => this.mergeSort()}
                    onQuickSort={() => this.quickSort()}
                    onBubbleSort={() => this.bubbleSort()}
                    onInsertionSort={() => this.insertionSort()}
                    onSelectionSort={() => this.selectionSort()}
                    onSpeedChange={(e) => this.onSpeed(e)}
                    onSizeChange={(e) => this.onSlider(e)}
                    size={this.state.size}
                    speed={this.state.speed}
                />
            </div>
        );
    }
}

//from some stackoverflow question I found on google lol
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

function ArearraysEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}


