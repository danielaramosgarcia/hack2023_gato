import React, { useState, useEffect } from "react";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

function GptClone() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [generating, setGenerating] = useState(false);
  const [abortController, setAbortController] = useState(null);

  const generate = async () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    setGenerating(true);
    setResult("Generating...");

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: "Hola me llamo Erick" },
            {
              role: "assistant",
              content: "Hola Erick, en que te puedo ayudar?",
            },
            { role: "user", content: prompt },
          ],
          stream: true,
        }),
        signal: controller.signal,
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      setResult("");

      while (true) {
        const chunk = await reader.read();
        const { done, value } = chunk;
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value);
        const lines = decodedChunk.split("\n");
        const parsedLines = lines
          .map((line) => line.replace(/^data: /, "").trim())
          .filter((line) => line !== "" && line !== "[DONE]")
          .map((line) => JSON.parse(line));

        for (const parsedLine of parsedLines) {
          const { choices } = parsedLine;
          const { delta } = choices[0];
          const { content } = delta;
          if (content) setResult((prevResult) => prevResult + content);
        }
      }
    } catch (error) {
      if (controller.signal.aborted) {
        setResult("Request aborted.");
      } else {
        console.error("Error:", error);
        setResult("Error occurred while generating.");
      }
    } finally {
      setGenerating(false);
      setAbortController(null);
    }
  };

  const stop = () => {
    if (abortController) {
      abortController.abort();
      setAbortController(null);
    }
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Enter") {
        generate();
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className='bg-white text-black min-h-screen flex items-center justify-center'>
      <div className='lg:w-1/2 2xl:w-1/3 p-8 rounded-md bg-gray-100'>
        <h1 className='text-3xl font-bold mb-6'>
          Streaming OpenAI API Completions in JavaScript
        </h1>
        <div className='mt-4 h-48 overflow-y-auto'>
          <p className='text-gray-500 text-sm mb-2'>Generated Text</p>
          <p className='whitespace-pre-line'>{result}</p>
        </div>
        <input
          type='text'
          id='promptInput'
          className='w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4'
          placeholder='Enter prompt...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className='flex justify-center mt-4'>
          <button
            id='generateBtn'
            className={`w-1/2 px-4 py-2 rounded-md ${
              generating
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-900 focus:outline-none"
            } `}
            onClick={generate}
            disabled={generating}
          >
            Generate
          </button>
          <button
            id='stopBtn'
            className={`w-1/2 px-4 py-2 rounded-md border ${
              generating
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none"
            } ml-2`}
            onClick={stop}
            disabled={!generating}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default GptClone;
