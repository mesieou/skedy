import { botPrisma } from "../../lib/prisma";
import { removalistBusinessData } from "./seed";

export class Business {
    constructor(private prisma: typeof botPrisma, private businessData: typeof removalistBusinessData) {}

    async create() {
        return await this.prisma.businesses.create({
            data: {
                ...this.businessData
            }
        });
    }
}

const business = new Business(botPrisma, removalistBusinessData);
const businessData = await business.create();
console.log(businessData);