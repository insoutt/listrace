import { NEWS, PLACES, REVIEWS } from "@/data";
import { mockResponseTime } from "@/lib/utils";

export async function GET(
  _request: Request,
  { params }: { params: { type: string } }
) {
  await mockResponseTime();

  const data: Record<string, any> = {
    reviews: REVIEWS,
    places: PLACES,
    news: NEWS,
  }

  const items = data[params.type];

  if(typeof items === 'undefined' || items === null) {
    return Response.json({
      error: 1,
      message: 'Route not found',
    }, {
      status: 404,
    })
  }

  return Response.json({ data: items });
}