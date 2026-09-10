import * as z from "zod";

export const TodoFormSchema = z.object({
  title: z.string().max(20, "Votre titre n'est pas valide"),
});

export type TodoFormType = z.infer<typeof TodoFormSchema>;
