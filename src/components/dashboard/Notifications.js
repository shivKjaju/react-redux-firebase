import React from 'react';
import moment from 'moment';

const Notifications = (props) =>{
    const { notifications } = props;
    return (
      <div className="secton">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Notificaions</span>
                  <ul className="notifications">
                      { notifications && notifications.map(e => {
                          return(
                              <li key={e.id}>
                                  <span className="pink-text">{e.user} </span>
                                  <span>{e.content}</span>
                                  <div className="grey-text note-date">
                                      {moment(e.time.toDate()).fromNow()}
                                  </div>
                              </li>
                          )
                      })}
                  </ul>
              </div>
          </div>
      </div>
    )
}

export default Notifications