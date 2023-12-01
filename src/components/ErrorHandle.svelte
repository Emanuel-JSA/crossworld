<script>
    import { fade } from 'svelte/transition';
    import { errorStore } from '../store';

    let displayMessage = '';

    $: errorStore.subscribe(value => {
        displayMessage = value;
        if (value !== '') {
            setTimeout(() => {
                errorStore.set('');
            }, 3000); // O alerta desaparecerá após 3 segundos
        }
    });
</script>

<style>
    .error {
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px;
        background-color: red;
        color: white;
        border-radius: 5px;
    }
</style>

{#if displayMessage !== ''}
    <div class="error" transition:fade={{duration: 500}}>
        <p>{displayMessage}</p>
    </div>
{/if}