import * as Zod from "zod";

export const zod = Zod;
export function zodValidator<T>(variable: unknown, schema: Zod.ZodType): T | unknown {
    // helperDebug.debug('zod','validator2:'+variable)
    try {
        return schema.parse(variable)
    } catch (e) {
        console.log("****", e);
        //    helperDebug.error('zod','validator2:catch:'+e)
        return undefined;
    }
}