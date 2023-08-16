---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/74949101?v=4',
    name: 'Slekup',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/slekup' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/49023180?v=4',
    name: 'Brian Kungu',
    title: 'Frontend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/brianKungu'}]
  }, {
    avatar: 'https://avatars.githubusercontent.com/u/82731458?v=4',
    name: 'Abdullah Alharbi',
    title: 'Fullstack Developer',
    links: [
      { icon: 'github', link: 'https://github.com/A-alharbi9' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
