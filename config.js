// Isi dengan nilai dari Supabase: Project Settings -> API
// anon key AMAN ada di sini (keamanan dijaga RLS). JANGAN pernah pakai service_role key.
window.APP_CONFIG = {
  SUPABASE_URL: "https://jqaxhcwysecihvbxsxnf.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxYXhoY3d5c2VjaWh2YnhzeG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5NDc3ODQsImV4cCI6MjEwNzUyMzc4NH0.Rp1v_jnJNCqxI-gnNirlb48bB2y323i0bXFWkgPFSn0",
  BUCKET: "content",
  MAX_MB: 10,

  // Pilihan status residu risiko. CONTOH SAJA: ganti dengan level yang sebenarnya.
  // key: pengenal tetap (huruf kecil/angka/tanda hubung, jangan diubah setelah dipakai)
  // label: teks yang tampil | color: warna latar (kode hex)
  STATUS_LEVELS: [
    { key: "sangat-rendah", label: "SANGAT RENDAH", color: "#2e9e5b" },
    { key: "rendah",        label: "RENDAH",        color: "#8bc34a" },
    { key: "sedang",        label: "SEDANG",        color: "#f2c230" },
    { key: "tinggi",        label: "TINGGI",        color: "#f08a24" },
    { key: "sangat-tinggi", label: "SANGAT TINGGI", color: "#d64545" }
  ],

  // Halaman muka + 13 sub halaman. "id" dipakai di alamat (?page=halaman-1) dan nama folder file:
  // huruf kecil, angka, tanda hubung. Ganti "label" dengan nama asli. Jangan ubah id setelah ada konten.
  PAGES: [
    { id: "home", label: "Halaman muka", slots: [
      { key: "pemilik",      label: "Pemilik risiko",    kind: "person", large: true },
      { key: "pengendali-1", label: "Pengendali risiko 1", kind: "person" },
      { key: "pengendali-2", label: "Pengendali risiko 2", kind: "person" },
      { key: "pengendali-3", label: "Pengendali risiko 3", kind: "person" },
      { key: "pengendali-4", label: "Pengendali risiko 4", kind: "person" }
    ] },
    { id: "halaman-1",  label: "Halaman 1" },
    { id: "halaman-2",  label: "Halaman 2" },
    { id: "halaman-3",  label: "Halaman 3" },
    { id: "halaman-4",  label: "Halaman 4" },
    { id: "halaman-5",  label: "Halaman 5" },
    { id: "halaman-6",  label: "Halaman 6" },
    { id: "halaman-7",  label: "Halaman 7" },
    { id: "halaman-8",  label: "Halaman 8" },
    { id: "halaman-9",  label: "Halaman 9" },
    { id: "halaman-10", label: "Halaman 10" },
    { id: "halaman-11", label: "Halaman 11" },
    { id: "halaman-12", label: "Halaman 12" },
    { id: "halaman-13", label: "Halaman 13" }
  ],

  // Komponen yang sama di SETIAP sub halaman (halaman tanpa "slots" sendiri memakai daftar ini).
  // kind: "status" | "person" | "document"
  SLOTS: [
    { key: "status",            label: "Status residu risiko",          kind: "status" },
    { key: "penjamin-mutu",     label: "Penjamin mutu",                 kind: "person" },
    { key: "pengendali-1",      label: "Pengendali risiko 1",           kind: "person" },
    { key: "pengendali-2",      label: "Pengendali risiko 2",           kind: "person" },
    { key: "risk-register",     label: "Risk register",                 kind: "document" },
    { key: "sop",               label: "SOP",                           kind: "document" },
    { key: "form-pengendalian", label: "Form pengendalian",             kind: "document" },
    { key: "jadwal-rencana",    label: "Jadwal rencana",                kind: "document" },
    { key: "bukti-pelaksanaan", label: "Bukti pelaksanaan",             kind: "document" },
    { key: "eval-perbaikan",    label: "Evaluasi dan rencana perbaikan", kind: "document" }
  ]
};
