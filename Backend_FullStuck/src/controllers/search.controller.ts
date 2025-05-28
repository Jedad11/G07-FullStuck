import type { Context } from "hono";
import { searchResident } from "../models/search.model.ts"

export const residentController = {
  // Search residents by name
  searchByName: async (c: Context) => {
    try {
      const name = c.req.query("name");

      if (!name || name.trim() === "") {
        return c.json({ message: "Missing or empty search keyword" }, 400);
      }

      const results = await searchResident(name);
      return c.json(results, 200);
    } catch (error) {
      console.error("Error searching resident:", error);
      return c.json(
        {
          message: "Failed to search residents",
          error: (error as Error).message,
        },
        500
      );
    }
  },
};
