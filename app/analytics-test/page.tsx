"use client";

import { Button } from "@/components/ui/button";
import { trackButtonClick, trackEvent } from "../utils/analytics";
import { useState } from "react";

export default function AnalyticsTest() {
  const [testResults, setTestResults] = useState<string[]>([]);

  const addTestResult = (result: string) => {
    setTestResults((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${result}`,
    ]);
  };

  const testButtonClick = () => {
    trackButtonClick("Test Button", { test: true });
    addTestResult("Button click event sent");
  };

  const testCustomEvent = () => {
    trackEvent({
      action: "test_event",
      category: "Test",
      label: "Custom Test Event",
      value: 1,
      test: true,
    });
    addTestResult("Custom event sent");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8 text-center">
          Analytics Test Page
        </h1>

        <div className="space-y-4 mb-8">
          <Button
            onClick={testButtonClick}
            className="w-full py-6 bg-blue-600 hover:bg-blue-700"
          >
            Test Button Click
          </Button>

          <Button
            onClick={testCustomEvent}
            className="w-full py-6 bg-green-600 hover:bg-green-700"
          >
            Test Custom Event
          </Button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-white font-medium mb-2">Test Results:</h2>
          <div className="bg-gray-900 p-3 rounded max-h-60 overflow-y-auto">
            {testResults.length === 0 ? (
              <p className="text-gray-400">
                No events tracked yet. Click the buttons above to test.
              </p>
            ) : (
              <ul className="text-gray-300 space-y-1">
                {testResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>
            Check your browser console and Google Analytics dashboard to verify
            events.
          </p>
        </div>
      </div>
    </div>
  );
}
