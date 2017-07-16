export default function(state='', action){
     switch (action.type) {
          case "NEW_USERNAME":
               state = action.payload;
               return state;
     }
  return state;
}
