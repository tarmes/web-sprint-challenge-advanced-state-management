import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../store/actions';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Styles = styled.div`
    .form-container {
        border: 2px solid white;
        border-radius: 10px;
        margin: 60px 10%;
        box-shadow: 0px 15px 25px rgba(0,0,0,.6);
    }

    .smurf-inputs {
        display: flex;
        flex-direction: column
    }

    label {
        padding: 15px;
    }
`

const initialSmurfValues = {
    name: '',
    age: '',
    height: '',
    id: ''
}

function SmurfForm(props) {

    const { isLoading, postSmurf } = props;

    const [smurf, setSmurf] = useState(initialSmurfValues);

    const handleChanges = evt => {
        const { name, value } = evt.target;
        setSmurf({ ...smurf, [name] : value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            name: smurf.name.trim(),
            age: smurf.age,
            height: smurf.height.trim(),
            id: smurf.name.trim()
        }
        postSmurf(newSmurf)
        setSmurf(initialSmurfValues)
    }

    const renderLoader = () => {
        return (
            <>
                <Loader
                    type="Audio"
                    color="#282c34"
                    height={30}
                    width={30}
                    timeout={5000} //30 secs
                    className="loader-button" 
                />
            </>
        )
    }


    return (
        <Styles>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                <div className='smurf-inputs'>
                        <label>
                            Name
                            <input 
                                type='text' 
                                name='name' 
                                onChange={handleChanges} 
                                value={smurf.name}
                            />
                        </label>
                        <label>
                            Age
                            <input 
                                type='number' 
                                name='age' 
                                onChange={handleChanges} 
                                value={smurf.age}
                            />
                        </label>
                        <label>
                            Height
                            <input 
                                type='text' 
                                name='height' 
                                onChange={handleChanges} 
                                value={smurf.height}
                            />
                        </label>                    
                    </div>
                    <div className='loader-button-container'>
                        <button>{isLoading ? renderLoader() : 'Add new smurf!'}</button>
                    </div>
                </form>
            </div>
        </Styles>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm);