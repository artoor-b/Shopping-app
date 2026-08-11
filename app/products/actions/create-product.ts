"use server";

import { revalidatePath } from "next/cache";
import { post } from "../../common/util/fetch";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  revalidatePath("/");

  return response;
}
