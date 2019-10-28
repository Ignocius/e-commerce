import ShopActionTypes  from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSucces = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    console.log('called')
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionsStart());
        

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSucces(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error)));
    }
}