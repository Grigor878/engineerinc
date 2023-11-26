import React from 'react'
import { pages } from './data'
import { NavLink } from 'react-router-dom'
import styles from './aside.module.scss';

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <nav>
                <ul className={styles.aside_list}>
                    {pages?.map(({ id, name, path }) => {
                        return (
                            <li key={id}>
                                <NavLink
                                    to={path}
                                    className={styles.aside_link}
                                >{name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
