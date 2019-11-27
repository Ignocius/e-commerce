import React from 'react';
import Spinner from '../spinner/spinner.component';

console.log(Spinner)

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <Spinner />
    ) : (
            <WrappedComponent {...otherProps} />
        )
};

export default WithSpinner;