alter table "auth"."mfa_amr_claims" drop constraint "mfa_amr_claims_session_id_authentication_method_pkey";

alter table "auth"."refresh_tokens" drop constraint "refresh_tokens_token_unique";

alter table "auth"."saml_providers" drop constraint "entity_id not empty";

alter table "auth"."saml_providers" drop constraint "metadata_url not empty";

alter table "auth"."saml_providers" drop constraint "metadata_xml not empty";

alter table "auth"."saml_providers" drop constraint "saml_providers_entity_id_key";

alter table "auth"."saml_relay_states" drop constraint "request_id not empty";

alter table "auth"."sso_domains" drop constraint "domain not empty";

alter table "auth"."sso_providers" drop constraint "resource_id not empty";

alter table "auth"."users" drop constraint "users_email_change_confirm_status_check";

alter table "auth"."users" drop constraint "users_phone_key";

drop index if exists "auth"."confirmation_token_idx";

drop index if exists "auth"."email_change_token_current_idx";

drop index if exists "auth"."email_change_token_new_idx";

drop index if exists "auth"."mfa_factors_user_friendly_name_unique";

drop index if exists "auth"."reauthentication_token_idx";

drop index if exists "auth"."recovery_token_idx";

drop index if exists "auth"."sso_domains_domain_idx";

drop index if exists "auth"."sso_providers_resource_id_idx";

drop index if exists "auth"."users_email_partial_key";

drop index if exists "auth"."users_instance_id_email_idx";

alter table "auth"."audit_log_entries" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."flow_state" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."flow_state" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."identities" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."identities" alter column "last_sign_in_at" set data type timestamp(6) with time zone using "last_sign_in_at"::timestamp(6) with time zone;

alter table "auth"."identities" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."instances" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."instances" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."mfa_amr_claims" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."mfa_amr_claims" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."mfa_challenges" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."mfa_challenges" alter column "verified_at" set data type timestamp(6) with time zone using "verified_at"::timestamp(6) with time zone;

alter table "auth"."mfa_factors" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."mfa_factors" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."refresh_tokens" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."refresh_tokens" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."saml_providers" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."saml_providers" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."saml_relay_states" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."saml_relay_states" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."sessions" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."sessions" alter column "not_after" set data type timestamp(6) with time zone using "not_after"::timestamp(6) with time zone;

alter table "auth"."sessions" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."sso_domains" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."sso_domains" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."sso_providers" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."sso_providers" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "banned_until" set data type timestamp(6) with time zone using "banned_until"::timestamp(6) with time zone;

alter table "auth"."users" alter column "confirmation_sent_at" set data type timestamp(6) with time zone using "confirmation_sent_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "confirmed_at" set data type timestamp(6) with time zone using "confirmed_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "created_at" set data type timestamp(6) with time zone using "created_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "deleted_at" set data type timestamp(6) with time zone using "deleted_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "email_change_sent_at" set data type timestamp(6) with time zone using "email_change_sent_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "email_confirmed_at" set data type timestamp(6) with time zone using "email_confirmed_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "invited_at" set data type timestamp(6) with time zone using "invited_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "last_sign_in_at" set data type timestamp(6) with time zone using "last_sign_in_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "phone" drop default;

alter table "auth"."users" alter column "phone_change" set default ''::text;

alter table "auth"."users" alter column "phone_change_sent_at" set data type timestamp(6) with time zone using "phone_change_sent_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "phone_confirmed_at" set data type timestamp(6) with time zone using "phone_confirmed_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "reauthentication_sent_at" set data type timestamp(6) with time zone using "reauthentication_sent_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "recovery_sent_at" set data type timestamp(6) with time zone using "recovery_sent_at"::timestamp(6) with time zone;

alter table "auth"."users" alter column "updated_at" set data type timestamp(6) with time zone using "updated_at"::timestamp(6) with time zone;

create table "public"."Post" (
    "id" uuid not null,
    "title" character varying(300) not null,
    "content" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null,
    "slug" text not null,
    "authId" uuid not null
);


alter table "public"."Post" enable row level security;

create table "public"."Profile" (
    "id" uuid not null,
    "firstName" character varying(100),
    "lastName" character varying(100),
    "username" character varying(100),
    "bio" text,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


alter table "public"."Profile" enable row level security;

create table "public"."Tag" (
    "id" uuid not null,
    "name" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


alter table "public"."Tag" enable row level security;

create table "public"."_PostToTag" (
    "A" uuid not null,
    "B" uuid not null
);


create table "public"."_prisma_migrations" (
    "id" character varying(36) not null,
    "checksum" character varying(64) not null,
    "finished_at" timestamp with time zone,
    "migration_name" character varying(255) not null,
    "logs" text,
    "rolled_back_at" timestamp with time zone,
    "started_at" timestamp with time zone not null default now(),
    "applied_steps_count" integer not null default 0
);


CREATE UNIQUE INDEX "Post_pkey" ON public."Post" USING btree (id);

CREATE UNIQUE INDEX "Post_slug_key" ON public."Post" USING btree (slug);

CREATE UNIQUE INDEX "Profile_pkey" ON public."Profile" USING btree (id);

CREATE UNIQUE INDEX "Profile_username_key" ON public."Profile" USING btree (username);

CREATE UNIQUE INDEX "Tag_name_key" ON public."Tag" USING btree (name);

CREATE UNIQUE INDEX "Tag_pkey" ON public."Tag" USING btree (id);

CREATE UNIQUE INDEX "_PostToTag_AB_unique" ON public."_PostToTag" USING btree ("A", "B");

CREATE INDEX "_PostToTag_B_index" ON public."_PostToTag" USING btree ("B");

CREATE UNIQUE INDEX _prisma_migrations_pkey ON public._prisma_migrations USING btree (id);

alter table "public"."Post" add constraint "Post_pkey" PRIMARY KEY using index "Post_pkey";

alter table "public"."Profile" add constraint "Profile_pkey" PRIMARY KEY using index "Profile_pkey";

alter table "public"."Tag" add constraint "Tag_pkey" PRIMARY KEY using index "Tag_pkey";

alter table "public"."_prisma_migrations" add constraint "_prisma_migrations_pkey" PRIMARY KEY using index "_prisma_migrations_pkey";

alter table "public"."Post" add constraint "Post_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Profile"(id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."Post" validate constraint "Post_authId_fkey";

alter table "public"."Profile" add constraint "Profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."Profile" validate constraint "Profile_id_fkey";

alter table "public"."_PostToTag" add constraint "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."_PostToTag" validate constraint "_PostToTag_A_fkey";

alter table "public"."_PostToTag" add constraint "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."_PostToTag" validate constraint "_PostToTag_B_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
AS $function$begin
  insert into public.Profile(id)
  values (new.id);

  return new;
end;$function$
;

CREATE TRIGGER create_profile_on_signup_trigger AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION create_profile_on_signup();

create policy "post_delete"
on "public"."Post"
as permissive
for delete
to authenticated
using ((auth.uid() = "authId"));


create policy "post_insert"
on "public"."Post"
as permissive
for insert
to authenticated
with check ((auth.uid() = "authId"));


create policy "post_read"
on "public"."Post"
as permissive
for select
to anon
using (true);


create policy "post_update"
on "public"."Post"
as permissive
for update
to authenticated
using ((auth.uid() = "authId"))
with check (true);


create policy "profile_delete"
on "public"."Profile"
as permissive
for delete
to service_role
using (true);


create policy "profile_insert"
on "public"."Profile"
as permissive
for insert
to service_role
with check (true);


create policy "profile_read"
on "public"."Profile"
as permissive
for select
to anon
using (true);


create policy "profile_update"
on "public"."Profile"
as permissive
for update
to authenticated
using ((auth.uid() = id))
with check (true);


create policy "tag_insert"
on "public"."Tag"
as permissive
for insert
to authenticated
with check (true);


create policy "tag_select"
on "public"."Tag"
as permissive
for select
to anon
using (true);



drop trigger if exists "update_objects_updated_at" on "storage"."objects";

alter table "storage"."buckets" drop constraint "buckets_owner_fkey";

alter table "storage"."objects" drop constraint "objects_bucketId_fkey";

alter table "storage"."objects" drop constraint "objects_owner_fkey";

alter table "storage"."buckets" drop constraint "buckets_pkey";

alter table "storage"."objects" drop constraint "objects_pkey";

drop index if exists "storage"."bname";

drop index if exists "storage"."bucketid_objname";

drop index if exists "storage"."buckets_pkey";

drop index if exists "storage"."name_prefix_search";

drop index if exists "storage"."objects_pkey";

drop table "storage"."buckets";

drop table "storage"."objects";


