import React, {Component} from 'react';
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            rows: [],
        };
    }

    componentDidMount()
    {
        const {rows} = this.state;
        for (let row=0; row < 15; row++)
        {
            const currentRow = [];
            for (let column=0; column < 50; column++)
            {
                currentRow.push([]);
            }
            rows.push(currentRow);
        }
        this.setState({rows});
    }

    render() 
    {
        const {rows} = this.state;
        return (
            <div className="grid">
                {
                    rows.map((row, idx) => 
                    {
                        return (row.map((col, colIdx) => 
                        {
                            return (<Node key={colIdx} isStart={true} test={'foo'} test={'bar'} ></Node>)
                        }))
                    })
                }
            </div>
        );
    }
}