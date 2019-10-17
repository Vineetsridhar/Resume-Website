import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = {
    input: {
        color: "#e3c4a8",
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: 12
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#e3c4a8 !important"
    },
    
};

function CustomizedInputs(props) {
    const { classes } = props;
    return (
        <TextField
        style={{borderColor:'#fff'}}
        className={classes.input}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            className:classes.input
          }}
        multiline={classes.multiline}
        variant='outlined'
        />
    );
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
