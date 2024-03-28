import { NextResponse } from "next/server";



export async function GET(request: Request) {
 
  return NextResponse.json({ count: 100 });
}

// Request POST example with form data
// export async function POST(request: Request) {
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const email = formData.get('email');
//   return Response.json({ name, email })
// }

// Request Post example with JSON body
export async function POST(request: Request) { 
  const res = await request.json();
  return Response.json({res});

}