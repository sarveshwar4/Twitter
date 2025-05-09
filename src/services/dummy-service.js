import { helper } from "./helper-service"
export const execute = () =>{
    const response = helper();
    if(response){
        return 'Node Developer'
    }
    else{
        return 'React Developer'
    }
}