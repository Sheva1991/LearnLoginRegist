import ProfileCard from 'components/ProfileCard';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from './actions';
import { selectUserProfile } from './selectors';

const UserInfo = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUserProfile)
    const params = useParams<{ id: string }>();
    const id = +params.id

    useEffect(() => {
        dispatch(fetchUserProfile(id))
    }, [id, dispatch])

    return (
        <>
            <ProfileCard profile={profile} />
        </>
    )
}

export default UserInfo
