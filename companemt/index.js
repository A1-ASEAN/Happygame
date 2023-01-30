import localFont from '@next/font/local'


const myFont = localFont({src:'../gamer_2/Gamer.ttf'})

export default function Home() {
  return (
    <main className={myFont.className}>
    <h1>Hello</h1>
    </main>
  );
}
