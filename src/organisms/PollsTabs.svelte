<script>
  import Polls from './Polls.svelte'
  import PollForm from './PollForm.svelte'
  import { Tabs, TabList, TabPanel, Tab } from '../molecules/Tabs'
</script>

<style>
  .PollsTabs {
    flex: 1;
  }
</style>

<section class="PollsTabs">
  <Tabs>
    <TabList>
      <Tab>Current polls</Tab>
      <Tab>Create new poll</Tab>
    </TabList>

    <TabPanel>
      <Polls />
    </TabPanel>

    <TabPanel>
      <PollForm />
    </TabPanel>
  </Tabs>
</section>
