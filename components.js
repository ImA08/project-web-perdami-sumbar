class Head extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<link rel="icon" href="assets/img/logo-perdami.png" />

        <!-- bootstrap assets -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/main.css">
    
        <!-- fontawesomw -->
        <script src="https://kit.fontawesome.com/fa749c5de2.js" crossorigin="anonymous"></script>
    
    
        `;
  }
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <nav id="navbar" class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <a class="navbar-brand" href="home.html">
          <img src="assets/img/logo.jpg" alt="" />
        </a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto">
          <a class="nav-link active me-5" aria-current="page" href="home.html"
            >Home</a
          >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle me-5"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Profil
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="about.html">Tentang PERDAMI</a>
              </li>
              <li>
                <a class="dropdown-item" href="struktur-organisasi.html"
                  >Struktur Organisasi</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="dkedk.html">Dewan Kehormatan Etik dan Disiplin Kedokteran(DKEDK)</a>
              </li>
              <li>
                <a class="dropdown-item" href="bpk.html">Badan Pemeriksa Keuangan(BPK)</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle me-5"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Acara
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="som15th.html">SOM 15th</a></li>
              <li><a class="dropdown-item" href="rakernas.html">Rakernas</a></li>
              <li><a class="dropdown-item" href="hbdi.html">HBDI 115th</a></li>
            </ul>
          </li>
  
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle me-5"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Media
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="e-certificate.html">E-Certificate</a></li>
              <li><a class="dropdown-item" href="gallery.html">Galleri</a></li>
              
            </ul>
          </li>
  
          <a class="nav-link me-5" href="hubungi-kami.html">Hubungi Kami</a>
        </ul>
      </div>
    </div>
  </nav>
  `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="cta">
  <div class="row">
    <div class="col-md-4">
      <p><strong>Sekretariat PERDAMI Sumbar</strong></p>
      <p>
        Perumahan Pondok Indah Pratama Blok B/4 Jati Gaung Kec. Padang Timur,
        Kota Padang
      </p>
    </div>
    <div class="col-md-4">
      <p>
        Tel. 123-456-7890<br />
        Email: perdamisumbar2023@gmail.com<br />
        Social: @reallygreatsite
      </p>
    </div>
    <div class="col-md-4">
      <div class="icons">
        <i class="fa-brands fa-instagram fa-lg"></i
        ><a href="https://www.instagram.com/perdami.sumbar1/">
          Perdami.sumbar1</a
        ><br />
        <i class="fa-brands fa-square-facebook fa-lg"></i
        ><a href="https://www.facebook.com/perdamisumbar2020">
          Perdami Sumbar </a
        ><br />
      </div>
    </div>
  </div>
</section>
`;
  }
}

customElements.define("app-head", Head);
customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);
