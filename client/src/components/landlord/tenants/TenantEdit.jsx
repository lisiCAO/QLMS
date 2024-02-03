import React from 'react';
import { useParams } from 'react-router-dom';

const TenantEdit = () => {
    const { id } = useParams();
    const[selectedTenant, setSelectedTenant] = useState({});

    useEffect(() => {
        ApiService.fetchTenantById(id)
        .then((data) => {
            setSelectedTenant(data);
        })
        .catch((error) => {
            console.error('Error fetching Tenant:', error);
        });
    }, [id]);

    // TODO: Implement TenantEdit component logic here

    return (
        <div>
            {/* TODO: Add TenantEdit component content here */}
            <h1>TenantEdit Page</h1>
            <UpdateUserForm userData={selectedTenant} />
        </div>
    );
};

export default TenantEdit;
