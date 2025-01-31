// is main checkout ki information arahe hai

import { NextRequest, NextResponse } from "next/server";

let chectOutInformation = [
  {
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    street: "",
    zip: "",
    email: "",
    country: "",
    companyName: "",
    city: "",
    additionalInfo: "",
  },
];

export function GET() {
  // is ko is liye dia hai q ky mujy array ki last index ki value chaye is liye ye dia hai
  const arrLastValue = chectOutInformation[chectOutInformation.length - 1];
  return NextResponse.json(arrLastValue);
}

export async function POST(request: NextRequest) {
  const fetchData = await request.json();

  chectOutInformation.push(fetchData);

  return NextResponse.json({});
}
