
import { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";


interface errIssuesElement {
    invalid_type: string,
    received: string,
    expected: string,
    path: any[],
}

export const express_validateSingleLevel = (schema: AnyZodObject) => {

    return (async (req: Request, res: Response, next: NextFunction) => {
       
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
           
            return next();
        } catch (error: any) {

            error?.issues.forEach(async(element: errIssuesElement) => {
                if (element.invalid_type === "invalid_type", element.received === "undefined") {
                    element.path.forEach((e2, index) => {
                       
                        if (index > 0) {
                            req.body[e2] = element.received;
                        }
                    })
                }

                if (element.invalid_type === "invalid_type", element.expected === "string") {
                    element.path.forEach((e2, index) => {
                        if (index > 0){
                            req.body[e2] = String(element.received);
                        }
                    })
                }

                if (element.invalid_type === "invalid_type", element.expected === "number") {
                  
                    element.path.forEach((e2, index) => {
                        if (index > 0){
                            if(typeof element.received == 'number'){

                                console.log("Ide fut bele")
                                req.body[e2] = Number(element.received);
                            }else{
                                console.log("Ide fut bele222")
                                req.body[e2] = 0.0;
                            }
                        }
                    })
                }

            });
            console.log(req.body)
            return next();
        }
    });
}



export const express_validateMultiLevel = (schema: AnyZodObject) => {

    return (async (req: Request, res: Response, next: NextFunction) => {
       
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
           
            return next();
        } catch (error: any) {

            error?.issues.forEach(async(element: errIssuesElement) => {
                if (element.invalid_type === "invalid_type", element.received === "undefined") {
                    element.path.forEach((e2, index) => {
                       
                        if (index > 0) {
                            req.body[e2] = element.received;
                        }
                    })
                }

                if (element.invalid_type === "invalid_type", element.expected === "string") {
                    element.path.forEach((e2, index) => {
                        if (index > 0){
                            req.body[e2] = String(element.received);
                        }
                    })
                }
                
                if (element.invalid_type === "invalid_type", element.expected === "number") {
                  
                    element.path.forEach((e2, index) => {
                        if (index > 0){
                            if(typeof element.received == 'number'){

                                console.log("Ide fut bele")
                                req.body[e2] = Number(element.received);
                            }else{
                                console.log("Ide fut bele222")
                                req.body[e2] = 0.0;
                            }
                        }
                    })
                }

            });
            console.log(req.body)
            return next();
        }
    });
}
  ///,"data":{"city":"asd"}