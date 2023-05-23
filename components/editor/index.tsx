"use client";

import React, { FC, useEffect, useId } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useController, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";

interface EditorProps {
  className?: string;
  name: string;
  label: string;
  placeholder?: string;
  id?: string;
  fullWidth?: boolean;
}

const Editor: FC<EditorProps> = ({
  label,
  name,
  className,
  placeholder,
  id,
  fullWidth,
}) => {
  const genId = useId();
  const theId = id ?? genId;
  const formContext = useFormContext();

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        // prose adds max_w_[65ch] so use max_w_none to fix it
        class: `focus:outline-none prose dark:prose-invert max-w-none prose-p:m-0 prose-a:m-0 ${
          fullWidth ? "w-full" : ""
        } ${className}`,
      },
    },
  });

  const control = useController({
    name,
    control: formContext.control,
  });

  useEffect(() => {
    // listen to changes
    const updateFn = () => {
      control.field.onChange(editor?.getHTML());
    };
    editor?.on("update", updateFn);

    // on blur
    const blurFn = () => {
      control.field.onBlur();
    };
    editor?.on("blur", blurFn);

    return () => {
      editor?.off("update", updateFn);
      editor?.off("blur", blurFn);
    };
  }, [control.field, editor]);

  return (
    <div className={`space-y-2 ${fullWidth ? "w-full" : ""}`}>
      <Label htmlFor={theId}>{label}</Label>
      <EditorContent
        id={theId}
        className={`${
          fullWidth ? "w-full" : ""
        } rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        editor={editor}
        placeholder={placeholder}
      />
      {formContext.formState.errors[name] && (
        <span className="text-destructive text-sm">
          {formContext.formState.errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default Editor;
