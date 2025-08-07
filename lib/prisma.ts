import { PrismaClient } from '../app/generated/prisma'

// Define global variables for Prisma clients
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  botPrisma: PrismaClient | undefined
}

// Regular Prisma client for normal operations
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// Bot Prisma client for operations that need to bypass RLS
export const botPrisma = globalForPrisma.botPrisma ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.BOT_DATABASE_URL || process.env.DATABASE_URL
    }
  }
})

// Set global variables for Prisma clients
globalForPrisma.prisma = prisma
globalForPrisma.botPrisma = botPrisma
