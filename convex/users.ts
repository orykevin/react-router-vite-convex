import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getUser = query({
    handler: async (ctx) => {
        const userId = await getAuthUserId(ctx);
        if (!userId) {
            return;
        }
        const user = await ctx.db.query("users").first();
        if (!user || !user.email) {
            return;
        }
        return {
            name: user?.name,
            email: user?.email,
        };
    },
});