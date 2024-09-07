import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';

export default function UserProfile() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div>
      <div className="header">Your Profile</div>
      <div className="profile-name">{user.firstName} {user.lastName}</div>
      <div className="profile-username">{user.username}</div>
      <div className="profile-email">{user.email}</div>
      <div className="profile-address">Shipping Address: {user.address || 'None Provided'}</div>
      <button className="orders-btn" type="button" onClick={() => router.push('/user/orders')}>View Past Orders</button>
    </div>
  );
}
