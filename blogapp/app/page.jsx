import { Client } from "appwrite";

export default function Home() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65df5dc7006a72fb05ef");
  return (
    <>
      Navbar Here
      <div></div>
    </>
  );
}
