<script>
  import Header from '../organisms/Header.svelte'
  import Footer from '../organisms/Footer.svelte'
  import PollsTabs from '../organisms/PollsTabs.svelte'
</script>

<style>
  main {
    min-height: 80vh;
  }
</style>

<Header />
<main>
  <div class="container">
    <PollsTabs />
  </div>
</main>
<Footer />
