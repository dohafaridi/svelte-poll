import { writable } from 'svelte/store'

const polls = writable([
  {
    id: 1,
    question: 'Lorem ipsum ?',
    answerA: {
      text: 'Oui',
      votes: 10,
    },
    answerB: {
      text: 'Non',
      votes: 10,
    },
  },
  {
    id: 2,
    question: 'lorem depso ipsum?',
    answerA: {
      text: 'Yes',
      votes: 10,
    },
    answerB: {
      text: 'No',
      votes: 10,
    },
  },
])

export default polls
