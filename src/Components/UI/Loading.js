import React from 'react';
import classes from './Loading.module.css';

function Loading() {
    return (
        <div className={classes.LoadingContainer}>
            <div className={classes.LoadingOverlay} />
            
            <div className={classes['loadingio-spinner-double-ring-r16pa359n8']}><div className={classes["ldio-o7lxkxdavg"]}>
                <div></div> <div></div> <div><div></div></div> <div><div></div></div></div>
            </div>

        </div>
    );
}

export default Loading;