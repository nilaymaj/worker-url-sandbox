import React from "react";

export default function Index() {
  const workerRef = React.useRef();

  React.useEffect(() => {
    // CASE I: SEPARATE URL (doesn't work)
    const url = new URL("../worker.js", import.meta.url);
    workerRef.current = new Worker(url);
    // CASE II: ALL IN ONE LINE (works)
    // workerRef.current = new Worker(new URL("../worker.js", import.meta.url));
    workerRef.current.onmessage = (evt) =>
      alert(`WebWorker Response => ${evt.data}`);
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = React.useCallback(async () => {
    workerRef.current.postMessage(100000);
  }, []);

  return (
    <div>
      <p>Do work in a WebWorker!</p>
      <button onClick={handleWork}>Calculate PI</button>
    </div>
  );
}
