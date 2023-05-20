create table "public"."Post" (
    "id" uuid not null,
    "title" character varying(300) not null,
    "content" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null,
    "slug" text not null,
    "authId" uuid not null
);


create table "public"."Profile" (
    "id" uuid not null,
    "firstName" character varying(100),
    "lastName" character varying(100),
    "username" character varying(100),
    "bio" text,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


create table "public"."Tag" (
    "id" uuid not null,
    "name" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


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

alter table "public"."_PostToTag" add constraint "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."_PostToTag" validate constraint "_PostToTag_A_fkey";

alter table "public"."_PostToTag" add constraint "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."_PostToTag" validate constraint "_PostToTag_B_fkey";


