import React from 'react';
import './Core.css';

class Core extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">Content 1 appeared here</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">Content 2 appeared here</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">Content 3 appeared here</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Core;