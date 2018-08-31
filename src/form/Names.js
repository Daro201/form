import React from 'react';
import Datapicker from './Datapicker';

const Names = () => (
    <form className="form-inline" onSubmit={(e) => {
        e.preventDefault();
        /*submitHandler(e.target.querySelector('input').value);*/
    }}>
        <div className="form-group">
            <label>First Name:</label>
            <input className="form-control" placeholder="John" />
        </div>
         <div className="form-group">
            <label>Last Name:</label>
            <input className="form-control" placeholder="Smith" />
        </div>
        <Datapicker />        
        <button type="submit" className="btn btn-default">Send</button>
    </form>
);

export default Names;