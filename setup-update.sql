-- Jalankan sekali di SQL Editor (setelah setup.sql dan setup-halaman.sql).
-- Menambah kolom data dan jenis konten baru: person (pegawai) dan status.

alter table public.page_content
  add column if not exists data jsonb not null default '{}'::jsonb;

alter table public.page_content drop constraint if exists page_content_kind_check;
alter table public.page_content
  add constraint page_content_kind_check
  check (kind in ('text', 'photo', 'document', 'person', 'status'));
