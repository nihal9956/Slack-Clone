const { SET_USER } = require("../actionType/actionType")

const initialState={
    user:null
}

const reducer=(state=initialState,action)=>{

    if(action.type===SET_USER){

        return {
            ...state,
            user:action.user
        }
    }

    return {
        ...state
    }

}

export default reducer