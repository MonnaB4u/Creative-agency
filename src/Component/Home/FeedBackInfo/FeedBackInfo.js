import React from 'react';

const FeedBackInfo = (props) => {
    const {img,name,work,info} = props.blog;
    return (
        <div className="card shadow-sm">
        <div className=" card-header d-flex  align-items-center">
            <img className="mx-3" src={img} alt="" width="60" />
            
            <div>
                <h6 className="text-primary">{name}</h6>
                <small>{work}</small>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text text-secondary mt-4">{info}</p>
        </div>
        
   </div>
    );
};

export default FeedBackInfo;