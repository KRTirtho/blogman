CREATE OR REPLACE FUNCTION public.create_profile_on_signup()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
AS $function$begin
  insert into public.Profile(id)
  values (new.id);

  return new;
end;$function$

CREATE trigger create_profile_on_signup_trigger
  AFTER INSERT ON auth.users
  for each ROW EXECUTE PROCEDURE create_profile_on_signup();