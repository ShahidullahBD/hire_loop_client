'use server';

import { serverMutation } from "../core/server";

export async function createSubscription(subInfo) {
    return serverMutation('/api/subscriptions', subInfo);
}