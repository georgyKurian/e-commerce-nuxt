<template>
  <section class="newsletter-area p-16 bg-slate-200">
    <Container>
      <div class="row justify-content-between">
        <!-- Newsletter Text -->
        <div class="col-12 col-lg-6">
          <div class="newsletter-text">
            <h2 class="text-3xl mb-2">Join our Newsletter</h2>
            <p class="mb-0">Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
          </div>
        </div>

        <!-- Newsletter Form -->
        <div class="col-12 col-lg-4">
          <div class="newsletter-form">
            <form>
              <input
                class="w-full h-12 border-0 border-b-2 border-black bg-transparent text-xl italic outline-none px-8"
                placeholder="Your E-mail"
              />
              <button class="bg-black text-white px-4 py-2" @click.prevent="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
function submit(): void {
  return alert('Thank you for subscribing');
}
</script>
