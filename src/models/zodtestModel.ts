import { z } from "zod";

export const zodtestModelSingleLevel = z.object({
  body: z.object({
    name: z.string({
      // required_error: "Name is required",
      invalid_type_error: "String is a type"
    }),
    number: z.number({
      //required_error: "Number is required",
      invalid_type_error: "Number is a type"
    }),

  }),
});


export const zodtestModelMultiLevel = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "String is a type"
    }),
    number: z.number({
      invalid_type_error: "Number is a type"
    }),
    data: z.object({
      city: z.string({
        invalid_type_error: "String is a type"
      }),
      hausenumber: z.number({
        invalid_type_error: "Number is a type"
      }),
      data: z.object({
        city: z.string({
          invalid_type_error: "String is a type"
        }),
        hausenumber: z.number({
          invalid_type_error: "Number is a type"
        }),
      })
      ,
    })
  }),
});