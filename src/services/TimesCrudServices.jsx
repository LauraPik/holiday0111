import firebase from "../firebase";

export const addPhoto = (data) =>{
    firebase
    .firestore()
    .collection('photo')
    .add(data)
    
}

export const getAllPhotos = (onPhotoChanged) =>{
    firebase
    .firestore()
    .collection('photo')
    .onSnapshot((snapshot)=>{
        const newPhoto = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }))
        onPhotoChanged(newPhoto)

    })

}

export const showById = (item, id) =>{
    firebase
    .firestore()
    .collection('photo')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}