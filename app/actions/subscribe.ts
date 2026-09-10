"use server";

export const subscribeNewsletterAction = async (
  prevState: { message: string },
  formData: FormData,
) => {
  console.log(formData, prevState);
  return { message: "Inscription avec succès" };
};
