const Profile = () => {
  const user = localStorage.getItem("signup");
  let parsedUser = { user: "" };

  if (user) {
    try {
      parsedUser = JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user data:", error);
      parsedUser = { user: "" };
    }
  }
  const userName = parsedUser.user || "Unknown User";
  return (
    <div className="w-full flex justify-center items-center flex-col cursor-default gap-2">
      <div className="w-20 h-20 border rounded-full">
        <img src="/img/user.png" alt="" />
      </div>
      <p className="font-semibold text-lg text-customtext">{userName}</p>
    </div>
  );
};

export default Profile;
