import React from "react";
import Alert from '@material-ui/lab/Alert';

const ErrorItem = ({message}) => {
    return (
        <Alert severity="error">{message}</Alert>
    )
};

export default ErrorItem;
