

{#each data as person }
    <div>
        <h1>{person.name}</h1>
        <p>{person.id}</p>
    </div>
{/each}

<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>



	




