"use client";

import FormContainer from "@/components/form/form-container";
import FormField from "@/components/form/form-field";
import { Button } from "@/components/ui/button";
import { SupaProfile } from "@/supabase/types/types";
import { useSupabase } from "@/utils/hooks/useSupabase";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUser } from "@supabase/auth-helpers-react";
import FormTextarea from "@/components/form/form-textarea";
import { useRouter } from "next/navigation";

interface ProfileFormProps {
  profile?: SupaProfile | null;
  isNew?: boolean;
}

const profileFormSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(100)
    .regex(
      /^[a-z0-9_-]+$/,
      "Invalid username. Only (a-z), (0-9), (_), and (-) are allowed."
    ),
  firstName: z.string().max(100).optional(),
  lastName: z.string().max(100).optional(),
  bio: z.string().optional(),
});

const ProfileForm: FC<ProfileFormProps> = ({ isNew, profile }) => {
  const supabase = useSupabase();
  const user = useUser();

  const formContext = useForm({
    defaultValues: {
      ...(isNew ? { username: profile?.username } : {}),
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      bio: profile?.bio,
    },
    resolver: zodResolver(profileFormSchema),
  });

  const router = useRouter();

  return (
    <FormContainer
      className="flex flex-col gap-4 max-w-xl mx-auto mt-5"
      formContext={formContext}
      onSubmit={formContext.handleSubmit(async (data) => {
        if (!formContext.formState.isValid) return;
        const query = supabase.from("Profile").update(data);
        if (isNew) {
          await query.eq("id", user?.id);
          router.push(`/${data.username}/profile`);
        } else {
          await query.eq("id", profile?.id);
          formContext.reset(data);
        }
      })}
    >
      {isNew && (
        <FormField
          type="text"
          name="username"
          label="User Name"
          placeholder="Your user name"
        />
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <FormField
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Your first name"
          fullWidth
        />
        <FormField
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Your last name"
          fullWidth
        />
      </div>

      <FormTextarea
        name="bio"
        label="Bio"
        placeholder="Describe and introduce yourself"
      />

      <Button
        type="submit"
        disabled={
          formContext.formState.isSubmitting || !formContext.formState.isDirty
        }
      >
        Save
      </Button>
    </FormContainer>
  );
};

export default ProfileForm;
