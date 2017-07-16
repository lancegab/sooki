export default function(state='', action){
     switch (action.type) {
          case "NEW_AVATAR":
               state = action.payload;
               return state;
     }
  return state;
}
