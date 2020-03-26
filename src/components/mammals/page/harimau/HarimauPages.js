import React from 'react';
import HarimauImages from '../../img/harimau.jpg';

class HarimauPages extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={HarimauImages}
                            width="200px" height="200px" alt="tiger" />
                            </div>
                            <div className="col-md-7">
                                Macan iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HarimauPages;