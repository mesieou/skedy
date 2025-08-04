import { PrismaClient } from "../../app/generated/prisma";

const prisma = new PrismaClient();
let cachedBusiness: Record<string, Awaited<ReturnType<typeof prisma.businesses.findFirst>>> = {};

export async function getBusinessById(id: string){
    if (!cachedBusiness[id]) {
        cachedBusiness[id] = await prisma.businesses.findUnique({
            where: { id: id }
        }); 
    }
    return cachedBusiness[id];
}

//create context
//business info
const business = await getBusinessById("1");
console.log(business);