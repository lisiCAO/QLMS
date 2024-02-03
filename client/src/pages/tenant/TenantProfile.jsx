import React, {useEffect, useState} from 'react';
import UserProfile from '../../components/account/UserProfile';
import ApiService from '../../services/ApiService';

const TenantProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await ApiService.fetchUserData('user.userId');
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Failed to fetch user data'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; //  Set up a loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // 
    }

    return (
        <div>
            {/* TODO: Add LandlordProfile component content here */}
            <UserProfile />
        </div>
    );
};

export default TenantProfile;
