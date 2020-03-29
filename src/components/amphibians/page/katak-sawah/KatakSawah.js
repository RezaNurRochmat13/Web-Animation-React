import React from 'react';
import KatakSawahImages from '../../img/katak-sawah.jpeg';

class KatakSawahPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={KatakSawahImages}
                            width="200px" height="200px" alt="kodhok_sawah" />
                            </div>
                            <div className="col-md-7">
                                Kodhok sawah iku urip nang persawahan.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KatakSawahPage;