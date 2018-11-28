import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        })
        this.props.getUserEditInfo(info);
        
    }
    
    isChange = (event) => {
        this.setState({
            temp: event.target.value
        });
        this.props.getText(this.state.temp)
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>;
        }
    }
    
    render() {
        return (
            <div className="col-12">
                {this.props.editUserStatus === true && <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)} userEditObject={this.props.userEditObject}  changeEditUserStatus={() => this.props.changeEditUserStatus()}/>}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => { this.isChange(event) }} name="textSearch" placeholder="Nhập tên cần tìm" />
                        <div className="btn btn-info" onClick={(keyword) => { this.props.getText(this.state.temp) }}>Tìm</div>
                    </div>
                </div>
                <hr />
                {this.hienThiNut()}
            </div>
        );
    }
}

export default Search;