import React from 'react';
import KatakPohonImages from '../../img/katak-pohon.jpg';

class KatakPohonPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KatakPohonImages}
                            width="200px" height="200px" alt="kodhok_uwit" />
                            </div>
                            <div className="col-md-7">
                                Kodhok uwit iku urip nang uwit-uwitan.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KatakPohonPage;