import Profile from "@/app/components/form/Profile";

export default function ProfilePage() {
  return (
    <>
      <div className="h-full w-full ctg bg-blue-700 rounded-3xl">
        <Profile data={data} userId="1"/>
      </div>
    </>
  );
}
