import firebase from 'firebase';

class AuthService {
    login(providerNm) {
        const authProvider = new firebase.auth['${providerNm}AuthProvider']();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;