import * as zod from "zod";

// Simply type
export const stringSchema = zod.string();
export const numSchema = zod.number();
export const bigIntSchema = zod.bigint();
export const boolSchema = zod.boolean();
export const dateSchema = zod.date();

// Empty types
export const undefinedSchema = zod.undefined();
export const nullSchema = zod.null();
export const voidSchema = zod.void(); 

// Catch-all types
// allows any value
export const anySchema = zod.any();
export const unknowSchema = zod.unknown();

// Never type
// allows no values
export const neverSchema = zod.never();

const ipRegEx = new RegExp('^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$');
export const ipSchema = zod.string().regex(ipRegEx);

const emailRegEx = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
export const emailSchema = zod.string().regex(emailRegEx);

// Object
export const testObj = zod.object({
    username: zod.string(),
    age: zod.number()
});


