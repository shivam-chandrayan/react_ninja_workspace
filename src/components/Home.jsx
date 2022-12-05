import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'
import Logo from './Logo';
import Pagination from './Pagination';
import UserCard from './UserCard';

import './Home.css';

export default function Home() {
    if (!localStorage.getItem('authStatus'))
        return <Navigate to='/login' />
    
    let [page, setPage] = useState(1);
    let [userData, setUserData] = useState([]);
    let [maxPage, setMaxPage] = useState(1);
    
    useEffect(() => {
        let url = new URL('https://reqres.in/api/users')
        let params = { page: page }
        url.search = new URLSearchParams(params).toString()
        fetch(url)
            .then(res => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json()
                } else {
                    throw Error(res.statusText);
                }
            })
            .then(data => {
                setUserData(data.data);
                setMaxPage(data.total_pages);
            })
        .catch(error => console.log(error))
    }, [page]);
    
    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <div className='home-container row'>
            <nav className="navbar navbar-light bg-primary col-12">
                <Logo className="navbar-brand mb-0 h1"/>
            </nav>
            <div className="users-list-wrapper col-12">
                <div className="row p-5">
                    {userData.map(user => <UserCard key={user.id} user={user} />)}
                </div>
            </div>
            <Pagination currPage={page} totalPages={maxPage} onPageChange={handlePageChange} />
        </div>
    )
}