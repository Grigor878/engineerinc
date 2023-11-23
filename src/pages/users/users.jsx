import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/slices/usersSlice'
import { Loader } from '../../components/loader/loader'

const Users = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const { loading, users } = useSelector((state => state.users))
  console.log(loading);
  console.log(users);

  return (
    loading
      ? <Loader />
      : <div>
        <p>{users?.length}</p>
      </div>
  )
}

export default Users