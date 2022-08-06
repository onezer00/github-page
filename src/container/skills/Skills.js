import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Skills extends Component {
    render () {
        return (
            <div className="App">
                <header className=''>
                    <div>
                        <div className=''>
                            <Link to='/' className="center">
                                <button className="btn btn-primary">Home</button>
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}