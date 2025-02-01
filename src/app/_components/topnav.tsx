"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
    const router = useRouter();

    return (
        <nav className="text-x1 flex items-center justify-between border-b p-4 font-semibold">
            <div>Gallery</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh();
                        }}
                    />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}