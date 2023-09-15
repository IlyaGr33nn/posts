import { ToDos, User } from "./App/types"

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
  }
  
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
  }
  
declare type UserState = {
  userData: {
    username: string,
    id: number,
    email: string
  }
}


declare type UserAction = {type: "SET_USER", payload: User} 


export as namespace GlobalState;
