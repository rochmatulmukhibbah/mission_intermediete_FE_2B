import './index.css'
import Banner from './assets/Component/Banner';
import Subtitle from './assets/Component/Subtitle';
import Navigasi from './assets/Component/Navigasi';
import FooterInformation from './assets/Component/FooterInformation';
import Produk from './assets/Component/Produk';
import FooterSosmed from './assets/Component/FooterSosmed';
import React from 'react';
import StarRating from './assets/Component/StarRating';
import DropdownMenu from './assets/Dropdown/DropdownMenu';


function App() {

  return (
    <div className="w-full h-dvh">
      <DropdownMenu />
      <Banner judulbanner="Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif"  titlebanner="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman anda." tombol="Temukan Video course untuk dipelajari!"/>
      <Subtitle/>
      <Navigasi/>
      <section className="bg-cyan-50">
      <div className="container px-2 py-6 mx-auto">
      <div className="flex flex-wrap">
      <Produk image="maxresdefault.jpg" title="Belajar Smudge Ibispaint X" description="Menggunakan Ibispaint x dari basic" avatar="ava5.jfif" name="Jena Ortega" departemen="Senior Artist" range="3.5(86)" harga="150k" bintang={5} />
      <Produk image="anime.jfif" title="Belajar Medibang Paint" description="Menggunakan Medibang Paint dari basic" avatar="ava4.jfif" name="Silvia" departemen="Mastering desain" range="3.5(90)" harga="300k" bintang={4}/>
      <Produk image="office.webp" title="Membangun Mini Office Sendiri" description="Tips Membangun usaha Mandiri" avatar="ava3.jpg" name="Kelzie" departemen="Guide Business" range="4.0(78)" harga="350k" bintang={3}/>
      <Produk image="design.jfif" title="Panduan Menjual Desain" description="Tips Menjual Desain Ke Platform" avatar="ava.jfif" name="Mustafa Ramadhan" departemen="Freelance" range="4.0(80)" harga="350k" bintang={2}/>
      <Produk image="freelance.jfif" title="Memulai Freelance" description="Memulai Freelance diusia Muda" avatar="ava2.avif" name="Irsyadul Ibad" departemen="Freelance" range="5.0(90)" harga="350k" bintang={4}/>
      <Produk image="fundamental.png" title="Marketing Fundamentals" description="Mulai Dari Basic To Up" avatar="ava6.png" name="Jack" departemen="Digital Marketing Fundamental" range="3.5(86)" harga="300k" bintang={3}/>
      <Produk image="strategi.jfif" title="Marketing Strategis" description="Bimbingan strategi dalam Marketing" avatar="ava7.jfif" name="Noah" departemen="Digital Marketing Strategis" range="3.5(90)" harga="300k" bintang={4}/>
      <Produk image="sosmed.jfif" title="Social Media Marketing" description="Bedah Content Sosmed Marketing" avatar="ava8.jfif" name="Emily" departemen="Content Marketing Sosmed" range="4.0(78)" harga="350k" bintang={2}/>
      <Produk image="SEO.jfif" title="SEO Marketing" description="Buat Bisnismu Mudah Ditemukan" avatar="ava9.jfif" name="Ava" departemen="SEO Marketing" range="4.0(80)" harga="350k" bintang={3}/> 
      </div>
      </div>
      <div className="pl-14 flex items-center bg-orange-200 w-full h-24">
      <StarRating/>
      </div>

      </section>
      
      <Banner judulbanner="Mau Belajar Lebih Banyak?" titlebanner="Daftarkan Dirirmu Untuk Mendapatkan Informasi Terbaru Dan Penawaran Spesial Dari Program-Program Terbaik Hariesok.id" tombol="Daftarkan Dirimu Sekarang!"/>
      <div className="w-full flex items-center justify-center bg-cyan-50 h-96 sm:h-dvh">
        <div className="flex flex-wrap w-5/6 h-80 bg-gray-300">
        <FooterInformation sticker="Type=Type5.png" judulfooter="Gali potensi Anda Melalui Pembelajaran Video di Hariesok.id!" isi1="Jl. Usman Effendi No.50 Lowokwaru, Malang" isi2="+62 853 8420 0598"/>
        <FooterInformation judulfooter="Kategori" isi1="Digital & Teknologi" isi2="Pemasaran" isi3="Manajemen Bisnis" isi4="Pengembangan Diri" isi5="Desain"/>
        <FooterInformation judulfooter="Perusahaan" isi1="Tentang Kami" isi2="FAQ" isi3="Kebijakan Privasi" isi4="Ketentuan Layanan" isi5="Bantuan"/>
        <FooterInformation judulfooter="Komunitas" isi1="Tips Sukses" isi2="Blog" />
        </div>
      </div>

      <FooterSosmed/>
    </div>
    
  )
}

export default App;
