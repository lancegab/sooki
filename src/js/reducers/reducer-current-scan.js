export default function(state={}, action){
     switch (action.type) {
          case "NEW_SCAN":
               state = action.payload;
               return state;
     }
  return state;
}
