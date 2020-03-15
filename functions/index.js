const functions = require('firebase-functions');

// to interact with different services like authentication service and firestore service
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// 

const createNotification = (notification => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
})

// cloud function that riggers whenever a new project is created
exports.onProjectCreate = functions.firestore
    .document('/projects/{projectId}')
    .onCreate(doc =>{
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
})
