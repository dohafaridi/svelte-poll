<script>
  import Button from '../atoms/Button.svelte'
  import Card from '../molecules/Card.svelte'
  import polls from '../stores/polls'

  export let poll = {}
  export let index = 0

  const handleDelete = (id) =>
    polls.update((currentPoll) => currentPoll.filter((poll) => poll.id !== id))

  const incrementVotes = (index, key) =>
    polls.update((currentPoll) => {
      currentPoll[index][key].votes += 1
      return currentPoll
    })
</script>

<style>
  .Poll__question {
    font-weight: bold;
    font-size: 18px;
  }

  .Poll__votes {
    font-size: 12px;
    color: #888;
    margin-bottom: 15px;
  }

  .Poll__answer {
    display: flex;
    padding: 10px 0;
    background: rgba(0, 0, 0, 0.03);
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  .Poll__answer--text {
    margin-left: 20px;
  }

  .Poll__actions {
    text-align: center;
  }
</style>

<div class="Poll">
  <Card>
    <div class="Poll__question">{poll.question}</div>
    <div class="Poll__votes">
      Total votes :
      {poll.answerB.votes + poll.answerA.votes}
    </div>
    <div class="Poll__answer" on:click={() => incrementVotes(index, 'answerA')}>
      <div class="Poll__answer--text">{poll.answerA.text}</div>
      <div>&nbsp;&nbsp;({poll.answerA.votes} votes)</div>
    </div>
    <div class="Poll__answer" on:click={() => incrementVotes(index, 'answerB')}>
      <div class="Poll__answer--text">{poll.answerB.text}</div>
      <div>&nbsp;&nbsp;({poll.answerB.votes} votes)</div>
    </div>
    <div class="Poll__actions">
      <Button type="button" on:click={() => handleDelete(poll.id)}>
        Delete
      </Button>
    </div>
  </Card>
</div>
