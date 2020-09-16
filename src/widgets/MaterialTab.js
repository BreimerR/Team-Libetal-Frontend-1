import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Tab from "@material-ui/core/Tab";


const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        padding: 2,
        margin: 4,
        minWidth: 0
    },
    wrapper: {
        fontWeight: "normal",
        letterSpacing: 0.5
    }
}))((props) => <Tab  {...props} />);


const MTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        padding: 2,
        margin: 4,
        minWidth: 0
    },
    wrapper: {
        fontWeight: "normal",
        letterSpacing: 0.5
    }
}))((
    props
) => <Tab {...props} />);


export default class MaterialTab extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    render() {

        return (
            <MTab ref={this.ref} {...this.props}/>
        );
    }
}