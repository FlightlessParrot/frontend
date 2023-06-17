import universalFetchSchema from "../universalFetchSchema";

export default async function resetPasswordAction({ params, request }) {
  return universalFetchSchema(request, "/forgot-password");
}

export async function sendNewPasswordAction({ params, request }) {
  return universalFetchSchema(request, "/reset-password");
}
