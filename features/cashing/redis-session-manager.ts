import { Redis } from "ioredis";

export class RedisSessionManager {
    constructor(private redisClient: Redis, private ttlSeconds: 3600) {}

    getSessionKey(businessId: string, userPhone: string):string {
        return `session:${businessId}:${userPhone}`;
    }

    async getConversationId(businessId: string, userPhone: string): Promise<string | null> {
        const key = this.getSessionKey(businessId, userPhone);
        return await this.redisClient.get(key);
    }

    async setConversationId(businessId: string, userPhone: string, conversationId: string): Promise<void> {
        const key = this.getSessionKey(businessId, userPhone);
        await this.redisClient.set(key, conversationId, 'EX', this.ttlSeconds)
    }
    
    async clearSession(businessId: string, userPhone: string): Promise<void>{
        const key = this.getSessionKey(businessId, userPhone);
        await this.redisClient.del(key);
    }
}