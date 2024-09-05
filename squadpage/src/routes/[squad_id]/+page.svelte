<script>
  export let data
</script>

<ul>
  {#each data.persons as person}
    {#if person.name.length > 0}
      <li>
        {person.name} {person.prefix} {person.surname}
      </li>
    {/if}
  {/each}
</ul>
