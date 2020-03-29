import React from 'react';
import SalamanderImages from '../../img/salamander.jpg';

class SalamanderPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={SalamanderImages}
                            width="200px" height="200px" alt="salamander" />
                            </div>
                            <div className="col-md-7">
                                Salamander iku urip nang darat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalamanderPage;