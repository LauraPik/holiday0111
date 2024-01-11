import firebase from "../firebase";

export const addWork = (data) =>{
    firebase
    .firestore()
    .collection('photo')
    .add(data)
    
}