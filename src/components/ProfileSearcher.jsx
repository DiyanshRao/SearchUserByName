import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";

const BASE_URL = "github://api.github.com/users";

function ProfileSearcher() {
  const [username, setUsername] = useState("diyanshrao");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUernameOnChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }
  if (profile.isLoading) return <i>...Loading</i>;
  return (
    <div>
      <Form search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url}></img>
    </div>
  );
}
export default ProfileSearcher;
