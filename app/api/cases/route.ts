import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"
import { AppError, handleError } from "@/lib/errors"
import Sentry from "@/lib/sentry"

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    throw new AppError("Unauthorized", 401)
  }

  try {
    const cases = await prisma.case.findMany({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    })

    return NextResponse.json({ cases })
  } catch (error) {
    handleError(error)
    Sentry.captureException(error)
    return NextResponse.json({ error: "Failed to fetch cases" }, { status: 500 })
  }
}

