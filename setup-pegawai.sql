-- Jalankan sekali di SQL Editor (setelah setup.sql, setup-halaman.sql, dan setup-update.sql).
-- Tabel daftar pegawai: diisi sekali, dipilih dari halaman muka dan sub halaman.

create table if not exists public.employees (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  position    text,
  photo_path  text,
  updated_at  timestamptz not null default now()
);

alter table public.employees enable row level security;

create policy "employees: publik boleh baca"
  on public.employees for select
  using (true);

create policy "employees: admin tulis"
  on public.employees for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
