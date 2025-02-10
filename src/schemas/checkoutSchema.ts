import * as z from "zod";

export const addressSchema = z.object({
  postalCode: z.string().min(1, "Please enter your postal code"),
  street: z.string().min(1, "Please enter your street name"),
  number: z.preprocess(
    (val) => Number(val),
    z.number({ invalid_type_error: "Please enter your house number" })
  ),
  additionalInfo: z.string().optional(),
  neighborhood: z.string().min(1, "Please enter your neighborhood"),
  city: z.string().min(1, "Please enter your city"),
  state: z.string().min(1, "Please enter your state"),
});

export const paymentSchema = z.object({
  paymentType: z.enum(["credit", "debit", "cash"], {
    errorMap: () => ({ message: "Please select a payment method" }),
  }),
});

export const checkoutSchema = addressSchema.merge(paymentSchema);

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
