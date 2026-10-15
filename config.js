// Isi dengan nilai dari Supabase: Project Settings -> API
// anon key AMAN ada di sini (keamanan dijaga RLS). JANGAN pernah pakai service_role key.
window.APP_CONFIG = {
  SUPABASE_URL: "https://jqaxhcwysecihvbxsxnf.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxYXhoY3d5c2VjaWh2YnhzeG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5NDc3ODQsImV4cCI6MjEwNzUyMzc4NH0.Rp1v_jnJNCqxI-gnNirlb48bB2y323i0bXFWkgPFSn0",
  BUCKET: "content",
  MAX_MB: 10,

  // Daftar sub halaman. "id" dipakai di alamat embed (?page=halaman-1) dan sebagai
  // nama folder file: hanya huruf kecil, angka, dan tanda hubung. Ganti "label" dengan nama aslinya.
  // JANGAN ubah id setelah ada konten, karena konten lama tidak ikut pindah.
  PAGES: [
    { id: "halaman-1",  label: "Profil Risiko 1" },
    { id: "halaman-2",  label: "Profil Risiko 2" },
    { id: "halaman-3",  label: "Profil Risiko 3" },
    { id: "halaman-4",  label: "Profil Risiko 4" },
    { id: "halaman-5",  label: "Profil Risiko 5" },
    { id: "halaman-6",  label: "Profil Risiko 6" },
    { id: "halaman-7",  label: "Profil Risiko 7" },
    { id: "halaman-8",  label: "Profil Risiko 8" },
    { id: "halaman-9",  label: "Profil Risiko 9" },
    { id: "halaman-10", label: "Profil Risiko 10" },
    { id: "halaman-11", label: "Profil Risiko 11" },
    { id: "halaman-12", label: "Profil Risiko 12" },
    { id: "halaman-13", label: "Profil Risiko 13" }
  ],

  // Komponen yang ada di SETIAP sub halaman, sesuai urutan tampil.
  // key: pengenal tetap (huruf kecil/angka/tanda hubung). label: nama yang tampil.
  // kind: "text" | "photo" | "document"
  // Jika satu sub halaman punya komponen berbeda, tambahkan  slots: [ ... ]  di entri halaman itu.
  SLOTS: [
    { key: "nama",    label: "Nama",        kind: "text" },
    { key: "foto",    label: "Foto",        kind: "photo" },
    { key: "dokumen", label: "Dokumen PDF", kind: "document" }
  ]
};
