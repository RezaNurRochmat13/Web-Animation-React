import React from 'react';
import '../../Mammals.scss';

class LumbaLumbaPages extends React.Component {
    
    render() {
        return (
            <div className="Container">
                <a href="/mamalia" className="previous">&laquo; Balik nang Kategori</a>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://illustoon.com/photo/1783.png"
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