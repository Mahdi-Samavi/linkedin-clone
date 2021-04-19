import { useState, useEffect } from 'react';
import firebase from '../firebase';
import Post from './Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let doc = firebase.collection('posts');
    });

    return (
        <div></div>
    );
}