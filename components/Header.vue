<template>
  <div class="w-full h-full">
    <header ref="referenceRef" class="relative">
      <div
        class="flex justify-between items-center flex-wrap md:flex-nowrap px-4 md:px-10 py-2 md:py-5 w-full h-full border-0 bg-primary-700 border-neutral-200 md:h-20 md:z-10"
      >
        <div class="flex items-center">
          <SfButton
            variant="tertiary"
            square
            aria-label="Close menu"
            class="block md:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            @click="openMenu([])"
          >
            <SfIconMenu class="text-white" />
          </SfButton>
          <a
            href="#"
            aria-label="SF Homepage"
            class="flex shrink-0 w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem] items-center mr-auto text-white md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source
                srcset="/images/fi-logo.svg"
                media="(min-width: 1024px)"
              />
              <img src="/images/fi-logo.svg" alt="Sf Logo" width="500" />
            </picture>
          </a>
        </div>
        <form
          role="search"
          class="hidden md:flex flex-[100%] ml-10"
          @submit.prevent="search"
        >
          <SfInput
            v-model="inputValue"
            :name="$t('Search')"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>
        <nav class="flex flex-nowrap justify-end items-center md:ml-10 gap-x-1">
          <HeaderDarkModeToggleButton />
          <HeaderLocaleButton />
          <HeaderCartButton @open="cartState" />
          <HeaderProfileButton />
          <SfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            :aria-label="actionItem.ariaLabel"
            class="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            variant="tertiary"
            square
          >
            <template #prefix>
              <Component :is="actionItem.icon" />
            </template>
            <p
              v-if="actionItem.role === 'login'"
              class="hidden lg:inline-flex whitespace-nowrap mr-2"
            >
              {{ actionItem.label }}
            </p>
          </SfButton>
        </nav>
        <form
          role="search"
          class="flex md:hidden flex-[100%] my-2"
          @submit.prevent="search"
        >
          <SfInput
            :name="$t('Search')"
            v-model="inputValue"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>
        <!--User Modal-->
        <!-- <HeaderUserModal /> -->
        <!--Cart Component-->
        <HeaderCart :is-open="cart" @closeCart="cartState" />
      </div>
      <!-- Desktop dropdown -->
      <nav ref="floatingRef">
        <ul
          class="hidden md:flex px-6 py-2 bg-white border-b border-b-neutral-200 border-b-solid"
          @blur="
            (event) => {
              if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                close();
              }
            }
          "
        >
          <li
            v-for="(menuNode, index) in MenuData.children"
            :key="menuNode.key"
          >
            <SfButton
              ref="triggerRefs"
              variant="tertiary"
              class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
              @mouseenter="openMenu([menuNode.key])"
              @click="openMenu([menuNode.key])"
            >
              <span>{{ menuNode.value.label }}</span>
              <SfIconChevronRight
                class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
              />
            </SfButton>

            <div
              v-if="
                isOpen &&
                activeNode.length === 1 &&
                activeNode[0] === menuNode.key
              "
              :key="activeMenu.key"
              ref="megaMenuRef"
              :style="style"
              class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none z-10"
              tabindex="0"
              @mouseleave="close()"
              @keydown.esc="focusTrigger(index)"
            >
              <template v-for="node in activeMenu.children" :key="node.key">
                <template v-if="node.isLeaf">
                  <SfListItem
                    tag="a"
                    size="sm"
                    :href="node.value.link"
                    class="typography-text-sm mb-2"
                  >
                    {{ node.value.label }}
                  </SfListItem>
                  <div class="col-start-2 col-end-5" />
                </template>
                <div v-else>
                  <p
                    class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid"
                  >
                    {{ node.value.label }}
                  </p>
                  <ul class="mt-2">
                    <li v-for="child in node.children" :key="child.key">
                      <SfListItem
                        tag="a"
                        size="sm"
                        :href="child.value.link"
                        class="typography-text-sm py-1.5"
                      >
                        {{ child.value.label }}
                      </SfListItem>
                    </li>
                  </ul>
                </div>
              </template>
              <div
                class="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow"
              >
                <img
                  :src="bannerNode.value.banner"
                  :alt="bannerNode.value.bannerTitle"
                  class="object-contain"
                />
                <p
                  class="px-4 mt-4 mb-4 font-medium text-center typography-text-base"
                >
                  {{ bannerNode.value.bannerTitle }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Mobile drawer -->
      <div
        v-if="isOpen"
        class="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50"
      />
      <SfDrawer
        ref="drawerRef"
        v-model="isOpen"
        placement="left"
        class="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
      >
        <nav>
          <div
            class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid"
          >
            <p class="typography-text-base font-medium">Browse products</p>
            <SfButton
              variant="tertiary"
              square
              aria-label="Close menu"
              class="ml-2"
              @click="close()"
            >
              <SfIconClose class="text-neutral-500" />
            </SfButton>
          </div>
          <ul class="mt-2 mb-6">
            <li v-if="activeMenu.key !== 'root'">
              <SfListItem
                size="lg"
                tag="button"
                type="button"
                class="border-b border-b-neutral-200 border-b-solid"
                @click="goBack()"
              >
                <div class="flex items-center">
                  <SfIconArrowBack class="text-neutral-500" />
                  <p class="ml-5 font-medium">{{ activeMenu.value.label }}</p>
                </div>
              </SfListItem>
            </li>
            <template
              v-for="node in activeMenu.children"
              :key="node.value.label"
            >
              <li v-if="node.isLeaf">
                <SfListItem
                  size="lg"
                  tag="a"
                  :href="node.value.link"
                  class="first-of-type:mt-2"
                >
                  <div class="flex items-center">
                    <p class="text-left">{{ node.value.label }}</p>
                    <SfCounter class="ml-2">{{ node.value.counter }}</SfCounter>
                  </div>
                </SfListItem>
              </li>
              <li v-else>
                <SfListItem
                  size="lg"
                  tag="button"
                  type="button"
                  @click="goNext(node.key)"
                >
                  <div class="flex justify-between items-center">
                    <div class="flex items-center">
                      <p class="text-left">{{ node.value.label }}</p>
                      <SfCounter class="ml-2">{{
                        node.value.counter
                      }}</SfCounter>
                    </div>
                    <SfIconChevronRight class="text-neutral-500" />
                  </div>
                </SfListItem>
              </li>
            </template>
          </ul>
          <div
            v-if="bannerNode.value.banner"
            class="flex items-center overflow-hidden bg-neutral-100 border-neutral-300 grow"
          >
            <img
              :src="bannerNode.value.banner"
              :alt="bannerNode.value.bannerTitle"
              class="object-contain w-[50%] basis-6/12"
            />
            <p class="basis-6/12 p-6 font-medium typography-text-base">
              {{ bannerNode.value.bannerTitle }}
            </p>
          </div>
        </nav>
      </SfDrawer>
    </header>
  </div>
</template>

<script lang="ts" setup>
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  SfInput,
  SfIconSearch,
} from "@storefront-ui/vue";
import { onMounted, ref } from "vue";
import { unrefElement } from "@vueuse/core";
import MenuData from "./MenuData";

const cart = ref(false);

const cartState = () => (cart.value = !cart.value);

const findNode = (keys: string[], node: typeof MenuNode): typeof MenuNode => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(
      restKeys,
      node.children?.find(
        (child: typeof MenuNode) => child.key === currentKey
      ) || node
    );
  } else {
    return (
      node.children?.find((child: typeof MenuNode) => child.key === keys[0]) ||
      node
    );
  }
};

const { close, open, isOpen } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: "bottom-start",
  middleware: [],
});

const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string[]>([]);

const activeMenu: typeof MenuNode = computed(() =>
  findNode(activeNode.value, MenuData)
);
const bannerNode: typeof MenuNode = computed(() =>
  findNode(activeNode.value.slice(0, 1), MenuData)
);

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: "container",
} as const;
useTrapFocus(
  computed(() => megaMenuRef.value?.[0]),
  trapFocusOptions
);
useTrapFocus(drawerRef, trapFocusOptions);

const openMenu = (menuType: string[]) => {
  activeNode.value = menuType;
  open();
};

const goBack = () => {
  activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
};

const goNext = (key: string) => {
  activeNode.value = [...activeNode.value, key];
};

const focusTrigger = (index: number) => {
  unrefElement(triggerRefs.value[index]).focus();
};

const inputValue = ref("");

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};

const actionItems = [
  {
    icon: SfIconFavorite,
    label: "",
    ariaLabel: "Wishlist",
    role: "button",
  },
];
</script>
