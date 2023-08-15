<?php
//periksa apakah tombol cari telah diklik

if (isset($_POST['cari'])) {
    // Koneksi ke database
    $conn = mysqli_connect("localhost", "u1573766_admin", "perdamisumbar", "u1573766_db_certificates");

    // Menerima inputan dari user
    $search = $_POST['search'];

    $sql = "SELECT * FROM certificates WHERE name LIKE '%$search%' OR nra LIKE '%$search%' OR certificate_type LIKE '%$search%' OR role LIKE '%$search%'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // tampilkan data yang ditemukan
    } else {
        // tampilkan notifikasi jika data tidak ditemukan
        echo "<script>alert('Data tidak ditemukan, Periksa kembali inputan!!');</script>";
    }
}


// $sql = "SELECT * FROM certificates WHERE name LIKE '%$search%' OR nra LIKE '%$search%' OR email LIKE '%$search%' OR institusi LIKE '%$search%'";
// $result = mysqli_query($conn, $sql);

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E-certificate</title>
    <app-head></app-head>
  </head>
  <body>
    <!-- navbar -->

    <app-navbar></app-navbar>

    <!-- end navbar -->

    <!-- content -->

    <div>
      <!-- ... (previous HTML code) -->

      <!-- Logo -->
      <div class="starting-point" style="text-align: center; margin-top: 10%">
        <img src="assets/img/logo.jpg" alt="" style="width: 30%" />
      </div>

      <!-- Search Form -->
      <div style="text-align: center; margin-top: 10%">
        <select
          style="width: 15%"
          onchange="setSelectedEvent(event.target.value)">
          <option value="" disabled selected>Events</option>
          <option value="som15th">SOM15th</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
        </select>
      </div>

      <!-- Search Form -->
      <div style="text-align: center; margin-top: 2%; margin-bottom: 2%">
      <form action="" method="post">
        <input
          type="text"
          placeholder="Search name"
          value=""
          onchange="setSearchName(event.target.value)" />
        <button
          type="button"
          style="
            background-color: #00345b;
            margin-left: 3%;
            border-radius: 20%;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            cursor: pointer;
          "
          onclick="handleSearch()">
          Search
        </button>
        </form>
      </div>

      <!-- ... (rest of the HTML code) -->


      <?php if (isset($result) && mysqli_num_rows($result) > 0) : ?>
        <table class="centered responsive-table">

            <thead>
                <tr>
                    <th>NRA</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Certificate Type</th>
                    <th>Download</th>

                </tr>
            </thead>

            <tbody>

                <?php while ($row = mysqli_fetch_assoc($result)) : ?>
                    <tr>
                        <td><?= $row["nra"]; ?></td>
                        <td><?= $row["name"]; ?></td>
                        <td><?= $row["role"]; ?></td>
                        <td><?= $row["certificate_type"]; ?></td>

                        <td>
                            <?php
                            $pdf_url = 'data:application/pdf;base64,' . base64_encode($row['certificate']);
                            ?>
                            <a href="<?php echo $pdf_url; ?>" download="<?php echo $row['name']; ?>.pdf">Download</a>
                        </td>

                    </tr>

                <?php endwhile; ?>
            </tbody>
        </table>
    <?php endif; ?>

      <!-- Error Message -->
      <div style="text-align: center; color: red"></div>

      <!-- Table -->
      <!-- <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>NIK</th>
            <th>Event</th>
            <th>Keterangan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> -->
      <!-- Certificate data will be populated here using JavaScript -->
      <!-- </tbody>
      </table> -->
    </div>

    <!-- content end -->

    <!-- footer -->

    <app-footer></app-footer>

    <!-- footer end -->

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
      crossorigin="anonymous"></script>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script src="./components.js"></script>
    <script src="./e-certificate-download.js"></script>
  </body>
</html>
