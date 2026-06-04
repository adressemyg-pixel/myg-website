import { Router, type IRouter, type Request, type Response } from "express";
import { eq } from "drizzle-orm";
import {
  CreateBrochureBody,
  DeleteBrochureParams,
} from "@workspace/api-zod";
import { db, brochuresTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/brochures", async (req: Request, res: Response) => {
  try {
    const brochures = await db
      .select()
      .from(brochuresTable)
      .orderBy(brochuresTable.createdAt);

    res.json(
      brochures.map((b) => ({
        id: b.id,
        title: b.title,
        description: b.description,
        category: b.category,
        objectPath: b.objectPath,
        createdAt: b.createdAt.toISOString(),
      }))
    );
  } catch (err) {
    req.log.error({ err }, "Failed to list brochures");
    res.status(500).json({ error: "Failed to retrieve brochures" });
  }
});

router.post("/brochures", async (req: Request, res: Response) => {
  const parsed = CreateBrochureBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid brochure data" });
    return;
  }

  const { title, description, category, objectPath } = parsed.data;

  try {
    const [created] = await db
      .insert(brochuresTable)
      .values({ title, description, category, objectPath })
      .returning();

    res.status(201).json({
      id: created.id,
      title: created.title,
      description: created.description,
      category: created.category,
      objectPath: created.objectPath,
      createdAt: created.createdAt.toISOString(),
    });
  } catch (err) {
    req.log.error({ err }, "Failed to create brochure");
    res.status(500).json({ error: "Failed to create brochure" });
  }
});

router.delete("/brochures/:id", async (req: Request, res: Response) => {
  const parsed = DeleteBrochureParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid brochure ID" });
    return;
  }

  const { id } = parsed.data;

  try {
    const deleted = await db
      .delete(brochuresTable)
      .where(eq(brochuresTable.id, id))
      .returning();

    if (deleted.length === 0) {
      res.status(404).json({ error: "Brochure not found" });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to delete brochure");
    res.status(500).json({ error: "Failed to delete brochure" });
  }
});

export default router;
