import React, { useEffect } from 'react';
import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';

function SmurfDisplay(props) {
    const { fetchSmurfs } = props;

    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs]);

    return (
        null
    )
}

const mapStatetoProps = (state) => {
    return {
        state
    }
}

export default connect( mapStatetoProps, { fetchSmurfs } )(SmurfDisplay);