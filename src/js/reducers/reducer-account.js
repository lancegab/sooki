export default function(state='', action){
     switch (action.type) {
          case "NEW_ACCOUNT":
               state = action.payload;
               return state;
     }
  return state;
}
