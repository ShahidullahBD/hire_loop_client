'use server';

import { serverMutation } from "../core/server";

export async function submitJobApplication(applicationData) {
    return serverMutation('/api/applications', applicationData);
}


