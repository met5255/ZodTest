import * as zod from "zod";
// simple Type
export const stringSchema = zod.string();
export const numSchema = zod.number();
export const bigIntSchema = zod.bigint();
export const boolSchema = zod.boolean();
export const dateSchema = zod.date();

// empty types
export const undefinedSchema = zod.undefined();
export const nullSchema = zod.null();
export const voidSchema = zod.void();

// catch-all types
// allows any value
export const anySchema = zod.any();
export const unknowSchema = zod.unknown();

// never type
// allows no values
export const neverSchema = zod.never();

// Object
export const testObj = zod.object({
    username: zod.string(),
    age: zod.number()
});