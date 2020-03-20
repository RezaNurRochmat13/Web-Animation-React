import React from 'react';

class KelinciPages extends React.Component {
    render() {
        return (
            <div className="Container">
                <a href="/mamalia" className="previous">&laquo; Balik nang Kategori</a>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img src="https://image.freepik.com/free-vector/happy-rabbit-cartoon_43633-129.jpg"
                            width="200px" height="200px" alt="rabbits" />
                            </div>
                            <div className="col-md-7">
                                Terwelu iku kewan iso mengandung lan menyusui.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default KelinciPages;