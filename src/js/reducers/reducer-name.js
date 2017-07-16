export default function(state='', action){
     switch (action.type) {
          case "NEW_NAME":
               state = action.payload;
               return state;
     }
  return state;
}
