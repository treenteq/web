/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

// Email validation schema
const emailSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = emailSchema.parse(body);

        const entry = await prisma.waitlistEntry.create({
            data: { email },
        });

        return NextResponse.json(
            { success: true, data: entry },
            { status: 201 }
        );
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        if (error.code === "P2002") {
            return NextResponse.json(
                { error: "This email is already on our waitlist!" },
                { status: 409 }
            );
        }

        console.error("Waitlist error:", error);
        return NextResponse.json(
            { error: "Oops! Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
