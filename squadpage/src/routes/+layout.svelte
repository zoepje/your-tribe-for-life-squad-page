<script>
  export let data
</script>

<h1>Squadpage</h1>

<ul>
  {#each data.squads as squad}
    <li>
      <a href="/{squad.id}">{squad.name}</a>
    </li>
  {/each}
</ul>

<slot></slot>