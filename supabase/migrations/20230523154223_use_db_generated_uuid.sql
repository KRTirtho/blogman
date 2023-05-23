alter table "public"."Post" alter column "id" set default gen_random_uuid();

alter table "public"."Tag" alter column "id" set default gen_random_uuid();


