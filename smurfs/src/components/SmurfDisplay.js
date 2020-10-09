import React, { useEffect } from 'react';
import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';

function SmurfDisplay(props) {
    const { fetchSmurfs, smurfs } = props;

    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs]);

    return (
        <div>
            {smurfs.map((smurf) => (
                <div key={smurf.name}>
                    <h1>{smurf.name}</h1>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))}
            
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect( mapStatetoProps, { fetchSmurfs } )(SmurfDisplay);