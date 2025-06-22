/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_OPGc58RYlKsa@ep-still-dew-a8ot21ox-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
  };