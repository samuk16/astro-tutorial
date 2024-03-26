import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class={'outline outline-1 outline-slate-500 flex w-fit flex-col p-4 rounded'}>
      <h3 class={'w-fit'}>{greeting}! Thank you for visiting!</h3>
      <button class={'rounded p-1 hover:(bg-slate-300 text-slate-800) bg-slate-700'} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}