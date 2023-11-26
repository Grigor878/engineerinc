import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUserData } from '../../../store/slices/usersSlice'
import { useParams } from 'react-router-dom'
import styles from './singleUser.module.scss'
import { Loader } from '../../../components/loader/loader'

const SingleUser = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleUserData(id))
    }, [dispatch, id])

    const { singleUser } = useSelector((state => state.users))
    console.log(singleUser)

    return (
        !singleUser
            ? <Loader />
            : <main>
                <div className={styles.singleUser}>
                    <div className={styles.singleUser_top}>
                        <div>
                            <h3>{singleUser?.name}</h3>
                            <p>{singleUser?.email}</p>
                        </div>
                        <span>{singleUser?.dateJoined}</span>
                    </div>

                    {singleUser?.reports?.length
                        ? <h2>Reports</h2>
                        : <h2>There is no reports</h2>}
                    <div className={styles.singleUser_reports}>
                        {singleUser?.reports?.length
                            ? singleUser?.reports?.map(({ id, title, content, dateCreated }) => {
                                return (
                                    <div key={id} className={styles.singleUser_report}>
                                        <h4>{title}</h4>
                                        <p>{content}</p>
                                        <span>{dateCreated}</span>
                                    </div>
                                )
                            }) : null}
                    </div>
                </div>
            </main >
    )
}

export default SingleUser