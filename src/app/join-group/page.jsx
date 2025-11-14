import { Suspense } from "react";
import JoinGroup from "./components/Join-group";

export const dynamic = "force-dynamic";

export async function generateMetadata(props) {
  const sp = await props.searchParams; // 🔥 FIX
  const groupName = sp.groupName || "Your Group";

  return {
    title: `${groupName} | Numora`,
    openGraph: {
      title: `${groupName} | Numora`,
      images: [`/api/og/join-group?groupName=${encodeURIComponent(groupName)}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${groupName} | Numora`,
      images: [`/api/og/join-group?groupName=${encodeURIComponent(groupName)}`],
    },
  };
}

export default async function Page(props) {
  const sp = await props.searchParams; // 🔥 FIX
  const groupName = sp.groupName || "Your Group";

  return (
    <Suspense fallback={<div></div>}>
      <JoinGroup groupName={groupName} />
    </Suspense>
  );
}
