export default function(state=false, action){
     switch (action.type) {
          case "HIDE_CAMERA":
               return false;
          case "SHOW_CAMERA":
               return true;
          // case "TOGGLE_CAMERA":
          //      return !state;
     }
  return state;
}
