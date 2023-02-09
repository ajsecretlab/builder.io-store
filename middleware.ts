import { NextResponse, NextRequest } from "next/server";
import { getPersonlizedURL } from "@builder.io/personalization-utils/next";

const regex = /^(.+\.)/;

const shouldRewrite = (pathname: string) => {
  // do not rewrite api requests
  if (pathname.startsWith("/api")) {
    return false;
  }

  if (pathname.startsWith("/sample")) {
    return false;
  }
  // don't rewrite for asset requests (has a file extension)
  return !regex.test(pathname);
};

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  console.log(url);
  if (shouldRewrite(url.pathname)) {
    const personalizedURL = getPersonlizedURL(request);
    return NextResponse.rewrite(personalizedURL);
  }
  return NextResponse.next();
}
