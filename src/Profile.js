import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export function Profile() {
    const { user, isAuthenticated, isLoggedIn  } = useAuth0();
    if (isLoggedIn) {
        return <div>Loading ...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}
