import React from 'react';
import KucingImages from '../../img/kucing.jpg';

class KucingPages extends React.Component {
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KucingImages}
                            width="200px" height="200px" alt="cats" />
                            </div>
                            <div className="col-md-7">
                                Cemeng iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KucingPages;