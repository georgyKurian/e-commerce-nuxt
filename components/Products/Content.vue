<template>
  <div>
    <div class="flex flex-col md:flex-row gap-4 container px-4 sm:px-0 justify-content-between">
      <div id="col-1" class="md:w-2/3">
        <section class="py-4">
          <h2 class="text-xl font-bold mb-2">{{ $t('Description') }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
        <section class="py-4">
          <h2 class="text-xl font-bold mb-2">{{ $t('Outline') }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </div>
      <div id="col-2" class="flex-1">
        <section class="py-4 rounded bg-neutral-200 p-4">
          <h2 class="text-xl font-bold mb-2">{{ $t('Features') }}</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
