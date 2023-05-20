create extension if not exists "moddatetime" with schema "extensions";

alter table "public"."Post" alter column "updatedAt" set default CURRENT_TIMESTAMP;

alter table "public"."Profile" alter column "updatedAt" set default CURRENT_TIMESTAMP;

alter table "public"."Tag" alter column "updatedAt" set default CURRENT_TIMESTAMP;

CREATE TRIGGER post_updated_at_trigger BEFORE UPDATE ON public."Post" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt');

CREATE TRIGGER profile_updated_at_trigger BEFORE UPDATE ON public."Profile" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt');

CREATE TRIGGER tag_updated_at_trigger BEFORE UPDATE ON public."Tag" FOR EACH ROW EXECUTE FUNCTION moddatetime('updatedAt');


