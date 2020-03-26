import React from 'react';
import KanguruImages from '../../img/kanguru.jpeg';

class KanguruPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KanguruImages}
                            width="200px" height="200px" alt="kanguru" />
                            </div>
                            <div className="col-md-7">
                                Kanguru iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default KanguruPage;