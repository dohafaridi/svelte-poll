<script>
  import { getContext } from 'svelte'
  import { TABS } from './Tabs.svelte'

  const tab = {}
  const { registerTab, selectTab, selectedTab } = getContext(TABS)

  registerTab(tab)
</script>

<style>
  button {
    background: none;
    border: none;
    border-radius: 0;
    margin: 0;
    color: #000;
    padding-bottom: 5px;
    cursor: pointer;
    outline: none;
  }

  button:first-child {
    margin-right: 20px;
  }

  .selected {
    border-bottom: 2px solid #a52e2e;
    color: #a52e2e;
  }
</style>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
  <slot />
</button>
