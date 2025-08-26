import React from "react";
import Accordion from "./accordion";
import "./style.css";

const organizational = [
  {
    title: "Sekretaris I",
    subtitle: "Ikatan Remaja Masjid 2023-2024",
    desc: "Mengelola pencatatan absensi dan kebutuhan administrasi untuk mendukung kelancaran ekstrakurikuler IRMA"
  },
  {
    title: "Staff Sekbid 7 - Kualitas Jasmani, Kesehatan dan Gizi",
    subtitle: "OSIS SMAN 2 Cikarang Pusat 2021-2022",
    desc: "Merealisasikan kegiatan dalam memperingati Hari Gizi Nasional, pengaktifan UKS & PMR, JUMSIH (Jumat Bersih), dan kegiatan Senam bersama sebagai program kerja Sekbid 7"
  }
];

const committee = [
  {
    title: "Staff Divisi Kestari",
    subtitle: "ITechno Cup 2025",
    desc: "Mendukung kebutuhan kegiatan ITechno Cup dalam mengurus administrasi"
  },
  {
    title: "Staff Divisi Seniora",
    subtitle: "TIK Games 2025",
    desc: "Merancang perlombaan yang akan dilombakan dalam bidang Seni dan Olahraga"
  },
  {
    title: "Kepala Divisi Dana-Kestari",
    subtitle: "Computer Science Festival 2024",
    desc: "Memimpin divisi dalam menyusun proposal dan merencanakan anggaran dana dalam kegiatan CSFEST 2024"
  },
  {
    title: "Sekretaris",
    subtitle: "Maulid Nabi Muhammad 1445 H",
    desc: "Bertanggung jawab dalam penyusunan proposal kegiatan serta perencanaan anggaran dana untuk program kerja tahunan peringatan Maulid Nabi Muhammad SAW 1445 H"
  },
  {
    title: "Staff Divisi Humas",
    subtitle: "Festar (Festival Star Warsada) 2022",
    desc: "Melakukan pemeriksaan proposal untuk mengurus kerja sama dalam pencarian sponsor yang mendukung kegiatan pentas seni sekolah: Festar 2022"
  },
  {
    title: "Sekretaris",
    subtitle: "Class Meeting 2022",
    desc: "Bertanggung jawab dalam penyusunan proposal kegiatan Class Meeting sebagai bagian dari program kerja OSIS"
  }
];

export default function History() {
  return (
    <div className="history-section"> 
      <h2 className="section-heading">
        Take a look at the <span className="highlight">History</span> that built who I am today
      </h2>
      <div className="history-container">
        <Accordion title="Organizational Experience" data={organizational} />
        <Accordion title="Committee Experience" data={committee} />
      </div>
    </div>
  );
}
