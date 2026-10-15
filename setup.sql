-- Jalankan sekali di Supabase: SQL Editor -> New query -> Run
-- GANTI 'admin@contoh.com' dengan email admin kamu (2 kali tidak perlu: cukup di fungsi ini).

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'muyuhas@gmail.com'
$$;

-- Tabel konten
create table if not exists public.items (
  id          uuid primary key default gen_random_uuid(),
  kind        text not null check (kind in ('text', 'photo', 'document')),
  title       text not null,
  body        text,
  file_path   text,
  sort_order  int  not null default 0,
  updated_at  timestamptz not null default now()
);

alter table public.items enable row level security;

-- Publik: hanya boleh membaca
create policy "items: publik boleh baca"
  on public.items for select
  using (true);

-- Admin: boleh tambah, ubah, hapus
create policy "items: admin tulis"
  on public.items for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Bucket file (publik untuk dibaca lewat URL, batas 10 MB, hanya gambar dan PDF)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'content', 'content', true, 10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
on conflict (id) do nothing;

-- Hanya admin yang boleh melihat daftar, upload, timpa, dan hapus file
create policy "file: admin baca"
  on storage.objects for select to authenticated
  using (bucket_id = 'content' and public.is_admin());

create policy "file: admin upload"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'content' and public.is_admin());

create policy "file: admin timpa"
  on storage.objects for update to authenticated
  using (bucket_id = 'content' and public.is_admin())
  with check (bucket_id = 'content' and public.is_admin());

create policy "file: admin hapus"
  on storage.objects for delete to authenticated
  using (bucket_id = 'content' and public.is_admin());
