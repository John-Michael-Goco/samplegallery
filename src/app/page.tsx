import Link from "next/link";

const imageUrls = [
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrbRzrHUgvQAKZ21OqJhlr7TX8s60CBjDGFpWkz",
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrbaqPIl6URtDqLylNkrjoAz5h8bn9gFJSsdT4C",
  "https://ziscc8xnvc.ufs.sh/f/uPEu0Jc8nQrb82nHRFzXsxyOKPG4cWMjJ2hUmFBgoAQzbILV"
]

const images = imageUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-warp gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
