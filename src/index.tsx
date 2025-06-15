import { Hono } from "hono";
import { serve } from "@hono/node-server";
import puppeteer from "puppeteer";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { Twibbon } from "./template.tsx"; // Pastikan path ini sesuai dengan lokasi file template.tsx

const app = new Hono();

app.get("/", (c) => c.text("Gunakan /generate-image?text=Nama"));

app.get("/generate-image", async (c) => {
  const text = c.req.query("text") || "Hello, World!";
  const category = c.req.query("category") || "Mphstar";
  const respone = await fetch("https://api.side.my.id/v1/ai/flux", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      prompt: `Create a picture for background like city, beach, nature, person, or anything else`,
     }),
  });

  if (!respone.ok) {
    return c.text("Error fetching data from API", 500);
  }

  const data = await respone.json();
  // console.log(data);
  
  const imgUrl = data.data.choices.content

  const html = renderToStaticMarkup(<Twibbon text={text} category={category} imgUrl={imgUrl} />);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 512, height: 512 });

  await page.setContent(html, { waitUntil: "networkidle0" });
  const image = await page.screenshot({ type: "png" });
  await browser.close();

  return new Response(Buffer.from(image), {
    headers: {
      "Content-Type": "image/png",
    },
  });
});

serve({ fetch: app.fetch, port: 3000, hostname: "0.0.0.0" });
console.log("✅ Server jalan di :3000");
