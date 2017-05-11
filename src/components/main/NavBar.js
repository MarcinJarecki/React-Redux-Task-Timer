import React, { Component } from 'react';
import moment from 'moment';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from './../../actions/taskList';

class NavBar extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
          isAuthenticated: props.isAuthenticated,
          timer : { 
            buttonText: "Start",
            isEnable: false,
            value: 0,
            setIntervalID: 0,     
          },
          task : {
            id: 0,  
            description : '',
            finishTime: 0,
            startTime: 0,
            durationTime: 0
          }
        }              
    }

    renewTimer = (task) => {        
        let _this = this;
        const currentTime = moment().unix();
        const durationTime = Math.round((currentTime-task.startTime)/1000);

        const dataTask = {
            id: task.id,  
            description : task.description,
            finishTime: 0,
            startTime: task.startTime,
            durationTime: 0
        };

        this.setState({task: dataTask}); 

        let timerIntervalID = setInterval(function() {
            let currentTime = moment().unix();
            let newTime = Math.round((currentTime-_this.state.task.startTime));
            let newTimerValue = {
                ..._this.state.timer,
                value : newTime
            };
            _this.setState({timer : newTimerValue});
        },1000);

        const dataTimer = {
            buttonText: "Stop",
            isEnable: true,
            value: durationTime,
            setIntervalID: timerIntervalID 
        };      

        this.setState({timer : dataTimer });          
    }

    componentDidMount = () => {
        if (this.props.taskList && this.state.isAuthenticated) {
            if (this.props.taskList[0].finishTime === 0){
                this.renewTimer(this.props.taskList[0]);
            }
        }
    }

    setAuthStatus = (status) =>{
      this.props.setAuthStatus(status); 
      this.props.setAuthCookies(status);
      this.setState({isAuthenticated : status}); 
    }

    handleLoginClick = () =>{    
        this.setAuthStatus(true); 
    }

    handleLogoutClick = () =>{
       clearInterval(this.state.timer.setIntervalID);
       this.setAuthStatus(false);
    }

    handleDescriptionChange = (e) => {
        let taskData = {
            ...this.state.task,
            description: e.target.value
        }
        this.setState({task : taskData});

        if (this.state.timer.isEnable) {            
            this.props.actions.updateTask(taskData);
        }
    }

    startTimer = (e) =>{
        let _this = this;
        let startTime = moment().unix();
        let timerIntervalID;
        let taskDescription = document.getElementById("taskdescription").value;

        const uid = Math.random().toString(34).slice(2);
        let taskData = {
            ...this.state.task,
            description: taskDescription,
            id: uid,
            finishTime: 0,
            startTime: startTime,
            durationTime: 0
        }
        
        this.setState({task: taskData})
        this.props.actions.addTask(taskData);

        timerIntervalID = setInterval(function() {
            let currentTime = moment().unix();
            let newTime = Math.round((currentTime-_this.state.task.startTime));
            let newTimerValue = {
                ..._this.state.timer,
                value : newTime
            };
            _this.setState({timer : newTimerValue});
        },1000);
        
        let configTimerConfig = {
            ...this.state.timer,            
            buttonText : "Stop",
            isEnable: true,
            setIntervalID: timerIntervalID
        }
        this.setState({timer : configTimerConfig });           
    }

    stopTimer = () => {
        let configTimerConfig;
        let finishTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
        let task = {
            ...this.state.task, 
            durationTime: this.state.timer.value,
            finishTime: finishTime
        }                    
        clearInterval(this.state.timer.setIntervalID);
        this.props.actions.updateTask(task);
        configTimerConfig = {
            ...this.state.timer,
            id: 0,
            buttonText: "Start",
            isEnable: false,
            value: 0,
            setIntervalID: 0,
        }        
        this.setState({timer : configTimerConfig}); 
        let resetTaskData = {
            ...this.state.task,
            description: "",
            id: 0,
            finishTime: 0,
            startTime: 0,
            durationTime: 0
        }        
        this.setState({task: resetTaskData})               
    }

    handleTimerClick = (e) => {        
        if (!this.state.timer.isEnable) {
            this.startTimer(e);
        } else {
            this.stopTimer(e);
        }      
    }

    componentWillReceiveProps(nextProps) { 
        this.setState({isAuthenticated : nextProps.isAuthenticated});      
    }

    render() {
        let brandName = "Task timer";

        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{brandName}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                {this.state.isAuthenticated === true ? (
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl id="taskdescription" type="text" placeholder="Task description" onChange={this.handleDescriptionChange} value={this.state.task.description} />
                            </FormGroup>
                            {' '}
                            <Button bsStyle="primary" onClick={this.handleTimerClick}>{this.state.timer.buttonText}</Button>
                        </Navbar.Form>
                        <Navbar.Text>Task time: {this.state.timer.value} </Navbar.Text>
                        <Nav pullRight>
                            <NavItem href="/" onClick={this.handleLogoutClick}><Glyphicon glyph="user" /> LogOut</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                ) : (
                        <Navbar.Collapse>
                            <Navbar.Form pullRight>
                                <Button href="/tasks-list" bsStyle="success" type='submit' onClick={this.handleLoginClick}><Glyphicon glyph="log-in" /> Login</Button>
                            </Navbar.Form>
                        </Navbar.Collapse>
                    )
                }
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
  return { taskList: state.taskList }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(taskActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)( NavBar);

