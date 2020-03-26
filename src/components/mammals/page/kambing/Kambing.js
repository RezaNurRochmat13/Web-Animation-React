import React from 'react';
import KambingImages from '../../img/kambing.jpg';

class KambingPages extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KambingImages}
                            width="200px" height="200px" alt="goats" />
                            </div>
                            <div className="col-md-7">
                                Wedhus iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default KambingPages;