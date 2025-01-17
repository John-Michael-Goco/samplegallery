import Link from "next/link";
import {db} from "~/server/db"

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (module, {desc}) => desc(module.id)
  });

  return (
    <main className="">
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
    </main>
  );
}
