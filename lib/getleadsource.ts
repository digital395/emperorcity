export function getLeadSource(): "google" | "meta" | "organic" {
  if (typeof window === "undefined") return "organic";

  const params = new URLSearchParams(window.location.search);

  const gclid = params.get("gclid");
  const fbclid = params.get("fbclid");
  const utmSource = params.get("utm_source")?.toLowerCase();

  // Meta priority
  if (
    fbclid ||
    utmSource === "facebook" ||
    utmSource === "instagram" ||
    utmSource === "meta"
  ) {
    localStorage.setItem("lead_source", "meta");
    return "meta";
  }

  // Google
  if (gclid || utmSource === "google") {
    localStorage.setItem("lead_source", "google");
    return "google";
  }

  // Persist old detected source
  const saved = localStorage.getItem("lead_source");
  if (saved === "meta" || saved === "google") {
    return saved;
  }

  localStorage.setItem("lead_source", "organic");
  return "organic";
}
