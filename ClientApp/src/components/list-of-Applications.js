import React from 'react';
import { ApplicationDetails } from '../actions/application-actions';
import { connect } from 'react-redux';
//import  history  from '../helper/history';
import { Redirect } from 'react-router-dom'

class Applications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            applicationList: {},
        }
    }
    clickButton(application) {
        var url = window.location.href+"application/:" + application;
        localStorage.setItem("user", application);
        //history.push(url);
        return <Redirect to={url} />
    }
    populateList(application) {
        if (application.items.length != 0) {
            if (application.items.applications.length > 0) {
                return application.items.applications.map((application, i) => {
                    return (
                        <ul className="list-group" key={i}>
                            <li className="list-group-item">
                               <button className="btn btn-outline-primary list" onClick={() => this.clickButton(application.name)}>{application.name}</button></li>
                        </ul>
                    )
                });
            }
        }
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(ApplicationDetails());
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {this.populateList(this.props.application)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        application: state.application
    }
}
export default connect(mapStateToProps)(Applications);