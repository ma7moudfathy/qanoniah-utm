import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qanoniah UTM Builder" },
      { name: "description", content: "Build consistent, trackable UTM campaign URLs." },
      { property: "og:title", content: "Qanoniah UTM Builder" },
      { property: "og:description", content: "Build consistent, trackable UTM campaign URLs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/utm-builder.html"
      title="Qanoniah UTM Builder"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
