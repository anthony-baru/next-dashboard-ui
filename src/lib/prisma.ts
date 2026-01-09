import { PrismaClient } from '../../prisma/generated/client'
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// 1. Create a standard connection pool using the 'pg' driver
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Wrap it in the Prisma Driver Adapter
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient({adapter})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma