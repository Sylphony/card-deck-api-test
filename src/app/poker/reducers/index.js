import pokerFieldReducer from "./pokerField";
import pokerPlayerReducer from "./pokerPlayer";

export default {
    ...pokerFieldReducer,
    ...pokerPlayerReducer
}
