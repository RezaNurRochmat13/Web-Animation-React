import React from 'react';
import '../../Mammals.scss';

class SingaPages extends React.Component {
    
    render() {
        return (
            <div className="Container">
                <a href="/mamalia" className="previous">&laquo; Balik nang Kategori</a>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://image.freepik.com/free-vector/cartoon-lion-posing-white-background_29190-5183.jpg"
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