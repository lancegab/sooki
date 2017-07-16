export default function(state={}, action){
     switch (action.type) {
          case "FIND_VENDORS":
               state = action.payload;
               return state;
     }
  return state;
}
