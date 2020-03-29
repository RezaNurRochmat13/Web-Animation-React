import React from 'react';
import KatakImages from '../../img/kodok.png';


class KatakPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KatakImages}
                            width="200px" height="200px" alt="kodhok" />
                            </div>
                            <div className="col-md-7">
                                Kodhok iku urip nang loro dunyo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KatakPage;