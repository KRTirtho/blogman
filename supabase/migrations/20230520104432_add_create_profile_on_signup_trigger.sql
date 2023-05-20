set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  insert into public."Profile"(id)
    values (new.id);
  return new;
end;$function$
;


CREATE TRIGGER create_profile_on_signup_trigger AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION create_profile_on_signup();
