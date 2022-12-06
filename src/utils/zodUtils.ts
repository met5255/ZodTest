import * as zod from "zod";

export function zodValidator<T>(variable: unknown, schema: zod.ZodType): T | unknown {
    // helperDebug.debug('zod','validator2:'+variable)
    try {
        return schema.parse(variable)
    } catch (e) {
        console.log("****", e);
        //    helperDebug.error('zod','validator2:catch:'+e)
        return undefined;
    }
}