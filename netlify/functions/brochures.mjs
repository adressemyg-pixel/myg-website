import pkg from "pg";

const { Client } = pkg;

async function getClient() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  return client;
}

export const handler = async (event) => {
  const method = event.httpMethod;
  const path = event.path;

  const client = await getClient().catch((err) => {
    console.error("DB connect error:", err);
    return null;
  });
  if (!client) {
    return { statusCode: 500, body: JSON.stringify({ error: "Database connection failed" }) };
  }

  try {
    // DELETE /api/brochures/:id
    const deleteMatch = path.match(/\/brochures\/(\d+)$/);
    if (method === "DELETE" && deleteMatch) {
      const id = parseInt(deleteMatch[1]);
      const result = await client.query(
        "DELETE FROM brochures WHERE id = $1 RETURNING id",
        [id]
      );
      if (result.rowCount === 0) {
        return { statusCode: 404, body: JSON.stringify({ error: "Brochure not found" }) };
      }
      return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ success: true }) };
    }

    // GET /api/brochures
    if (method === "GET") {
      const result = await client.query(
        "SELECT id, title, description, category, object_path as \"objectPath\", created_at as \"createdAt\" FROM brochures ORDER BY created_at ASC"
      );
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.rows.map(r => ({ ...r, createdAt: new Date(r.createdAt).toISOString() }))),
      };
    }

    // POST /api/brochures
    if (method === "POST") {
      let body;
      try { body = JSON.parse(event.body || "{}"); } catch { return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) }; }
      const { title, description, category, objectPath } = body;
      if (!title || !category || !objectPath) {
        return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
      }
      const result = await client.query(
        "INSERT INTO brochures (title, description, category, object_path) VALUES ($1,$2,$3,$4) RETURNING id, title, description, category, object_path as \"objectPath\", created_at as \"createdAt\"",
        [title, description || null, category, objectPath]
      );
      const created = result.rows[0];
      return {
        statusCode: 201,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...created, createdAt: new Date(created.createdAt).toISOString() }),
      };
    }

    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  } catch (err) {
    console.error("Error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  } finally {
    await client.end();
  }
};
