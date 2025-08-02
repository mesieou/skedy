import { businesses } from './../../app/generated/prisma/index.d';
import { PrismaClient } from "../../app/generated/prisma";

const prisma = new PrismaClient();
let cachedBusiness: Awaited<ReturnType<typeof prisma.businesses.findFirst>>;

export async function getBusiness(){
    if (!cachedBusiness) {
        cachedBusiness = await prisma.businesses.findFirst();
    }
    return cachedBusiness;
}

//create context
//business info
const business = await getBusiness();
console.log(business);