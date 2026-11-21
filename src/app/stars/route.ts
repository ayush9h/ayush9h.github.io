export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/ayush9h/repos?per_page=100&type=owner",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) return Response.json({ stars: null });

    const repos: { stargazers_count?: number }[] = await res.json();
    const stars = repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0);

    return Response.json({ stars });
  } catch {
    return Response.json({ stars: null });
  }
}
