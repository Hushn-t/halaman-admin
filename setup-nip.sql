-- Jalankan sekali di SQL Editor (setelah setup-pegawai.sql).
-- Menambah kolom NIP pada daftar pegawai.

alter table public.employees add column if not exists nip text;
