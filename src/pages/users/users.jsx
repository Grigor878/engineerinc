import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, clearUser } from '../../store/slices/usersSlice'
import { Loader } from '../../components/loader/loader'
import { Link } from 'react-router-dom';
import styles from './users.module.scss';

const Users = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const { loading, users } = useSelector((state => state.users))

  return (
    loading
      ? <Loader />
      : <main>
        <div className={styles.users}>
          {users?.map(({ id, name, email, dateJoined }) => {
            return (
              <Link
                key={id}
                to={`${id}`}
                className={styles.users_card}
                onClick={() => dispatch(clearUser())}
              >
                <h3>{name}</h3>
                <p>{email}</p>
                <span>{dateJoined}</span>
              </Link>
            )
          })}
        </div>
      </main>
  )
}

export default Users