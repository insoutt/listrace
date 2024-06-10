import { isValidEmail, mockResponseTime } from "@/lib/utils";

export async function POST(
  request: Request,
) {
  await mockResponseTime();

  const {email} = await request.json()

  if(!email) {
    return Response.json({ data: {
      message: 'Email is required.',
    }}, { status: 422 });
  }

  if(! isValidEmail(email)) {
    return Response.json({ data: {
      message: 'Account invalid.',
    }}, { status: 422 });
  }

  return Response.json({ data: {
    message: 'Account valid',
  }});
}