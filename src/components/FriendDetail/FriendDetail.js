import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h3> This is friend detail: {friendId} </h3>
            <h4>{friend.name}</h4>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;