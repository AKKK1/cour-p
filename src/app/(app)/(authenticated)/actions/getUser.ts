"use server"

import {headers as getHeaders} from "next/headers"
import {getPayload} from "payload"
import configPromise from "@payload-config"
import type { Payload } from "payload"
import {Customer} from "@/payload-types"

export async function getUser(): Promise<Customer | null> {
    try {
        const headers = await getHeaders();
        const payload: Payload = await getPayload({ config: await configPromise });
        const { user } = await payload.auth({ headers });
        return user || null;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null; // or handle differently depending on the error
    }
}