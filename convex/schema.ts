import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { sawerTables } from "./_tables/sawerData";


export default defineSchema({
    ...sawerTables,
    ...authTables,
})