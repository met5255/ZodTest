
import * as express  from "express";
import * as zod from "zod";
import { unknown } from "zod";


export const validator = (valid:any, schema: any) =>{
    try{
       return schema.parse(valid);
    }catch(e){
        return e;
    }
}

/**
 * Transfer set command though. Sets a specific variable value
 *
 * @param {unknown} variable The thestetd variable name
 * @param {zod.ZodType} schema Value of the variable    
 */
export function validator2<T>(variable: unknown, schema: zod.ZodType):T | unknown {
   // helperDebug.debug('zod','validator2:'+variable)
    try {
        return schema.parse(variable)
    } catch(e) {
        console.log("****",e);
    //    helperDebug.error('zod','validator2:catch:'+e)
        return unknown;
    }
}


// pampers 2 kettes méret 
