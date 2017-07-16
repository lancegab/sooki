export default function(state='', action){
     switch (action.type) {
          case "NEW_PASSWORD":
               state = action.payload;
               return state;
     }
  return state;
}
