import ProfileCard from 'components/ProfileCard';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserDetails } from './actions';
import { selectUserFullProfile } from './selectors';


const DetailUser = () => {
    const dispatch = useDispatch()
    const profile = useSelector(selectUserFullProfile)
    const params = useParams<{ id: string }>();
    const id = +params.id

    useEffect(() => {
        dispatch(fetchUserDetails(id))
    }, [id, dispatch])

    return (
        <>
            <ProfileCard profile={profile} />
        </>
    )
}

export default DetailUser
