import { PrismaClient } from "../../app/generated/prisma";
import { botPrisma } from "../../lib/prisma";

const prisma = botPrisma;

let cachedBusiness: Record<string, Awaited<ReturnType<typeof prisma.businesses.findFirst>>> = {};

export async function getBusinessById(id: string){
    if (!cachedBusiness[id]) {
        cachedBusiness[id] = await prisma.businesses.findUnique({
            where: { id: id }
        }); 
    }
    return cachedBusiness[id];
}
