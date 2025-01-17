import Link from "next/link";

const mockUrls = [
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrbx43TULB8DBpqLkZjAPYgXCeKRvm6ldiSIFcs",
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrbXl09F3i1dqfhiG9WKbIYuHtolMZ65cwCOBF0",
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrbAQBcYIRySrpmOMZKoF16ebj2Qaf3Nn8YC0wy",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-1">
            <img
              src={image.url} className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
