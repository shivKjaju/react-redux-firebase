import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'

import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'

import { composeWithDevTools } from 'redux-devtools-extension';

import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


// withExtraArgument allows you to pass getFirebase and getFirestore that can be accessed in actions to perform async tasks
const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase, fbConfig, { attachAuthIsReady: true}),
  composeWithDevTools()
  // reactReduxFirebase(fbConfig)
  )
  );


const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    userProfile: 'users',
    presence: 'presence',
    sessions: 'sessions'
};

const AuthIsLoaded = ( {children} ) =>{
  const auth = useSelector(state=>state.firebase.auth)
  if(!isLoaded(auth)) return <div className="center">Loading...</div>
  return children
}

  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
       <App />
       </AuthIsLoaded>
       </ReactReduxFirebaseProvider>
      </Provider>,
     document.getElementById('root')
   );



