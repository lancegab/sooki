export default function(state=[], action){
     switch (action.type) {
          case "GET_VENDOR_LIST":
               state = action.payload;
               return state;
     }
  return state;
}
