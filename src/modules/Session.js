/**
 * Created by mauriciofs on 31/08/16.
 */

class Session {
    getSession(){
        return false;
    }

    validateUser(user, pass){
        if(user !== 'admin') return false;
        
        return true;
    }
}

export default new Session();