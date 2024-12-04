<script lang="ts">
    let { header, children, showingModal = $bindable(), closeMessage } = $props();

    let dialog: HTMLDialogElement | undefined = $state();
    let isClosing: boolean = $state(false);

	$effect(() => {
		if (showingModal) {
			isClosing = false;
			dialog?.showModal();
		} else if (dialog?.hasAttribute('open')) {
			isClosing = true;
			setTimeout(() => {
				isClosing = false;
				dialog?.close();
			}, 300);
		}
	});

</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<div class="modal-container {isClosing ? 'closing' : ''} {showingModal ? 'visible' : ''}">
	<dialog class="modal {isClosing ? 'closing' : ''}"
		bind:this={dialog}
		onclose={() => (showingModal = false)}
		onclick={(e) => {
			if (e.target === dialog) {
				showingModal = false;
			}
		}}
	>
		<div>
			{@render header?.()}
			{@render children?.()}
		</div>
		<!-- svelte-ignore a11y_autofocus -->
		<div class="actions-div">
			<button autofocus onclick={() => showingModal = false}>{closeMessage}</button>
		</div>
	</dialog>
</div>

<style lang="scss">
@use '/src/style/var.scss';

.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.3);
	transition: opacity 0.22s ease-out;
	backdrop-filter: blur(6px);

	&.visible {
		opacity: 1;
		pointer-events: auto;
	}

	&.closing {
		opacity: 0;
	}

	.modal {
		filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
		min-width: 32em;
		padding: 1em;
		background-color: var.$bg;
		border: 2.5px solid lighten(var.$content-border, 4%);
		border-radius: 12px;
		pointer-events: auto;
		transform: scale(0.93);
		margin: auto;

		opacity: 0;
        transform: scale(0.7);
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        
        > div {
            padding: 1em;
        }
        
        &[open] {
            opacity: 1;
            transform: scale(1);
        }

		&.closing {
            opacity: 0;
            transform: scale(0.7);
        }

		> .actions-div {
			> button {
				background-color: lighten(var.$content-bg, 10%);
			}

			direction: rtl;

		}
	}
}
</style>