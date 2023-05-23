"use client";

import Editor from "@/components/editor";
import FormContainer from "@/components/form/form-container";
import FormField from "@/components/form/form-field";
import { Button } from "@/components/ui/button";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@supabase/auth-helpers-react";
import { Rocket } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreatePostFormSchema = z.object({
  title: z.string().min(10).max(300),
  content: z.string().min(500),
});

const CreatePostForm = () => {
  const user = useUser();
  const supabase = useSupabase();
  const formContext = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
    mode: "onChange",
    resolver: zodResolver(CreatePostFormSchema),
  });

  return (
    <FormContainer
      className="flex flex-col gap-6"
      formContext={formContext}
      onSubmit={formContext.handleSubmit(async (data) => {
        console.log('formContext.formState.isValid:', formContext.formState.isValid)
        console.log('user:', user)
        if (!formContext.formState.isValid || !user) return;
        await supabase.from("Post").insert({
          authId: user.id,
          title: data.title,
          content: data.content,
          slug:
            data.title.toLowerCase().replace(/\s/g, "-") +
            "-" +
            Date.now() / 1000,
        });
        formContext.reset();
      })}
    >
      <FormField name="title" label="Title" />
      <Editor
        name="content"
        label="Content"
        className="h-[65vh] overflow-auto"
        placeholder="Write your post here..."
        fullWidth
      />
      <Button
        type="submit"
        disabled={
          formContext.formState.isSubmitting || !formContext.formState.isDirty
        }
      >
        {formContext.formState.isSubmitting ? "Submitting..." : "Submit"}
        <Rocket size={18} />
      </Button>
    </FormContainer>
  );
};

export default CreatePostForm;
