import { PrismaClient } from "../../app/generated/prisma";

const prisma = new PrismaClient();

export class ChatSession {
    constructor(private prisma: PrismaClient) {}

    async create() {
        return await this.prisma.chatSessions.create();
    }
}