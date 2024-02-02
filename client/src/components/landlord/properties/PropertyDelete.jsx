import React from 'react';
import ApiService from './../../../services/ApiService';

const PropertyComponent = ({ id }) => {
    const handleDelete = () => {
        ApiService.deleteProperty(id)
            .then(() => {
                // 处理删除成功后的逻辑
            })
            .catch((error) => {
                // 处理删除失败后的逻辑
            });
    };

    return (
        <div>
            <h1>Property Component</h1>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PropertyComponent;