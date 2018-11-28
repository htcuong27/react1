import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteClick = (idUser) => {
        this.props.deleteClick(idUser);
    }

    mappingDataUser = () => this.props.dataUsers.map((value, key) => (
        <TableDataRow 
        deleteClick = {(idUser) => this.deleteClick(idUser)}
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFun(value)} 
        name={value.name} 
        key={key} id={value.id} 
        tel={value.tel} 
        permission={value.permission} />
    ))
    


    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;