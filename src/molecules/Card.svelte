<script>
  import { fade, slide, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  export const isDark = false
</script>

<style>
  .Card {
    padding: 15px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
  }

  .Card__dark {
    color: #fff;
    background-color: #424242;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  }
</style>

<section class="Card" class:Card__dark={isDark}>
  <slot />
</section>
