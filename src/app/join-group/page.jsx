import JoinGroup from "./components/Join-group";

export default async function Page({ searchParams }) {
  const params = await searchParams; // ⬅️ FIX
  const groupName = params.groupName || "Your Group";

  return <JoinGroup groupName={groupName} />;
}
