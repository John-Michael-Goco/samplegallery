import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { UploadThingError } from "uploadthing/server";
import {db} from "~/server/db"

export const dynamic = "force-dynamic"

async function Images(){
  const user = await auth();

  if (!user.userId) throw new UploadThingError("Unauthorized");
  
  const images = await db.query.images.findMany({
    where: (model) => eq(model.userId, user.userId),
    orderBy: (module, {desc}) => desc(module.name)
  });

  return(  
  <div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div key={image.id} className="w-48 p-1">
        <img
          src={image.url} className="w-ful l h-full object-cover rounded-md"
        />
        <div> {image.name}</div>
      </div>
    ))}
  </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please Sign In Above
          </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
