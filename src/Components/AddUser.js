import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }



    isChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
        // Package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
    }

    render() {
        return (

            <div>
                {this.props.hienThiForm === true &&
                    <div className="col">
                        <form>
                            <div className="card border-primary mb-3 mt-2">
                                <div className="card-header">Thêm mới User</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Điện Thoại" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission" required>
                                            <option value>Lựa Quyền</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />


                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>}
            </div>
        );
    }
}

export default AddUser;