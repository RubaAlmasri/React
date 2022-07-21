export const counterReducer=(state=0,action)=>{
    console.log(action);
        switch(action.type)
        {
            case "increment":return state+parseInt(action.payload) ;
            case "decrement":return state-parseInt(action.payload);
            default : return state;
    
        }
    }