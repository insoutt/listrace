import { NEWS, PLACES, REVIEWS, SEARCH } from "@/data";
import { mockResponseTime } from "@/lib/utils";

export async function POST(
  request: Request,
) {
  let {place, type} = await request.json()

  await mockResponseTime();

  if(!place) {
    return Response.json({ data: [] });
  }

  if(!type) {
    type = '';
  }

  let items = SEARCH
                .filter(item => item.type.toLocaleLowerCase().indexOf(type) > -1)
                .filter(item => item.title.toLocaleLowerCase().indexOf(place) > -1)

  return Response.json({ data: items });
}