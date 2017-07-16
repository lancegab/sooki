export default function(state={}, action){
     switch (action.type) {
          case "FIND_CUSTOMERS":
               state = action.payload;
               return state;
     }
  return state;
}
