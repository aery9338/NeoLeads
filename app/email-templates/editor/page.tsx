"use client";

import React, { useRef, useEffect, useState, type JSX } from "react";

interface EmailEditorModule {
  EmailEditor: React.ComponentType<any>;
}

export default function Editor(): JSX.Element {
  const [EmailEditor, setEmailEditor] = useState<EmailEditorModule | null>(null);
  const emailEditorRef = useRef(null);

  const loadEmailEditor = async (): Promise<void> => {
    try {
      const editorModule = (await import("react-email-editor")) as EmailEditorModule;
      setEmailEditor(editorModule);
    } catch (error) {}
  };

  useEffect(() => {
    const loadEditor = async (): Promise<void> => {
      await loadEmailEditor();
    };

    // Use void operator to explicitly ignore the promise
    void loadEditor();
  }, []);

  return (
    <div className="min-h-screen bg-userbg w-full flex flex-col gap-4 px-12 py-8">
      {EmailEditor !== null && typeof window !== "undefined" && (
        <EmailEditor.EmailEditor ref={emailEditorRef} />
      )}
    </div>
  );
}
