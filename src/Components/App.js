import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount () {
    var temp = JSON.parse(localStorage.getItem('userData'));
    if(!localStorage.getItem('userData')){
      localStorage.setItem('userData', JSON.stringify(DataUser));
      this.setState({
        data: temp
      });
    }
    else {
      this.setState({
        data: temp
      });
    }
  }

  deleteClick = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission,10);
    let {data} = this.state;
    data.push(item);
    this.setState({
      data: data
    })
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getTextSearch = (keyword) => {
    this.setState({
      searchText: keyword
    });
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getUserEditInfo = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  render() {
    var result = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item);
      }
      
    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
                userEditObject={this.state.userEditObject}
                changeEditUserStatus = {() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
                getText={(keyword) => this.getTextSearch(keyword)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm} />
              <TableData 
              deleteClick = {(idUser) => this.deleteClick(idUser)}
              changeEditUserStatus = {() => this.changeEditUserStatus()} editFun={(user) => {this.editUser(user)}} dataUsers={result} />
              <AddUser add={(name,tel,permission) => this.getNewUserData(name,tel,permission)} hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
