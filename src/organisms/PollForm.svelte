<script>
  import polls from '../stores/polls'
  import Button from '../atoms/Button.svelte'

  let question = ''
  let answerA = ''
  let answerB = ''
  let preventSubmit = false

  const handleSubmit = () => {
    preventSubmit = !question || !answerA || !answerB
    if (preventSubmit) return

    polls.update((currentPolls) => [
      ...currentPolls,
      {
        id: Math.floor(Math.random() * 99999999999), //uuidv4
        question,
        answerA: {
          text: answerA,
          votes: 0,
        },
        answerB: {
          text: answerB,
          votes: 0,
        },
      },
    ])

    question = answerA = answerB = ''
    preventSubmit = false
  }
</script>

<style>
  .error {
    border: 1px solid #ff000042;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="question"
    placeholder="Question"
    bind:value={question}
    class:error={preventSubmit && !question} />
  <input
    type="text"
    name="answer-a"
    placeholder="Answer A"
    bind:value={answerA}
    class:error={preventSubmit && !answerA} />
  <input
    type="text"
    name="answer-b"
    placeholder="Answer B"
    bind:value={answerB}
    class:error={preventSubmit && !answerB} />
  <Button type="submit|currententDefault">Add</Button>
</form>
