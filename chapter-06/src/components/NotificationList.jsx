import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1, 
        message: "1번 알림", 
    }, 
    {
        id: 2, 
        message: "2번 알림", 
    }, 
    {
        id: 3, 
        message: "3번 알림", 
    }, 
];

let timer;

class NotificationList extends React.Component
{
    constructor(property)
    {
        super(property);

        this.state ={
            notifications: [], 
        };
    }

    componentDidMount()
    {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length)
            {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications, 
                });
            }
            else
            {
                clearInterval(timer);
            }
        }, 1000);
    }

    render()
    {
        return (
            <div>
                {this.state.notifications.map((notification) => <Notification key={notification.id} id={notification.id} message={notification.message} />)}
            </div>
        );
    }
}

export default NotificationList;