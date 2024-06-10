import { REVIEWS } from "@/data";
import { mockResponseTime } from "@/lib/utils";

export async function GET(request: Request) {
  await mockResponseTime();
  return Response.json({ data: REVIEWS });
}