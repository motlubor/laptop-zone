import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div>
            <h1>Question and Answer Part</h1>

            <div className='answer-container'>
                <div className='centering'>
                    <h1 className='center'>How React Works</h1>
                    <h4>JSX in syntactic sugar</h4>
                    <p>JSX allow to write code like HTML in JavaScript code. JSX convert it to JavaScript object.</p>
                    <h4>Re renderer</h4>
                    <p>Basically, when React Component is first instantiated. A second render to update the state is called re-rendering.</p>
                    <h4>React re-conciliation</h4>
                    <p>React reconciliation is process of update browser DOM by comparing virtual by with diff algorithm. The reconciliation process make react work faster.</p>
                    <h4>React keys</h4>
                    <p>React keys are used to identify that which item in the list are change, updated or delete. Keys are use to give an identify to the element in the lists.</p>
                </div>
            </div>
        </div>
    );
};

export default Answer;