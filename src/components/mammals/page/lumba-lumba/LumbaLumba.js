import React from 'react';
import LumbaLumbaImages from '../../img/lumba-lumba.png';

class LumbaLumbaPages extends React.Component {
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src={LumbaLumbaImages}
                            width="200px" height="200px" alt="dolphin" />
                            </div>
                            <div className="col-md-7">
                                LumbaLumba iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LumbaLumbaPages;