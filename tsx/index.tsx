import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">React + TypeScript Webpage</h1>
      
      {/* 计数器 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center mb-4">
        <p className="text-lg font-medium">Count: {count}</p>
        <div className="flex gap-2 mt-2">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
      </div>
      
      {/* 文本输入框 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
        <p className="text-lg font-medium">Enter Text:</p>
        <Input
          className="mt-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p className="mt-2 text-gray-700">You typed: {text}</p>
      </div>
    </div>
  );
};

export default App;
