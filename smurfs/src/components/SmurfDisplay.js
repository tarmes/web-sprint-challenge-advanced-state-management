import React, { useEffect } from 'react';
import { fetchSmurfs } from '../store/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Styles = styled.div`
    

    .smurf-container {
        border: 2px solid white;
        border-radius: 10px;
        margin: 30px 30%;
        box-shadow: 0px 15px 25px rgba(0,0,0,.6);
        background-color: lightblue;
    }

    h1 {
        font-size: 2.7em;
    }

    p {
        font-size: 1.7em;
    }
`

function SmurfDisplay(props) {
    const { fetchSmurfs, smurfs } = props;

    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs]);

    return (
        <Styles>
            <div>
                {smurfs.map((smurf) => (
                    <div className='smurf-container' key={smurf.name}>
                        <h1>name: {smurf.name}</h1>
                        <p>age: {smurf.age}</p>
                        <p>height: {smurf.height}</p>
                    </div>
                ))}
                
            </div>
        </Styles>
    )
}

const mapStatetoProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect( mapStatetoProps, { fetchSmurfs } )(SmurfDisplay);