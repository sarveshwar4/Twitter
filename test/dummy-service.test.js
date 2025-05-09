import * as helperService from "../src/services/helper-service";
import { execute } from "../src/services/dummy-service";

test("result is true and returns learning js", ()=>{
    jest.spyOn(helperService, 'helper').mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Node Developer');
});


test("result is true and returns learning js", ()=>{
    jest.spyOn(helperService, 'helper').mockReturnValue(false);
    const result = execute();
    expect(result).toBe('React Developer');
});