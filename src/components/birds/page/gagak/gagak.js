import React from 'react';
import GagakImg from '../../img/gagak.jpeg';

class GagakPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={GagakImg}
                            width="200px" height="200px" alt="dogs" />
                            </div>
                            <div className="col-md-7">
                                Manuk gagak iku warnane ireng.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}