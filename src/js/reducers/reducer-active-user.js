export default function(state={}, action){
     switch (action.type) {
          case "SIGN_UP":
               state = action.payload;
               return action.payload;
          case "SIGN_IN":
               state = action.payload;
               return state;
     }
  return state;
}
