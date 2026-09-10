import { cookies } from "next/headers";

export default async function Authenticated() {
  const cookieStore = await cookies();
  return <div></div>;
}
