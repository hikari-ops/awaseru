import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="buttons">
        <div class="container">
          <button class="main-button">Main Button</button>
          <button class="correct-button">Correct Button</button>
          <button class="incorrect-button">Incorrect Button</button>
        </div>
      </main>
    </div>
  );
}
