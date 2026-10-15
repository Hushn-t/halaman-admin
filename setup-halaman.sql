-- TAMBAHAN untuk setup.sql (jalankan setup.sql lebih dulu, lalu ini, masing-masing sekali).
-- Membuat tabel konten per sub halaman. Fungsi is_admin() dan bucket 'content' dipakai ulang.

create table if not exists public.page_content (
  page        text not null,   -- id sub halaman, mis. 'halaman-1'
  slot        text not null,   -- id komponen, mis. 'foto'
  kind        text not null check (kind in ('text', 'photo', 'document')),
  body        text,
  file_path   text,
  updated_at  timestamptz not null default now(),
  primary key (page, slot)
);

alter table public.page_content enable row level security;

create policy "page_content: publik boleh baca"
  on public.page_content for select
  using (true);

create policy "page_content: admin tulis"
  on public.page_content for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
