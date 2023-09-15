import { User } from "./App/types"

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
  }
  
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
  }
  
declare type State = {}


declare type Action = {type: "", payload: User} 


export as namespace GlobalState;
