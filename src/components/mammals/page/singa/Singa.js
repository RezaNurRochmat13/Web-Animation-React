import React from 'react';
import SingaImages from '../../img/singa.jpg';

class SingaPages extends React.Component {
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={SingaImages}
                            width="200px" height="200px" alt="singa" />
                            </div>
                            <div className="col-md-7">
                                Singo iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingaPages;