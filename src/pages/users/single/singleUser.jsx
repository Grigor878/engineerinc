import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../../../store/slices/usersSlice'

const SingleUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleUser())
    }, [dispatch])

    const { singleUser } = useSelector((state => state.users))
    console.log(singleUser)

    return (
        <div>
            SingleUser
        </div>
    )
}

export default SingleUser