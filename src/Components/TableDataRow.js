import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1) return "Admin";
        else if(this.props.permission === 2) return "Moderator";
        else return "Normal User";
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteClick = (idUser) => {
        this.props.deleteClick(idUser);
        
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.editClick()}><i className="fas fa-edit" />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteClick(this.props.id)}><i className="fas fa-trash" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;