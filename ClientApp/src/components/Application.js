import React from 'react';
import TextField from '@material-ui/core/TextField';
import './NavMenu.css';


class Application extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        console.log(localStorage.getItem("user"));
    }
    onSubmit() {

    }
    render() {
        return (
            <div>
                <form className="containers" noValidate>
                    <TextField
                        id="date"
                        label="Select Log Date"
                        type="date"
                        defaultValue="2017-05-24"
                        className="textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <button type="button" className="btn btn-sm btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Application;