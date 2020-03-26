import React from 'react';
import KelinciImages from '../../img/kelinci.jpg';

class KelinciPages extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KelinciImages}
                            width="200px" height="200px" alt="rabbits" />
                            </div>
                            <div className="col-md-7">
                                Terwelu iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default KelinciPages;