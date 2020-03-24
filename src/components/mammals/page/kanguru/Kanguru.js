import React from 'react';

class KanguruPage extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyUYId5TxanORahN5JR2SRX4g6-cHlmSB4hkFLN03mJ1ZrImke"
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