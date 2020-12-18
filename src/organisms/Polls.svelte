<script>
  import { fade, slide, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  import Button from '../atoms/Button.svelte'
  import PollDetails from '../molecules/PollDetails.svelte'
  import polls from '../stores/polls'

  const handleDelete = (id) =>
    polls.update((currentPolls) =>
      currentPolls.filter((poll) => poll.id !== id)
    )

  const incrementVotes = (index, key) =>
    polls.update((currentPolls) => {
      currentPolls[index][key].votes += 1
      return currentPolls
    })
</script>

<style>
  .Polls {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    grid-auto-rows: minmax(100px, auto);
    padding: 40px 0;
  }
</style>

<div class="Polls">
  {#each $polls as poll, index (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} {index} />
    </div>
  {:else}
    <p>No polls available!</p>
  {/each}
</div>
