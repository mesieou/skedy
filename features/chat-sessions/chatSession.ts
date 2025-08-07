import { botPrisma } from "../../lib/prisma";

export class ChatSession {
    constructor(private prisma: typeof botPrisma) {}

    async create() {
        // return await this.prisma.chatSessions.create();
    }
}