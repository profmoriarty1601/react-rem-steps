import { React, useEffect, useRef } from 'react';

function User(props) {

    const lastVal = useRef();

    useEffect(() => {
        lastVal.current = props.count;
    })

    const prevProps = lastVal.current

    return (
        <div>
            <h3>User Component</h3>
            <br />
            <h4>Current Val : {props.count}</h4>
            <h5>Previous Val : {prevProps}</h5>
        </div>
    )
}

export default User;