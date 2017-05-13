import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../actions/taskList';
import '../App.css';

class TaskList extends Component {

    constructor(props) {
    super(props);
    
    this.state = {
    }
        
    }
    componentDidMount = () => {
        this.setState({taskList :  this.filterData(this.props.taskList)});
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({taskList :  this.filterData(nextProps.taskList)});
    }

    onAfterSaveCell = (row, cellName, cellValue)=>  {
        if (cellName === 'description'){
            let task = {
                id: row["id"],  
                description : cellValue,
            }                                
        this.props.actions.updateTask(task);
        } else if (cellName === 'durationTime') {
            let task = {
                id: row["id"],  
                durationTime : cellValue,
            }                                
        this.props.actions.updateTask(task); 
        } 
    }

    onBeforeSaveCell = (row, cellName, cellValue) => {
        const isNumber =  /^[0-9]*$/;   
        if (cellName === 'durationTime' && !isNumber.test(cellValue)) {
                alert('It is not number!');
                return false;
            }
        return true;
    }

    onAfterDeleteRow = (rowKeys) => {
        rowKeys.forEach((rowID, idx) => {
            this.props.actions.deleteTask({id: rowID})
        });
    }

    /*eslint-disable */
    filterData = (data) => {
        let taskList = data;
        return  taskList.filter((item)=>{ 
            if(!(item.finishTime === 0)) {
                return item
            }            
        });
    }
    /*eslint-enable */
   
    render() {
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell,
            afterSaveCell: this.onAfterSaveCell  
        };
        const selectRowProp = {
            mode: 'checkbox',
            bgColor: 'lavender'
        };
        const options = {
            afterDeleteRow: this.onAfterDeleteRow  
        };
        return (           
            <Grid>
                <Row className='table-delete-button fixed-footer'>
                   <Col>                     
                    <BootstrapTable data={this.state.taskList} cellEdit={ cellEditProp } 
                                    selectRow={ selectRowProp } deleteRow={ true } 
                                    options={ options } stripped pagination>
                        <TableHeaderColumn row='0' colSpan='2'>Task List</TableHeaderColumn>
                        <TableHeaderColumn row='1' isKey dataField='id' hidden>ID</TableHeaderColumn>
                        <TableHeaderColumn row='1' dataField='description'>Description</TableHeaderColumn>
                        <TableHeaderColumn row='1' dataField='durationTime'>Time</TableHeaderColumn>                            
                    </BootstrapTable> 
                    </Col>               
                </Row>  
            </Grid>                                                                       
        )
    }
}

function mapStateToProps(state) {
  return { taskList: state.taskList }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(taskActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);