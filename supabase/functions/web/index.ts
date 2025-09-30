import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/index.html" : url.pathname;

  try {
    const file = await Deno.readFile(`./supabase/functions/web${path}`);
    const ext = path.split(".").pop()!;
    const contentType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
    }[ext] || "text/plain";

    return new Response(file, {
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});

eof
