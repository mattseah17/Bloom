import React, { useState } from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [show, setShow] = useState(false);

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: username,
      bio: bio,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <h1>My Dashboard</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>What is your username?</label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Your name"
              value={username}
              required
            />
          </div>
          <div>
            <label>Tell us about yourself</label>
            <input
              id="bio"
              name="bio"
              type="text"
              placeholder="About yourself"
              value={bio}
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
