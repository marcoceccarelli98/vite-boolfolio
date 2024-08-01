<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav
      class="position-fixed top-0 start-0 end-0 navbar navbar-expand-md navbar-light bg-white shadow-sm"
    >
      <div class="container">
        <a
          class="navbar-brand d-flex align-items-center bold"
          href="{{ url('/') }}"
        >
          myPortfolio
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> Projects</a>
            </li>
          </ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->

            <li class="nav-item">
              <a class="nav-link"> Login</a>
            </li>

            <li class="nav-item">
              <a class="nav-link">Register</a>
            </li>

            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                v-pre
              >
              </a>

              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item">Dashboard</a>
                <a
                  class="dropdown-item"
                  onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
