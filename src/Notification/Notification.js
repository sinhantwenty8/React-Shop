import React from 'react'
import { useNotification } from './NotificationContext'
import style from './Notification.module.css'

export default function Notification() {
    const {activeNotification} = useNotification()

    return (
        <div  className= {activeNotification? style.notificationCon:style.none}>
            <div>
                {activeNotification && <p className={activeNotification? style.message:style.none}>{activeNotification}</p>}
            </div>
        </div>
    )
}
