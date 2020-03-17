import React from 'react';
import '../../Mammals.scss';

class KucingPages extends React.Component {
    
    render() {
        return (
            <div className="Container">
                <a href="/mamalia" className="previous">&laquo; Balik nang Kewan Mamalia</a>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://previews.123rf.com/images/jaaakworks/jaaakworks1511/jaaakworks151100094/48211278-cartoon-cats-standing.jpg"
                            width="200px" height="200px" alt="cats" />
                            </div>
                            <div className="col-md-7">
                                Cemeng iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KucingPages;