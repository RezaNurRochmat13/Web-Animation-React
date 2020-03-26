import React from 'react';
import AnjingImages from '../../img/anjing.jpg';

class AnjingPages extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={AnjingImages}
                            width="200px" height="200px" alt="dogs" />
                            </div>
                            <div className="col-md-7">
                                Segawon iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnjingPages;