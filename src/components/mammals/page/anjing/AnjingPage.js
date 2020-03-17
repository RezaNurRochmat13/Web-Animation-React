import React from 'react';

class AnjingPages extends React.Component {
    render() {
        return (
            <div className="Container">
                <a href="/mamalia" className="previous">&laquo; Balik nang Kategori</a>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://img3.stockfresh.com/files/r/robuart/m/72/8823746_stock-vector-cute-purebred-dogs-cartoon-flat-vectors-icons-set.jpg"
                            width="200px" height="200px" alt="dogs" />
                            </div>
                            <div className="col-md-7">
                                Segawon iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnjingPages;