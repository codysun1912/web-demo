import React, { useState, useEffect, useRef } from 'react'
import Message from './Message';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase'
import SendMessage from './SendMessage';


export default function Chat() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className='overflow-auto'>
            <main className='flex flex-col p-[10px] relative '>
                {messages && messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </main>
            <div className='py-6 '> <SendMessage scroll={scroll} /></div>
            <span ref={scroll}></span>
        </div>
    )
}
