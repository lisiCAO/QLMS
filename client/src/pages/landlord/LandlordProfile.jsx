import React, { useState, useEffect } from 'react'; 
import UserProfile from '../../components/account/UserProfile';
import ApiService from '../../services/ApiService';

const LandlordProfile = () => {
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
            <UserProfile userData={userData} />
        </div>
    );
};

export default LandlordProfile;
