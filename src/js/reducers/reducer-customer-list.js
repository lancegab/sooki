export default function(state=[], action){
     switch (action.type) {
          case "GET_CUSTOMER_LIST":
               state = action.payload;
               return state;
     }
  return state;
}
