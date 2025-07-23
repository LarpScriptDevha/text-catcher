export default {
  async fetch(request, env, ctx) {
    const file = await fetch("data.txt");

    if (!file.ok) {
      return new Response("Could not load data.txt", {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      });
    }

    const text = await file.text();

    return new Response(text, {
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
};
