export default function(state='', action){
     switch (action.type) {
          case "NEW_TYPE":
               state = action.payload;
               return state;
     }
  return state;
}
