export default function App() {
  return (
    <div className="w-full h-full bg-qgray py-7 flex flex-col items-center">
      <h1 className="text-white text-2xl font-opensans">Enter a sequence of characters to check if it's a palindrome</h1>
      <textarea maxLength="280" className="w-1/3 h-36 mt-7 border-none rounded-lg"></textarea>
      <p className="text-rose-700 font-opensans">Character limit is 280</p>
      <button onClick={() => console.log("Button clicked")} className="bg-qgreen font-opensans text-white mt-7 px-4 py-2 rounded-lg">Check</button>
    </div>
  );
}
