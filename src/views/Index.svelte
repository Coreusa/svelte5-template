<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faPaintBrush, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="p-3">
  <h1>Heading</h1>
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolores voluptates. Voluptates eveniet veritatis
    atque consectetur numquam animi culpa aliquam, exercitationem odio in asperiores esse laborum iure obcaecati aut
    voluptatibus?
    <Icon data={faThumbsUp} />
  </div>
  <div class="mt-3">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, dolores voluptates. Voluptates eveniet veritatis
    atque consectetur numquam animi culpa aliquam, exercitationem odio in asperiores esse laborum iure obcaecati aut
    voluptatibus?
    <Icon data={faPaintBrush} />
  </div>
</div>
