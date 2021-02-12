
import React, { useState } from 'react'
import Todolist from './Todolist';
import "./Guideline.css"

function Guideline() {
    const [inputlist, setinputlist] = useState();
    const [items, setitems] = useState([]);
    const itemEvent = (event) => {
        setinputlist(event.target.value);
    };
    const listitem = () => {
        setitems((old) => {
            return [...old, inputlist];
        })
        setinputlist('');
    }
    const deleteitem = (id) => {
        console.log('deleted.')
        setitems((old) => {
            return old.filter((arr, index) => {
                return id != index;
            })
        })
    }
    return (
        <div>
            <div className="main">
            <h1>Guidelines</h1>
            <br></br>
                <div>
                    
                    <input className="input_type" type='text' placeholder="Enter Guidelines"
                        onChange={itemEvent}
                        value={inputlist}
                    />
                    <button style={{ marginLeft: '10px' }}
                        onClick={listitem}
                        className="Addbutton"
                    >Add</button>
                    <br></br>
                    <br></br>
                    <ol>
                        {/* <li> {inputlist}</li> */}
                        {items.map((i, index) => {
                            return (<Todolist text={i}
                                key={index}
                                id={index}
                                onSelect={deleteitem}
                            ></Todolist>)
                        })}
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Guideline
