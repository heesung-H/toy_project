import firebaseApp from './firebase';

class AuthService {
    login(providerNm) {
        const authProvider = new firebaseApp.auth[`${providerNm}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;