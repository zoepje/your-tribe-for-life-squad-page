<script>
    export let data
  
    function checkAvatarImage (avatar) {
      if (avatar.includes('https')) {
        return true
      } 
  
      return false
    }
  </script>
  
  <main>
    <h1>Team 27</h1>
    <p>Welcome to this squadpage, here you can find the two squads from year 2 of FDND</p>
  
    
  </main>
  
  <style>

    ul {
      list-style: none;
      padding:0;
      display:flex;
      gap:.5rem;
      align-items:start;
    }

  </style>